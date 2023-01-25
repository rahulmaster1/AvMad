import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';
import general_information from 'pages/provider_source/general_information';
import health_plans from 'pages/provider_source/health_plans';
import professional_ids from 'pages/provider_source/professional_ids';
import education_and_training from 'pages/provider_source/education_and_training';
import work_history from 'pages/provider_source/work_history';
import practice_information from 'pages/provider_source/practice_information';
import disclosure from 'pages/provider_source/disclosure';
import professional_liability from 'pages/provider_source/professional_liability';

import PersonalInformation from './PersonalInformation';

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



import { useAppDispatch } from 'hooks/useAppDispatch';


import UniqueCircumstances from 'form-fields/general-information/form-list/Unique_circumstances';
import nameTypeList from 'form-fields/general-information/form-list/nameList';
import primaryPractitionerTypeList from 'form-fields/general-information/form-list/primaryPractitionerTypeList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import PreferredList from 'form-fields/general-information/form-list/preffedMethod';

const StateAndPractitionerMap = {
    statesOfPracticeList: stateOfPracticeList,
    primaryPractitionerTypeList: primaryPractitionerTypeList
};


console.log(nameTypeList);

const PrefListMap = {
    PreferredList: PreferredList
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

const Application_checklist: NextPage<{
    activeStep: number;
    handleBack: () => void;
    handleComplete: () => void;
    steps: string[];
}> = ({ activeStep, handleBack, steps, handleComplete }) => {
    const dispatch = useAppDispatch();



    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: nameAndHomeAddressDefaultValues
    });

   

  
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


  
  

    return (
  
  <React.Fragment>


<Alert severity="info" sx={{ mb: '20px', mt: '20px' }}>
The following items must be completed prior to submitting your application. Click on the form link to go back to the form. Once on a form, click on edit button  ,when applicable, to populate the required fields.

  </Alert>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>


            <Grid item xs={12}>Your application is missing required documents. Please complete your application in order to Attest.

</Grid>

<Grid item sx={{ mb: '0px', mt: '20px' }}>Professional Liability Coverage document is required.

</Grid>
<Grid item xs={12}>Admitting Arrangement document is required.

</Grid>
<Grid item xs={12}>Sovereign Immunity document is required.

</Grid>





<Grid item sx={{ mb: '20px', mt: '50px' }}>
<a href="general_information" style={{ color: 'blue' ,}}>Personal Informaion</a>
</Grid>


<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="health_plans" style={{ color: 'blue' }}>Authorization and Release
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="professional_ids" style={{ color: 'blue' }}>Other IDs And Certifications
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="education_and_training" style={{ color: 'blue' }}>Education
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="work_history" style={{ color: 'blue' }}>Military History
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="work_history" style={{ color: 'blue' }}>Employment Gap
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="work_history" style={{ color: 'blue' }}>Professional References

</a>
</Grid>

<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="practice_information" style={{ color: 'blue' }}>Credentialing Contact
</a>
</Grid>

<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="disclosure" style={{ color: 'blue' }}>Standard Disclosure
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="practice_information" style={{ color: 'blue' }}>Practice Location
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="education_and_training" style={{ color: 'blue' }}>Training
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="professional_liability"    style={{ color: 'blue' }}>Coverage and Claims History
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="work_history" style={{ color: 'blue' }}>Employment
</a>
</Grid>
<Grid item sx={{ mb: '20px', mt: '20px' }}>
<a href="work_history" style={{ color: 'blue' }}>Professional Organizations</a>
</Grid>



                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                    
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


export default Application_checklist;
