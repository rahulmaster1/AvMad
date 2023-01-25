import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';

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

import CredentialingContactFieldsAll from 'form-fields/general-information/Credentialing_contactformAllFeild';

import CredentialingContactFields from 'form-fields/general-information/Credentialing_contactform';

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

const Credentialing_contact: NextPage<{
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


    <Alert severity="warning" sx={{ mb: '20px', mt: '20px' }}>
                Please designate a single contact for your credentialing information.
                </Alert>

            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                                                        {CredentialingContactFields.map((field) => (
                                                            <Grid item xs={field.size} key={field.name}>
                                                                <CustomInput
                                                                    control={control}
                                                                    fieldProps={field}
                                                                    name={""}
                                                                    options={
                                                                        PrefListMap[
                                                                        field.options as keyof typeof PrefListMap
                                                                        ]
                                                                    }
                                                                />
                                                                
                                                            </Grid>
                                                        ))}
                                        
                                    
                                                        </Grid>
                                                        <Grid container spacing={2} sx={{ mt: 1 }}>
                                                        {CredentialingContactFieldsAll.map((field) => (
                                                            <Grid item xs={field.size} key={field.name}>
                                                                <CustomInput
                                                                    control={control}
                                                                    fieldProps={field}
                                                                    name={""}
                                                                    options={
                                                                        StateAndPractitionerMap[
                                                                        field.options as keyof typeof StateAndPractitionerMap
                                                                        ]
                                                                    }
     
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

export default Credentialing_contact;
