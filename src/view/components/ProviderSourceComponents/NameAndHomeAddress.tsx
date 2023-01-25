import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';
import { personalDefaultValues } from './PersonalInformation';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import SearchIcon from '@mui/icons-material/Search';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Autocomplete,
    Box,
    Button,
    Chip,
    Divider,
    FormControl,
    Grid,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import axios from 'axios';
import localforage from 'localforage';
import { debounce } from 'lodash';
import type { NextPage } from 'next';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { uid } from 'uid';

import LoadingForm from 'view/components/Loading/Loading';

import { setProgressBarState } from 'state/reducers/providerSourceReducer';
import { selectProviderSourceReducer } from 'state/reducers/providerSourceReducer';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import HomeAddressFields from 'form-fields/general-information/HomeAddress';
import OtherNamesFields from 'form-fields/general-information/OtherNames';
import PersonalDetailsFields from 'form-fields/general-information/PersonalDetails';
import { PersonalInformationFieldsProps } from 'form-fields/general-information/PersonalInformation';
import StateAndPractitionerFields from 'form-fields/general-information/StateAndPractitioner';
import nameTypeList from 'form-fields/general-information/form-list/nameList';
import primaryPractitionerTypeList from 'form-fields/general-information/form-list/primaryPractitionerTypeList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import suffixList from 'form-fields/general-information/form-list/suffixList';

const StateAndPractitionerMap = {
    statesOfPracticeList: stateOfPracticeList,
    primaryPractitionerTypeList: primaryPractitionerTypeList
};

const NameTypeAndSuffixListMap = {
    nameTypeList: nameTypeList,
    otherSuffixList: suffixList
};

const SuffixListMap = {
    suffixList: suffixList
};

export const nameAndHomeAddressDefaultValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: null,
    degreeTitles: '',
    statesOfPractice: [],
    primaryPractitionerType: null,
    otherNames: [
        {
            nameType: null,
            dateStartedUsing: null,
            dateStoppedUsing: null,
            currentlyInUse: false,
            otherFirstName: '',
            otherMiddleName: '',
            otherLastName: '',
            otherSuffix: null
        }
    ],
    addressSearch: '',
    defaultCountry: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    county: '',
    state: '',
    zipCode: '',
    telephoneNumber: '',
    faxNumber: '',
    unlistedNumber: false,
    mobileNumber: '',
    pageNumber: '',
    ext: '',
    emailAddress: ''
};

