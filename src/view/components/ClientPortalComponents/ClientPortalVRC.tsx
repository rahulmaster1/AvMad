import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';
import QueryReportTable from '../Table/QueryReportTable';
import { Grid } from '@mui/material';
import { debounce } from 'lodash';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { selectProviderSourceReducer } from 'state/reducers/providerSourceReducer';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import ClientPortalVRCFields from 'form-fields/ClientPortal/ClientPortalVRC';
import clientNameList from 'form-fields/ClientPortal/form-list/clientNameList';
import credCycleList from 'form-fields/ClientPortal/form-list/credCycleList';
import idTypeList from 'form-fields/ClientPortal/form-list/idTypeList';
import reportTypeList from 'form-fields/ClientPortal/form-list/reportTypeList';
import reviewLevelList from 'form-fields/ClientPortal/form-list/reviewLevelList';
import displayList from 'form-fields/Encompass/form-list/displayList';
import primaryPractitionerTypeList from 'form-fields/general-information/form-list/primaryPractitionerTypeList';

const ClientPortalVRCMap = {
    primaryPractitionerTypeList: primaryPractitionerTypeList,
    reviewLevelList: reviewLevelList,
    credCycleList: credCycleList,
    idTypeList: idTypeList
};

export const ClientPortalVRCValues = {
    providerType: null,
    reviewLevel: null,
    psvCompletedDateFrom: null,
    psvCompletedDateTo: null,
    specialty: null,
    credCycle: null,
    reviewDateFrom: null,
    reviewDateTo: null,
    firstName: '',
    lastName: '',
    idType: null,
    committeeDateFrom: null,
    committeeDateTo: null
};

const ClientPortalVRC: NextPage<{}> = () => {
    const router = useRouter();
    // const { activeRoute } = useAppSelector(selectLoginReducer);
    const dispatch = useAppDispatch();

    const { progressBarState } = useAppSelector(selectProviderSourceReducer);

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: ClientPortalVRCValues
    });

    const onSubmit = (data: any) => {
        // dispatch(setActiveRoute('/provider_source/professional_ids'));
        // router.push('/provider_source/professional_ids');
        // handleComplete();
        // localforage.setItem('ClientPortalVRCData', data);
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
        // localforage.getItem('ClientPortalVRCData').then((res: any) => {
        //     res && reset(res);
        // });
    }, []);

    const autoSave = debounce(() => {
        // localforage.setItem('ClientPortalVRCData', getValues());
        // console.log('Form updated');
    }, 5000);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                    {ClientPortalVRCFields.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={ClientPortalVRCMap[field.options as keyof typeof ClientPortalVRCMap]}
                            />
                        </Grid>
                    ))}
                </Grid>
            </form>
        </>
    );
};

export default ClientPortalVRC;
