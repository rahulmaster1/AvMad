import React, { useEffect } from 'react';

import CustomInput from '../CustomInput';
import { Alert, Box, Button, Grid } from '@mui/material';
import axios from 'axios';
import localforage from 'localforage';
import { debounce } from 'lodash';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useFieldArray, useForm } from 'react-hook-form';

import useDebounce from 'hooks/useDebounce';
import { useIsMount } from 'hooks/useIsMount';

import directoryList from 'form-fields/general-information/form-list/directoryList';
import healthPlanList from 'form-fields/general-information/form-list/healthPlanList';
import hospitalList from 'form-fields/general-information/form-list/hospitalList';
import HealthPlansFields from 'form-fields/health-plans/HealthPlansFields';

const HealthPlansMap = {
    healthPlanList: healthPlanList,
    hospitalList: hospitalList,
    directoryList: directoryList
};

const AuthorizationAndRelease: NextPage<{
    activeStep: number;
    handleBack: () => void;
    handleComplete: () => void;
    steps: string[];
}> = ({ activeStep, handleBack, steps, handleComplete }) => {
    const router = useRouter();

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: {
            healthPlans: [],
            hospitals: [],
            directories: []
        }
    });

    const onSubmit = (data: any) => {
        handleComplete();
        localforage.setItem('healthPlansData', data);
        router.push('/provider_source/specialties');
        localforage.getItem('userId').then((res: any) => {
            console.log({ ...data, userId: res });
            axios
                .post('https://plm-health.herokuapp.com/api/provider/health-plans/add', { ...data, userId: res })
                .then((res) => {
                    console.log('Data has been saved', { ...data, userId: res });
                })
                .catch((err) => {
                    console.log('Error while processing request', err);
                });
        });
    };

    useEffect(() => {
        localforage.getItem('healthPlansData').then((res: any) => {
            console.log(res);
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('healthPlansData', getValues());
        console.log('Form updated');
    }, 5000);

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
                <Alert severity="info" sx={{ m: '20px 0' }}>
                    <p>
                        - In order to protect the confidentiality of your provider information, please use the section
                        below to designate which healthcare entities you allow to access your ProviderSource™
                        application data for use in credentialing.
                    </p>
                    <p>
                        - Please note that we do not notify selected Health Plans or Hospitals that you have allowed
                        them to access your ProviderSource application data.
                    </p>
                    <p>- Select all health plans and directories for which you authorize release of information.</p>
                    <p>- Select all healthcare facilities for which you authorize release of information.</p>
                </Alert>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    {HealthPlansFields.map((field) => (
                        <Grid item xs={field.size} key={field.name}>
                            <CustomInput
                                control={control}
                                fieldProps={field}
                                name={field.name}
                                options={HealthPlansMap[field.options as keyof typeof HealthPlansMap]}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button color="inherit" variant="contained" onClick={handleBack} sx={{ mr: 1 }}>
                        Back
                    </Button>
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

export default AuthorizationAndRelease;