const NameAndHomeAddress: NextPage<{
    activeStep: number;
    handleBack: () => void;
    handleComplete: () => void;
    steps: string[];
}> = ({ activeStep, handleBack, steps, handleComplete }) => {
    const dispatch = useAppDispatch();

    const [loadingFlag, setLoadingFlag] = useState(false);
    const { progressBarState } = useAppSelector(selectProviderSourceReducer);

    const [searchValue, setSearchValue] = useState('');
    const [addressResult, setAddressResult] = useState([{ display_name: '' }]);

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: nameAndHomeAddressDefaultValues
    });

    const {
        fields: otherNamesDataFields,
        remove: otherNamesRemove,
        append: otherNamesInsert
    } = useFieldArray({
        control,
        name: 'otherNames'
    });

    useEffect(() => {
        localforage.getItem('nameAndHomeAddressData').then((nameAndHomeAddressData: any) => {
            nameAndHomeAddressData && reset(nameAndHomeAddressData);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('nameAndHomeAddressData', getValues());
        console.log('Form updated');
    }, 5000);

    const onSubmit = (data: any) => {
        handleComplete();
        localforage.setItem('nameAndHomeAddressData', data);
        localforage.getItem('userId').then((res: any) => {
            axios
                .post('https://plm-health.herokuapp.com/api/provider/add', { ...data, userId: res })
                .then((res) => {
                    console.log('Data has been saved', { ...data, userId: res });
                })
                .catch((err) => {
                    console.log('Error while processing request', err);
                });
        });
    };

    const handleAddressSearch = (value: string, setValue: any) => {
        setLoadingFlag(true);
        axios
            .get('https://nominatim.openstreetmap.org/search/', {
                params: {
                    format: 'json',
                    addressdetails: 1,
                    q: value,
                    limit: 20
                }
            })
            .then((res) => {
                console.log(res);
                setAddressResult(res.data);

                if (res.data.length > 0) {
                    const { display_name, address } = res.data[0];
                    const {} = address;
                    setValue('addressSearch', '');
                }
                setLoadingFlag(false);
            });
    };

    const handleAddressAutofill = (value: string | null, setValue: any) => {
        setLoadingFlag(true);
        axios
            .get('https://nominatim.openstreetmap.org/search/', {
                params: {
                    format: 'json',
                    addressdetails: 1,
                    q: value,
                    limit: 20
                }
            })
            .then((res) => {
                console.log(res);
                // setAddressResult(res.data);

                if (res.data.length !== 0) {
                    const { display_name, address } = res.data[0];
                    const {
                        country,
                        postcode,
                        state,
                        city,
                        town,
                        county,
                        house_number,
                        road,
                        quarter,
                        village,
                        city_district
                    } = address;
                    setValue('addressLine1', `${house_number || ''}${road || ''}${quarter || ''}` || '');
                    setValue('addressSearch', display_name || '');
                    setValue('country', country || '');
                    setValue('zipCode', postcode || '');
                    setValue('state', state || '');
                    setValue('city', city || town || village || city_district || '');
                    setValue('county', county || '');
                } else {
                    setValue('addressSearch', '');
                }
                setLoadingFlag(false);
            });
    };

    const handleSearchCurrentLocation = (setValue: any) => {
        setLoadingFlag(true);

        navigator.geolocation.getCurrentPosition((res) => {
            const crd = res.coords;

            axios
                .get('https://nominatim.openstreetmap.org/reverse', {
                    params: {
                        format: 'json',
                        lat: crd.latitude,
                        lon: crd.longitude
                    }
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.length !== 0) {
                        const { display_name, address } = res.data;
                        const {
                            country,
                            postcode,
                            state,
                            city,
                            town,
                            county,
                            house_number,
                            road,
                            quarter,
                            village,
                            city_district
                        } = address;
                        setValue('addressLine1', `${house_number || ''}${road || ''}${quarter || ''}` || '');
                        setValue('addressSearch', display_name || '');
                        setValue('country', country || '');
                        setValue('zipCode', postcode || '');
                        setValue('state', state || '');
                        setValue('city', city || town || village || city_district || '');
                        setValue('county', county || '');
                    }
                    setLoadingFlag(false);
                });
        });
    };

    const nameAndHomeSoloInputField = {
        countryField: {
            size: 6,
            inputType: 'text',
            name: 'country',
            label: 'Country',
            required: false,
            disabled: true
        }
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {PersonalDetailsFields.map((field: PersonalInformationFieldsProps) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={SuffixListMap[field.options as keyof typeof SuffixListMap]}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    {StateAndPractitionerFields.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={StateAndPractitionerMap[field.options as keyof typeof StateAndPractitionerMap]}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Accordion>
                            <Tooltip title="Click here to add" arrow placement="top">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Other Names</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <Alert severity="info" sx={{ mb: '20px' }}>
                                    If you have other names, you must provide other name alias you have used or are
                                    currently using
                                </Alert>
                                <div>
                                    <Typography textAlign="right" sx={{ m: '0px' }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            onClick={() =>
                                                otherNamesInsert({
                                                    nameType: null,
                                                    dateStartedUsing: null,
                                                    dateStoppedUsing: null,
                                                    currentlyInUse: false,
                                                    otherFirstName: '',
                                                    otherMiddleName: '',
                                                    otherLastName: '',
                                                    otherSuffix: null
                                                })
                                            }
                                        >
                                            Add Other Names
                                        </Button>
                                    </Typography>
                                    {otherNamesDataFields.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                <Divider sx={{ m: '25px' }}>
                                                    <Chip label={`Other Name ${index + 1}`} />
                                                </Divider>

                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    {OtherNamesFields.map((field) => (
                                                        <Grid item xs={field.size} key={field.name}>
                                                            <CustomInput
                                                                control={control}
                                                                fieldProps={field}
                                                                name={`otherNames[${index}].${field.name}`}
                                                                options={
                                                                    NameTypeAndSuffixListMap[
                                                                        field.options as keyof typeof NameTypeAndSuffixListMap
                                                                    ]
                                                                }
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                <Typography textAlign="right" sx={{ mt: '20px' }}>
                                                    <Button
                                                        variant="contained"
                                                        startIcon={<DeleteIcon />}
                                                        onClick={() => {
                                                            otherNamesRemove(index);
                                                        }}
                                                    >
                                                        Remove Other Names
                                                    </Button>
                                                </Typography>
                                            </div>
                                        );
                                    })}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>

                <Divider sx={{ m: '25px' }}>
                    <Chip label="PRIMARY RESIDENCE" />
                </Divider>

                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <Controller
                                name="addressSearch"
                                control={control}
                                render={({ field }) => (
                                    <Autocomplete
                                        {...field}
                                        id="free-solo-demo"
                                        freeSolo
                                        onChange={(event, newValue) => {
                                            if (newValue !== null) {
                                                handleAddressAutofill(newValue, setValue);
                                            }
                                        }}
                                        openOnFocus
                                        onInputChange={(event, newInputValue) => {
                                            setSearchValue(newInputValue);
                                            field.onChange(newInputValue);
                                        }}
                                        options={addressResult.map((item) => item.display_name)}
                                        renderInput={(params) => (
                                            <div style={{ display: 'flex' }}>
                                                <TextField {...params} label="Address Search" name="addressSearch" />
                                                {loadingFlag ? (
                                                    <LoadingButton loading></LoadingButton>
                                                ) : (
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            border: '1px solid #C4C4C4',
                                                            position: 'absolute',
                                                            right: '0',
                                                            height: '100%'
                                                        }}
                                                    >
                                                        <Button
                                                            sx={{ borderRadius: 'unset' }}
                                                            variant="contained"
                                                            startIcon={<SearchIcon />}
                                                            onClick={() => handleAddressSearch(searchValue, setValue)}
                                                        >
                                                            Search
                                                        </Button>
                                                        <Button
                                                            sx={{ borderRadius: 'unset' }}
                                                            variant="contained"
                                                            startIcon={<MyLocationIcon />}
                                                            color="secondary"
                                                            onClick={() => handleSearchCurrentLocation(setValue)}
                                                        >
                                                            Autolocate
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    />
                                )}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Alert severity="warning">
                    Please enter your primary residence address here and not your Practice Location.
                </Alert>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={6}>
                        <CustomInput
                            control={control}
                            fieldProps={nameAndHomeSoloInputField.countryField}
                            name={nameAndHomeSoloInputField.countryField.name}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {HomeAddressFields.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput control={control} fieldProps={field} name={field.name} options={suffixList} />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {activeStep !== steps.length && (
                        <Button variant="contained" type="submit">
                            Next
                        </Button>
                    )}
                </Box>
            </form>
        </React.Fragment>
    );
};

export default NameAndHomeAddress;
