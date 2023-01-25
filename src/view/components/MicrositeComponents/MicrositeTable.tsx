import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';
import ClientHomeTable from '../Table/ClientHomeTable';
import { Alert, Grid } from '@mui/material';
import { debounce } from 'lodash';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { selectProviderSourceReducer } from 'state/reducers/providerSourceReducer';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import ManagePractitionerFilter2Fields from 'form-fields/Encompass/ManagePractitionerFilter2';
import MicrositeFilter2 from 'form-fields/Micrositefilled/MicrositeFilter2';
import MicrositeFilter1 from 'form-fields/Micrositefilled/MicrositeFilter1';

import andOrList from 'form-fields/Encompass/form-list/andOrList';
import displayList from 'form-fields/Encompass/form-list/displayList';
import goToList from 'form-fields/Encompass/form-list/goToList';
import inConditionList from 'form-fields/Encompass/form-list/inConditionList';
import operatorList from 'form-fields/Encompass/form-list/operatorList';
import whereConditionList from 'form-fields/Encompass/form-list/whereConditionList';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Autocomplete,
    Box,
    Button,
    Chip,
    Divider,
    FormControl,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
const ManagePractitionerMap = {
    goToList: goToList,
    whereConditionList: whereConditionList,
    operatorList: operatorList,
    inConditionList: inConditionList,
    andOrList: andOrList
};

export const ManagePractitionerValues = {
    in: null,
    where: null,
    whereOperator: null,
    whereCondition: '',
    andOr: null,
    goTo: null,
    conditionName: ''
};

const AppTrackerPractitionerTable: NextPage<{}> = () => {
    const router = useRouter();
    // const { activeRoute } = useAppSelector(selectLoginReducer);
    const dispatch = useAppDispatch();

    const { progressBarState } = useAppSelector(selectProviderSourceReducer);

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: ManagePractitionerValues
    });

    const onSubmit = (data: any) => {
        // dispatch(setActiveRoute('/provider_source/professional_ids'));
        // router.push('/provider_source/professional_ids');
        // handleComplete();
        // localforage.setItem('ManagePractitionerData', data);
        // localforage.getItem('userId').then((res: any) => {
        //     console.log({ ...data, userId: res });
        //     axios
        //         .post('https://plm-health.herokuapp.com/api/provider/personal-info/add', { ...data, userId: res })
        //         .then((res) => {
        //             console.log('Data has been saved', { ...data, userId: res });
        //         })
        //         .catch((err) => {
        //             console.log('Error while processing request', err);
        //         });
        // });
    };
    useEffect(() => {
        // localforage.getItem('ManagePractitionerData').then((res: any) => {
        //     res && reset(res);
        // });
    }, []);

    const autoSave = debounce(() => {
        // localforage.setItem('ManagePractitionerData', getValues());
        // console.log('Form updated');
    }, 5000);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
           
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 5 }}>
         
            Please note that unauthorized users are not allowed to use this page. The use is restricted for Customer Support.

For a Provider Data Retrieval, please give partial or full SSN (no space or -) and/or First and/or Last Name


                </Box>
                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                    {MicrositeFilter2.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={ManagePractitionerMap[field.options as keyof typeof ManagePractitionerMap]}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 5 }}>
                For a Organization Data Retrieval, please give partial or full TIN (no space or -) and/or Agency name
</Box>
                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                    {MicrositeFilter1.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={ManagePractitionerMap[field.options as keyof typeof ManagePractitionerMap]}
                            />
                        </Grid>
                    ))}
                </Grid>




                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
               
                    <Button  variant="contained" sx={{ mr: 1 }}>
                        Serach
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 5 }}>
                Please select a record from the table above to review the documents uploaded by it.

           </Box>



            </form>
        </>
    );
};

export default AppTrackerPractitionerTable;
