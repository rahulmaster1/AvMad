import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';
import ConditionField from '../CustomInput/ConditionField';
import CustomInputField from '../CustomInputField';
import AddIcon from '@mui/icons-material/Add';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

import SpecialtyFields from 'form-fields/education/specialty';
import TrainingProgramFields from 'form-fields/education/trainingProgram';
import trainingSoloInputField from 'form-fields/education/trainingSoloInputField';
import UniversityProgramFields from 'form-fields/education/universityProgram';
import primaryPractitionerTypeList from 'form-fields/general-information/form-list/primaryPractitionerTypeList';
import schoolLocationList from 'form-fields/general-information/form-list/schoolLocationList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import trainingList from 'form-fields/general-information/form-list/trainingList';

const TrainingMap = {
    trainingList: trainingList,
    programLocationList: schoolLocationList,
    primaryPractitionerTypeList: primaryPractitionerTypeList,
    degreeAwardedList: stateOfPracticeList
};

const Training: NextPage<{
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

    const handleChangePanel = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        panel === 'panel1'
            ? setExpanded({ ...expanded, panel1: isExpanded })
            : panel === 'panel2'
            ? setExpanded({ ...expanded, panel2: isExpanded })
            : setExpanded({ ...expanded, panel3: isExpanded });
    };

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: {
            trainingProgramFlag: false,
            trainingProgram: [
                {
                    trainingProgramLocation: null,
                    trainingProgramName: '',
                    trainingAddressLine1: '',
                    trainingAddressLine2: '',
                    trainingCity: '',
                    trainingZipCode: '',
                    trainingTelephoneNumber: '',
                    trainingExt: '',
                    trainingFaxNumber: '',
                    emailAddress: '',
                    typeOfTraining: null,
                    specialty: null,
                    directorFirstName: '',
                    directorLastName: '',
                    directorDegree: null,
                    directorEmailAddress: '',
                    startDate: null,
                    endDate: null,
                    explanation: '',
                    completionFlag: true,
                    universityProgramLocation: null,
                    universityAffiliatedProgram: '',
                    universityAddressLine1: '',
                    universityAddressLine2: '',
                    universityCity: '',
                    universityZipCode: '',
                    universityTelephoneNumber: '',
                    universityExt: '',
                    universityFaxNumber: ''
                }
            ]
        }
    });

    const {
        fields: trainingProgramDataFields,
        remove: trainingProgramRemove,
        append: trainingProgramInsert
    } = useFieldArray({
        control,
        name: 'trainingProgram'
    });

    const watchTrainingProgramFlag = watch('trainingProgramFlag');

    const onSubmit = (data: any) => {
        console.log(data);
        handleComplete();
        localforage.setItem('trainingData', data);
        // axios
        //     .post('https://plm-health.herokuapp.com/api/provider/license/add', { values })
        //     .then((res) => {
        //         console.log('Data has been saved', res);
        //     })
        //     .catch((err) => {
        //         console.log('Error while processing request', err);
        //     });
    };

    useEffect(() => {
        localforage.getItem('trainingData').then((res: any) => {
            console.log(res);
            res && reset(res);
            // });
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('trainingData', getValues());
        console.log('Form updated');
    }, 5000);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded.panel1} onChange={handleChangePanel('panel1')}>
                            <Tooltip title="Click here to add" arrow placement="top">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Training Program</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <CustomInput
                                    control={control}
                                    fieldProps={trainingSoloInputField.trainingProgramFlagField}
                                    name={`${trainingSoloInputField.trainingProgramFlagField.name}`}
                                />
                                {watchTrainingProgramFlag && (
                                    <Typography textAlign="right" sx={{ m: '0px' }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            onClick={() =>
                                                trainingProgramInsert({
                                                    trainingProgramLocation: null,
                                                    trainingProgramName: '',
                                                    trainingAddressLine1: '',
                                                    trainingAddressLine2: '',
                                                    trainingCity: '',
                                                    trainingZipCode: '',
                                                    trainingTelephoneNumber: '',
                                                    trainingExt: '',
                                                    trainingFaxNumber: '',
                                                    emailAddress: '',
                                                    typeOfTraining: null,
                                                    specialty: null,
                                                    directorFirstName: '',
                                                    directorLastName: '',
                                                    directorDegree: null,
                                                    directorEmailAddress: '',
                                                    startDate: null,
                                                    endDate: null,
                                                    explanation: '',
                                                    completionFlag: true,
                                                    universityProgramLocation: null,
                                                    universityAffiliatedProgram: '',
                                                    universityAddressLine1: '',
                                                    universityAddressLine2: '',
                                                    universityCity: '',
                                                    universityZipCode: '',
                                                    universityTelephoneNumber: '',
                                                    universityExt: '',
                                                    universityFaxNumber: ''
                                                })
                                            }
                                        >
                                            Add Training Program
                                        </Button>
                                    </Typography>
                                )}
                                {watchTrainingProgramFlag &&
                                    trainingProgramDataFields.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                <Divider sx={{ m: '25px' }}>
                                                    <Chip label={`Training Program ${index + 1}`} />
                                                </Divider>

                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    {TrainingProgramFields.map((field) => (
                                                        <Grid item xs={field.size} key={field.name}>
                                                            <CustomInput
                                                                control={control}
                                                                fieldProps={field}
                                                                name={`trainingProgram[${index}].${field.name}`}
                                                                options={
                                                                    TrainingMap[
                                                                        field.options as keyof typeof TrainingMap
                                                                    ]
                                                                }
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                <Alert severity="info" sx={{ mt: '20px' }}>
                                                    If your training program was rotating or transitional, please create
                                                    a separate training record for each rotation including the specialty
                                                    or department and the time associated with each.
                                                </Alert>
                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    {SpecialtyFields.map((field) => (
                                                        <Grid item xs={field.size} key={field.name}>
                                                            <CustomInput
                                                                control={control}
                                                                fieldProps={field}
                                                                name={`trainingProgram[${index}].${field.name}`}
                                                                options={
                                                                    TrainingMap[
                                                                        field.options as keyof typeof TrainingMap
                                                                    ]
                                                                }
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    <Grid
                                                        item
                                                        xs={trainingSoloInputField.trainingExplanationField.size}
                                                    >
                                                        <ConditionField
                                                            control={control}
                                                            index={index}
                                                            watchName={`trainingProgram[${index}].completionFlag`}
                                                            fieldProps={trainingSoloInputField.trainingExplanationField}
                                                            name={`trainingProgram[${index}].${trainingSoloInputField.trainingExplanationField.name}`}
                                                            conditionBasis={false}
                                                            operation={'equal'}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Alert severity="info" sx={{ mt: '20px' }}>
                                                    University Affiliated Program
                                                </Alert>
                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    {UniversityProgramFields.map((field) => (
                                                        <Grid item xs={field.size} key={field.name}>
                                                            <CustomInput
                                                                control={control}
                                                                fieldProps={field}
                                                                name={`trainingProgram[${index}].${field.name}`}
                                                                options={
                                                                    TrainingMap[
                                                                        field.options as keyof typeof TrainingMap
                                                                    ]
                                                                }
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                <Typography textAlign="right" sx={{ mt: '20px' }}>
                                                    <Button
                                                        variant="contained"
                                                        startIcon={<DeleteIcon />}
                                                        onClick={() => {
                                                            trainingProgramRemove(index);
                                                        }}
                                                    >
                                                        Remove Training Program
                                                    </Button>
                                                </Typography>
                                            </div>
                                        );
                                    })}
                            </AccordionDetails>
                        </Accordion>
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

export default Training;
