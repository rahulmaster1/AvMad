import { useState } from 'react';

import { licenseDefaultValues } from '../ProviderSourceComponents/Licensure';
import { nameAndHomeAddressDefaultValues } from '../ProviderSourceComponents/NameAndHomeAddress';
import { personalDefaultValues } from '../ProviderSourceComponents/PersonalInformation';
import { registrationIdDefaultValues } from '../ProviderSourceComponents/RegistrationIDs';
import { Button, Divider, Typography } from '@mui/material';
import { Alert } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { alpha, styled } from '@mui/material/styles';
import axios from 'axios';
import { Formik } from 'formik';
import localforage from 'localforage';
import Link from 'next/link';
import Router from 'next/router';
import { NextFetchEvent } from 'next/server';

import { selectProviderSourceReducer } from 'state/reducers/providerSourceReducer';
import { setLoginCredentials } from 'state/reducers/providerSourceReducer';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3)
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        color: '#000',
        transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main
        }
    }
}));

const resetData = [
    // 'trainingData',
    //     'specialtyData',
    'registrationIdData',
    // 'ProfessionalLiabilityData',
    // 'otherIdAndCertificationData',
    'nameAndHomeAddressData',
    'licensureData',
    // 'HealthcareFacilityData',
    // 'educationData',
    // 'disclosureData',
    // 'healthPlansData',
    // 'teachingData',
    'personalData'
];

const resetDataValue = {
    trainingData: {},
    specialtyData: {},
    registrationIdData: registrationIdDefaultValues,
    ProfessionalLiabilityData: {},
    otherIdAndCertificationData: {},
    nameAndHomeAddressData: nameAndHomeAddressDefaultValues,
    licensureData: licenseDefaultValues,
    HealthcareFacilityData: {},
    educationData: {},
    disclosureData: {},
    healthPlansData: {},
    teachingData: {},
    personalData: personalDefaultValues
};

const LoginInput = () => {
    const dispatch = useAppDispatch();
    const { username, password } = useAppSelector(selectProviderSourceReducer);
    const [success, setSuccess] = useState(false);

    const [open, setOpen] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setSuccess(false);
    };
    return (
        <>
            <Formik
                initialValues={{ username, password }}
                validate={(values) => {}}
                onSubmit={(values) => {
                    dispatch(setLoginCredentials(values));
                    axios
                        .post('http://madversentapplication-env.eba-pckwxuup.us-east-1.elasticbeanstalk.com/login', values)
                        .then(async ({ data }) => {
                            setSuccess(true);
                            Router.push('/provider_source');
                            localStorage.setItem('isLoggedIn', data.status);
                            localforage.setItem('userId', data.data);
                            resetData.map((item) =>
                                localforage.setItem(item, resetDataValue[item as keyof typeof resetDataValue])
                            );

                            await axios
                                .get(`https://plm-health.herokuapp.com/api/name-and-home-address/${data.data}`)
                                .then((res) => {
                                    console.log('login input', res.data);
                                    localforage.setItem('nameAndHomeAddressData', res.data[0]);
                                })
                                .catch((err) => {
                                    console.log('Error while processing request', err);
                                });

                            await axios
                                .get(`https://plm-health.herokuapp.com/api/provider/personal-info/${data.data}`)
                                .then((res) => {
                                    localforage.setItem('personalData', res.data[0]);
                                })
                                .catch((err) => {
                                    console.log('Error while processing request', err);
                                });

                            await axios
                                .get(`https://plm-health.herokuapp.com/api/provider/registration-ids/${data.data}`)
                                .then((res) => {
                                    localforage.setItem('registrationIdData', res.data[0]);
                                })
                                .catch((err) => {
                                    console.log('Error while processing request', err);
                                });
                        })
                        .catch((err) => {
                            setOpen(true);
                            console.log('Invalid credetials');
                        });
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl variant="standard" sx={{ width: '100%', pt: '10px', pb: '10px' }}>
                            <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                                Username
                            </InputLabel>
                            <BootstrapInput
                                name="username"
                                onChange={handleChange}
                                value={values.username}
                                id="bootstrap-input"
                                required
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', pt: '10px', pb: '10px' }}>
                            <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                                Password
                            </InputLabel>
                            <BootstrapInput
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                id="bootstrap-input"
                                type="password"
                                required
                            />
                        </FormControl>
                        <div style={{ width: '100%' }}>
                            <Typography textAlign="right">Forgot Password?</Typography>
                            <Typography textAlign="center">
                                {/* <Link href='/provider_source'> */}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ fontSize: '1rem', padding: '5px 44px', m: 3 }}
                                    type="submit"
                                >
                                    Login
                                </Button>
                                {/* </Link> */}
                            </Typography>
                        </div>
                    </form>
                )}
            </Formik>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Invalid Credentials"
            />
            <Snackbar
                open={success}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Login successful
                </Alert>
            </Snackbar>
        </>
    );
};

export default LoginInput;
