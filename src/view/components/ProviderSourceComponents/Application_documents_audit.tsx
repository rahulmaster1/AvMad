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


import UniqueCircumstances from 'form-fields/general-information/form-list/Unique_circumstances';
import nameTypeList from 'form-fields/general-information/form-list/nameList';
import primaryPractitionerTypeList from 'form-fields/general-information/form-list/primaryPractitionerTypeList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import PreferredList from 'form-fields/general-information/form-list/preffedMethod';
import { padding } from '@mui/system';

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

const Application_documents_audit: NextPage<{
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
    Please review to assure that your supporting documents are current and match the information in your application. To change your application information, click the Previous button to return to the Application Checklist.

  </Alert>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>


            <Grid item xs={12} container >
            <table cellPadding={15}>
        <tr>
          <th>Document Type</th>
          <th>Required By</th>
          <th>Date Uploaded</th>
          <th>Edit</th>
          <th>Upload</th>
          <th>Delete</th>
          <th>Do Not Have</th>

        </tr>
        <tr>
          <td>Professional Liability Insurance Policy Face Sheet</td>
          <td>Standard</td>
          <td>Male</td>
          <td>Professional Liability Insurance Policy Face Sheet</td>
          <td>Standard</td>
          <td>Male</td>
          <td>Male</td>
          
<Alert severity="info" sx={{ mb: '20px', mt: '20px' }}>
    Please review to assure that your supporting documents are current and match the information in your application. To change your application information, click the Previous button to return to the Application Checklist.

  </Alert>

        </tr>
         </table>

</Grid>

                <Grid container  sx={{ mt: 2, mb: 2 }}>
                Please click here to upload additional documents to your application.  
                <a href="https://pluralsight.com" style={{ color: 'blue' }}> Manage Documents

</a>
                
                    
                </Grid>
              
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button color="inherit" variant="contained" onClick={handleBack} sx={{ mr: 1 }}>
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {activeStep !== steps.length && (
                        <Button variant="contained" type="submit">
                         SAVE & Next
                        </Button>
                    )}
                </Box>
            </form>
        </React.Fragment>
    );
};


export default Application_documents_audit;
