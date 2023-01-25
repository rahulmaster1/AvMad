import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';
import ConditionField from '../CustomInput/ConditionField';
import LoadingForm from '../Loading/Loading';
import { Box, Button, Chip, Divider, Grid } from '@mui/material';
import axios from 'axios';
import localforage from 'localforage';
import { debounce } from 'lodash';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { uid } from 'uid';

import { setActiveRoute } from 'state/reducers/providerSourceReducer';
import { setProgressBarState } from 'state/reducers/providerSourceReducer';
import { selectProviderSourceReducer } from 'state/reducers/providerSourceReducer';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import EmergencyContactFields from 'form-fields/general-information/EmergencyContact';
import LanguagesFields from 'form-fields/general-information/Languages';
import PersonalInformationFields from 'form-fields/general-information/PersonalInformation';
import countryList from 'form-fields/general-information/form-list/countryList';
import ethnicityList from 'form-fields/general-information/form-list/ethnicityList';
import genderList from 'form-fields/general-information/form-list/genderList';
import languagesList from 'form-fields/general-information/form-list/languagesList';
import maritalStatusList from 'form-fields/general-information/form-list/maritalStatusList';

const PersonalInformationMap = {
    countryList: countryList,
    genderList: genderList
};

const LanguagesMap = {
    languagesList: languagesList,
    ethnicityList: ethnicityList,
    maritalStatusList: maritalStatusList
};

export const personalDefaultValues = {
    gender: null,
    dateOfBirth: null,
    citizenship: null,
    countryOfBirth: null,
    socialSecurityNumberFlag: false,
    socialSecurityNumber: '',
    languagesSpeak: [],
    languagesWrite: [],
    ethnicity: null,
    maritalStatus: null,
    firstName: '',
    middleName: '',
    lastName: '',
    emergencyContactPhoneNumber: ''
};

const PersonalInformation: NextPage<{
    activeStep: number;
    handleBack: () => void;
    handleComplete: () => void;
    steps: string[];
}> = ({ activeStep, handleBack, steps, handleComplete }) => {
    const router = useRouter();
    // const { activeRoute } = useAppSelector(selectLoginReducer);
    const dispatch = useAppDispatch();

    const { progressBarState } = useAppSelector(selectProviderSourceReducer);

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: personalDefaultValues
    });

    const onSubmit = (data: any) => {
        dispatch(setActiveRoute('/provider_source/professional_ids'));
        router.push('/provider_source/professional_ids');
        handleComplete();
        localforage.setItem('personalData', data);

        localforage.getItem('userId').then((res: any) => {
            console.log({ ...data, userId: res });
            axios
                .post('https://plm-health.herokuapp.com/api/provider/personal-info/add', { ...data, userId: res })
                .then((res) => {
                    console.log('Data has been saved', { ...data, userId: res });
                })
                .catch((err) => {
                    console.log('Error while processing request', err);
                });
        });
    };
    useEffect(() => {
        localforage.getItem('personalData').then((res: any) => {
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('personalData', getValues());
        console.log('Form updated');
    }, 5000);

    const personalInformationSoloInputField = {
        sssNumberField: {
            size: 6,
            inputType: 'text',
            name: 'socialSecurityNumber',
            label: 'Social Security Number',
            required: true
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {PersonalInformationFields.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={PersonalInformationMap[field.options as keyof typeof PersonalInformationMap]}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing={2} sx={{ mt: 0 }}>
                    <Grid item xs={6}>
                        <ConditionField
                            control={control}
                            watchName={`socialSecurityNumberFlag`}
                            fieldProps={personalInformationSoloInputField.sssNumberField}
                            name={personalInformationSoloInputField.sssNumberField.name}
                            conditionBasis={true}
                            operation="equal"
                        />
                    </Grid>
                </Grid>

                <Divider sx={{ m: '25px' }}>
                    <Chip label="LANGUAGES" />
                </Divider>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {LanguagesFields.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={LanguagesMap[field.options as keyof typeof LanguagesMap]}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ m: '25px' }}>
                    <Chip label="EMERGENCY CONTACT" />
                </Divider>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {EmergencyContactFields.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput control={control} fieldProps={field} name={field.name} />
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        variant="contained"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button variant="contained" type="submit">
                        Next
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default PersonalInformation;
