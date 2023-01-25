import React, { useEffect, useState } from 'react';
import { Autocomplete, Checkbox, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';
import CustomInput from '../CustomInput';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Box,
    Button,
    Chip,
    Divider,
    Grid,
    Tooltip,
    Typography
} from '@mui/material';
import axios from 'axios';
import localforage from 'localforage';
import { debounce } from 'lodash';
import type { NextPage } from 'next';
import { useFieldArray, useForm } from 'react-hook-form';


import { useAppDispatch } from 'hooks/useAppDispatch';
import NameAndHomeAddress from 'view/components/ProviderSourceComponents/NameAndHomeAddress';

import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import branchList from 'form-fields/general-information/form-list/branchList';

import CDSFields from 'form-fields/covering/DEA';

import DeaCheckField from 'form-fields/historyForm/DEACHECK';
import NamePrimaryBaseFieldCDSFields from 'form-fields/historyForm/NamePrimaryBase';


import Military from 'form-fields/history/milentry';

import { relative } from 'path';
import { id } from 'date-fns/locale';

const RegistrationStateMap = {
    stateOfPracticeList:stateOfPracticeList
};

type skill={
    id:number
    label:string
}
const skills=['hii','hello','welcome'];

const skilloption=skills.map((skill,index)=>({
id:index+1,
label:skill,
}));
export const registrationIdDefaultValues = {
    cds: true,
  
    cdsData: [
        {
            branchofService: '',
            miltryRank: null,
            enlistDate: null,
            discharge: null,
            current:null,
            nopb:null,
            division:null,
            primarybLoc:'',
            devision:null,
            doesNotExpire: false,
            fullSchedule: false,
            practicingStateFlag: false
        }
    ],
   
    

   
};


const covering_colleagues: NextPage<{
    activeStep: number;
    handleBack: () => void;
    handleComplete: () => void;
    steps: string[];
}> = ({ activeStep, handleBack, steps, handleComplete }) => {
    const [expanded, setExpanded] = React.useState<{
        panel1: boolean;
        panel2: boolean;
        panel3: boolean;
    }>({
        panel1: true,
        panel2: true,
        panel3: true
    });
    const dispatch = useAppDispatch();

    const handleChangePanel = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        panel === 'panel1'
            ? setExpanded({ ...expanded, panel1: isExpanded })
            : panel === 'panel2'
                ? setExpanded({ ...expanded, panel2: isExpanded })
                : setExpanded({ ...expanded, panel3: isExpanded });
    };

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: registrationIdDefaultValues
        
    });

  


    const {
        fields: cdsDataFields,
    } = useFieldArray({
        control,
        name: 'cdsData'
    });
   
   
    const watchCdsFlag = watch('cds');

    const onSubmit = (data: any) => {
        handleComplete();
        localforage.setItem('registrationIdData', data);

        localforage.getItem('userId').then((res: any) => {
            console.log({ ...data, userId: res });
            axios
                .post('https://plm-health.herokuapp.com/api/provider/registration-ids/add', { ...data, userId: res })
                .then((res) => {
                    console.log('Data has been saved', { ...data, userId: res });
                })
                .catch((err) => {
                    console.log('Error while processing request', err);
                });
        });
    };
const [skill,setskill]=useState<skill | null>(null)
console.log({skill})
    useEffect(() => {
        localforage.getItem('registrationIdData').then((res: any) => {
            console.log(res);
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('registrationIdData', getValues());
        console.log('Form updated');
    }, 5000);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
            

                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                       
                            
                            <AccordionDetails>
                               
                                <CustomInput
                                    control={control}
                                    fieldProps={Military.cdsField}
                                    name={Military.cdsField.name}
                                />
                                {watchCdsFlag ? (
                                    <div>
                                        
                                 
                                                <div >
                                                  

                                                    <Grid container spacing={2} sx={{ mt: 1 }}>
                                                        {CDSFields.map((field) => (
                                                            <Grid item xs={field.size} key={field.name}>
                                                                <CustomInput
                                                                    control={control}
                                                                    fieldProps={field}
                                                                    name={""}
                                                                    options={
                                                                        RegistrationStateMap[
                                                                        field.options as keyof typeof RegistrationStateMap
                                                                        ]
                                                                    }
                                                                />
                                                            </Grid>
                                                        ))}
                                                        
                                                        <Grid item xs={12}>2500 characters max.
</Grid>
                                                    </Grid>
                                                  
                                                                                                  </div>

                                       
                                </div>
                                ) : (
                                    <Grid container sx={{ mt: 2 }}>
                                        <Grid item xs={12}>
                                            
                                        </Grid>
                                    </Grid>
                                )}
                            </AccordionDetails>
                       
                    </Grid>
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
        </>
    );
};

export default covering_colleagues;
