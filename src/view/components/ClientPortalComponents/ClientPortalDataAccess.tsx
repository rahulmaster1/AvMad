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

import ClientPortalDataAccessFields from 'form-fields/ClientPortal/ClientPortalDataAccess';
import clientNameList from 'form-fields/ClientPortal/form-list/clientNameList';
import credCycleList from 'form-fields/ClientPortal/form-list/credCycleList';
import credStatusList from 'form-fields/ClientPortal/form-list/credStatusList';
import idTypeList from 'form-fields/ClientPortal/form-list/idTypeList';
import psvFlagList from 'form-fields/ClientPortal/form-list/psvFlagList';
import reportTypeList from 'form-fields/ClientPortal/form-list/reportTypeList';
import reviewLevelList from 'form-fields/ClientPortal/form-list/reviewLevelList';
import searchTypeList from 'form-fields/ClientPortal/form-list/searchTypeList';
import sourceList from 'form-fields/ClientPortal/form-list/sourceList';
import vrcStatusList from 'form-fields/ClientPortal/form-list/vrcStatusList';
import displayList from 'form-fields/Encompass/form-list/displayList';
import primaryPractitionerTypeList from 'form-fields/general-information/form-list/primaryPractitionerTypeList';

const ClientPortalDataAccessMap = {
    primaryPractitionerTypeList: primaryPractitionerTypeList,
    credCycleList: credCycleList,
    credStatusList: credStatusList,
    psvFlagList: psvFlagList,
    searchTypeList: searchTypeList,
    sourceList: sourceList,
    vrcStatusList: vrcStatusList,
    clientNameList: clientNameList
};

export const ClientPortalDataAccessValues = {
    searchType: null,
    clientname: null,
    source: null,
    firstName: '',
    lastName: '',
    fromAttestDate: null,
    toAttestDate: null,
    providerType: null,
    specialty: null,
    psvFlag: null,
    credCycle: null,
    credStatus: null,
    vrcStatus: null
};

const ClientPortalDataAccess: NextPage<{}> = () => {
    const router = useRouter();
    // const { activeRoute } = useAppSelector(selectLoginReducer);
    const dispatch = useAppDispatch();

    const { progressBarState } = useAppSelector(selectProviderSourceReducer);

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: ClientPortalDataAccessValues
    });

    const onSubmit = (data: any) => {
        // dispatch(setActiveRoute('/provider_source/professional_ids'));
        // router.push('/provider_source/professional_ids');
        // handleComplete();
        // localforage.setItem('ClientPortalDataAccessData', data);
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
        // localforage.getItem('ClientPortalDataAccessData').then((res: any) => {
        //     res && reset(res);
        // });
    }, []);

    const autoSave = debounce(() => {
        // localforage.setItem('ClientPortalDataAccessData', getValues());
        // console.log('Form updated');
    }, 5000);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                    {ClientPortalDataAccessFields.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={
                                    ClientPortalDataAccessMap[field.options as keyof typeof ClientPortalDataAccessMap]
                                }
                            />
                        </Grid>
                    ))}
                </Grid>
            </form>
        </>
    );
};

export default ClientPortalDataAccess;
