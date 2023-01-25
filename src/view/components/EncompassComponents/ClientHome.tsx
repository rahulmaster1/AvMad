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

import ClientHomeFields from 'form-fields/Encompass/ClientHome';
import displayList from 'form-fields/Encompass/form-list/displayList';

const ClientHomeMap = {
    displayList: displayList
};

export const clientHomeValues = {
    displayAll: null,
    committeeDate: null
};

const ClientHome: NextPage<{}> = () => {
    const router = useRouter();
    // const { activeRoute } = useAppSelector(selectLoginReducer);
    const dispatch = useAppDispatch();

    const { progressBarState } = useAppSelector(selectProviderSourceReducer);

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: clientHomeValues
    });

    const onSubmit = (data: any) => {
        // dispatch(setActiveRoute('/provider_source/professional_ids'));
        // router.push('/provider_source/professional_ids');
        // handleComplete();
        // localforage.setItem('clientHomeData', data);
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
        // localforage.getItem('clientHomeData').then((res: any) => {
        //     res && reset(res);
        // });
    }, []);

    const autoSave = debounce(() => {
        // localforage.setItem('clientHomeData', getValues());
        // console.log('Form updated');
    }, 5000);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                    {ClientHomeFields.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={ClientHomeMap[field.options as keyof typeof ClientHomeMap]}
                            />
                        </Grid>
                    ))}
                </Grid>
                <QueryReportTable />
            </form>
        </>
    );
};

export default ClientHome;
