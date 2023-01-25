import React, { useState } from 'react';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {
    Alert,
    Autocomplete,
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Chip,
    Container,
    Divider,
    FormControlLabel,
    FormGroup,
    Grid,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Snackbar,
    Typography
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import { Formik } from 'formik';
import type { NextPage } from 'next';
import Image from 'next/image';

import Footer from 'view/components/Login/Footer';
import LoginHeader from 'view/components/Login/Header';

const securityQuestions = [
    { label: 'The Shawshank Redemption', question: 1994 },
    { label: 'The Godfather', question: 1972 },
    { label: 'The Godfather: Part II', question: 1974 },
    { label: 'The Dark Knight', question: 2008 }
];

const Home: NextPage = () => {
    const [value, setValue] = React.useState<Date | null>(null);
    const [registrationData, setRegistrationData] = useState({
        firstName: '',
        lastName: '',
        birthDate: null,
        organization: 'TIVITYHEALTH',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        securityQuestion: '',
        securityAnswer: '',
        termsAndPrivacyFlag: false
    });
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setSuccess(false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                background: '#F5F5F5'
            }}
        >
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Form Error. Please double check the form."
            />
            <Snackbar
                open={success}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {`You have successfully registered ${registrationData.firstName} ${registrationData.lastName} with the username `}
                    <b>{registrationData.username}</b>
                </Alert>
            </Snackbar>
            <LoginHeader />
            <Container
                maxWidth="md"
                sx={{
                    mt: 15,
                    mb: 10,
                    bgcolor: 'background.paper',
                    fontSize: '1rem',
                    pb: '20px'
                }}
            >
                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        p: 0
                    }}
                >
                    <ListItem sx={{ pl: 0 }}>
                        <ListItemAvatar>
                            <Avatar>
                                <GroupAddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="CREATE ACCOUNT" secondary="Please fill out all required fields" />
                        <Image src="/images/tivity_icon.png" className="App-logo" alt="logo" width={103} height={49} />
                    </ListItem>
                </List>
                <Formik
                    initialValues={registrationData}
                    validate={(values) => {}}
                    onSubmit={(values, { resetForm }) => {
                        setRegistrationData(values);
                        axios
                            .post('https://plm-health.herokuapp.com/sign-up', values)
                            .then(({ data }) => {
                                console.log(data);
                                resetForm();
                                setSuccess(true);
                            })
                            .catch((err) => {
                                setOpen(true);
                                console.log(err);
                            });
                    }}
                >
                    {({ values, handleChange, handleSubmit, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
                            <Divider></Divider>
                            <Divider sx={{ m: '25px' }}>
                                <Chip label="PERSONAL INFORMATION" />
                            </Divider>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={6}>
                                    <TextField
                                        name="firstName"
                                        label="First Name"
                                        variant="outlined"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="lastName"
                                        label="Last Name"
                                        variant="outlined"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            value={values.birthDate}
                                            onChange={(value) => {
                                                setFieldValue('birthDate', Date.parse(`${value}`));
                                            }}
                                            label="Birth Date*"
                                            inputFormat="MM/dd/yyyy"
                                            renderInput={(params) => (
                                                <TextField name="birthDate" fullWidth {...params} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="organization"
                                        label="Organization"
                                        disabled
                                        variant="outlined"
                                        value={values.organization}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Divider sx={{ m: '25px' }}>
                                <Chip label="LOGIN CREDENTIALS" />
                            </Divider>

                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={6}>
                                    <TextField
                                        name="username"
                                        label="Username"
                                        variant="outlined"
                                        helperText="Minimum of 6 characters"
                                        value={values.username}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="password"
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        value={values.password}
                                        onChange={handleChange}
                                        helperText={`(Minimum 8 characters with at least 1 uppercase, 1 lowercase, 1 numeric & 1 special character.) `}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="confirmPassword"
                                        type="password"
                                        label="Confirm Password"
                                        variant="outlined"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Divider sx={{ m: '25px' }}>
                                <Chip label="USER ACCOUNT" />
                            </Divider>

                            <Alert severity="warning">
                                Note: Please submit a valid email address below. This email will be used for all
                                communications, including account activation.
                            </Alert>

                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={6}>
                                    <TextField
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="securityQuestion"
                                        label="Security Question"
                                        variant="outlined"
                                        value={values.securityQuestion}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="securityAnswer"
                                        label="Security Answer"
                                        variant="outlined"
                                        value={values.securityAnswer}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>

                            <Divider sx={{ m: '25px' }}>
                                <Chip label="TERMS AND CONDITIONS" />
                            </Divider>

                            <Alert severity="warning">
                                Note:
                                <Link href="https://ochn.providersource.com/Account/tos.aspx" underline="hover">
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link
                                    href="https://ochn.providersource.com/Account/PrivacyPolicy.aspx"
                                    underline="hover"
                                >
                                    Privacy Policy
                                </Link>
                            </Alert>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="termsAndPrivacyFlag"
                                            checked={values.termsAndPrivacyFlag}
                                            onChange={handleChange}
                                        />
                                    }
                                    label={`I have read and agree to the ProviderSource™ Terms of Service and Privacy Policy.`}
                                />
                            </FormGroup>
                            <Alert severity="info" sx={{ m: '30px' }}>
                                PLM understands how important the privacy of personal information is to you. We have
                                implemented safeguards to help protect your personal information including protecting
                                your information with the latest encryption technology. Your entire session, including
                                your username and password are protected with 256-bit encryption.
                            </Alert>
                            <Typography textAlign="right">
                                <Button variant="contained" type="submit" disabled={!values.termsAndPrivacyFlag}>
                                    Register
                                </Button>
                            </Typography>
                        </form>
                    )}
                </Formik>
            </Container>
            <Footer />
        </Box>
    );
};

export default Home;
