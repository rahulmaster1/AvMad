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

import educationSoloInputField from 'form-fields/education/educationSoloInputField';
import GraduateFields from 'form-fields/education/graduate';
import UndergraduateField from 'form-fields/education/undergraduate';
import educationTypeList from 'form-fields/general-information/form-list/educationTypeList';
import graduateTypeList from 'form-fields/general-information/form-list/graduateTypeList';
import schoolLocationList from 'form-fields/general-information/form-list/schoolLocationList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';

const EducationMap = {
    schoolLocationList: schoolLocationList,
    educationTypeList: educationTypeList,
    graduateTypeList: graduateTypeList,
    degreeAwardedList: stateOfPracticeList,
    directorDegreeList: stateOfPracticeList,
    stateOfPracticeList: stateOfPracticeList
};

const Education: NextPage<{
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
            undergraduateSchoolFlag: false,
            undergraduate: [
                {
                    undergraduateSchoolLocation: null,
                    undergraduateSchoolName: '',
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    zipCode: '',
                    telephoneNumber: '',
                    ext: '',
                    faxNumber: '',
                    undergraduateMajor: '',
                    degreeAwarded: null,
                    completionFlag: true,
                    startDate: null,
                    endDate: null,
                    explanation: ''
                }
            ],
            graduateSchoolFlag: false,
            graduate: [
                {
                    educationType: null,
                    schoolLocation: null,
                    professionalSchoolName: '',
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    zipCode: '',
                    telephoneNumber: '',
                    ext: '',
                    faxNumber: '',
                    graduationType: null,
                    specialization: '',
                    degreeAwarded: null,
                    facultyFirstName: '',
                    facultyLastName: '',
                    directorDegree: null,
                    completionFlag: true,
                    startDate: null,
                    endDate: null
                }
            ]
        }
    });

    const {
        fields: undergraduateDataFields,
        remove: undergraduateRemove,
        append: undergraduateInsert
    } = useFieldArray({
        control,
        name: 'undergraduate'
    });

    const {
        fields: GraduateDataFields,
        remove: graduateRemove,
        append: graduateInsert
    } = useFieldArray({
        control,
        name: 'graduate'
    });

    const watchUndergraduateSchoolFlag = watch('undergraduateSchoolFlag');
    const watchGraduateSchoolFlag = watch('graduateSchoolFlag');

    const onSubmit = (data: any) => {
        console.log(data);
        handleComplete();
        localforage.setItem('educationData', data);

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
        localforage.getItem('educationData').then((res: any) => {
            console.log(res);
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('educationData', getValues());
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
                                    <Typography>Undergraduate School</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <CustomInput
                                    control={control}
                                    fieldProps={educationSoloInputField.undergraduateSchoolField}
                                    name={`${educationSoloInputField.undergraduateSchoolField.name}`}
                                />
                                {watchUndergraduateSchoolFlag && (
                                    <Typography textAlign="right" sx={{ m: '0px' }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            onClick={() =>
                                                undergraduateInsert({
                                                    undergraduateSchoolLocation: null,
                                                    undergraduateSchoolName: '',
                                                    addressLine1: '',
                                                    addressLine2: '',
                                                    city: '',
                                                    zipCode: '',
                                                    telephoneNumber: '',
                                                    ext: '',
                                                    faxNumber: '',
                                                    undergraduateMajor: '',
                                                    degreeAwarded: null,
                                                    completionFlag: true,
                                                    startDate: null,
                                                    endDate: null,
                                                    explanation: ''
                                                })
                                            }
                                        >
                                            Add Undergraduate School
                                        </Button>
                                    </Typography>
                                )}
                                {watchUndergraduateSchoolFlag &&
                                    undergraduateDataFields.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                <Divider sx={{ m: '25px' }}>
                                                    <Chip label={`Undergraduate School ${index + 1}`} />
                                                </Divider>

                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    {UndergraduateField.map((field) => (
                                                        <Grid item xs={field.size} key={field.name}>
                                                            <CustomInput
                                                                control={control}
                                                                fieldProps={field}
                                                                name={`undergraduate[${index}].${field.name}`}
                                                                options={
                                                                    EducationMap[
                                                                        field.options as keyof typeof EducationMap
                                                                    ]
                                                                }
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    <Grid
                                                        item
                                                        xs={educationSoloInputField.undergraduateExplnationField.size}
                                                    >
                                                        <ConditionField
                                                            control={control}
                                                            index={index}
                                                            watchName={`undergraduate[${index}].completionFlag`}
                                                            fieldProps={
                                                                educationSoloInputField.undergraduateExplnationField
                                                            }
                                                            name={`undergraduate[${index}].${educationSoloInputField.undergraduateExplnationField.name}`}
                                                            conditionBasis={false}
                                                            operation="equal"
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Typography textAlign="right" sx={{ mt: '20px' }}>
                                                    <Button
                                                        variant="contained"
                                                        startIcon={<DeleteIcon />}
                                                        onClick={() => {
                                                            undergraduateRemove(index);
                                                        }}
                                                    >
                                                        Remove Undergraduate School
                                                    </Button>
                                                </Typography>
                                            </div>
                                        );
                                    })}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel2} onChange={handleChangePanel('panel2')}>
                            <Tooltip title="Click here to add" arrow placement="top">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Graduate/Professional School</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <CustomInput
                                    control={control}
                                    fieldProps={educationSoloInputField.graduateSchoolField}
                                    name={`${educationSoloInputField.graduateSchoolField.name}`}
                                />
                                {watchGraduateSchoolFlag && (
                                    <Typography textAlign="right" sx={{ m: '0px' }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            onClick={() =>
                                                graduateInsert({
                                                    educationType: null,
                                                    schoolLocation: null,
                                                    professionalSchoolName: '',
                                                    addressLine1: '',
                                                    addressLine2: '',
                                                    city: '',
                                                    zipCode: '',
                                                    telephoneNumber: '',
                                                    ext: '',
                                                    faxNumber: '',
                                                    graduationType: null,
                                                    specialization: '',
                                                    degreeAwarded: null,
                                                    facultyFirstName: '',
                                                    facultyLastName: '',
                                                    directorDegree: null,
                                                    completionFlag: true,
                                                    startDate: null,
                                                    endDate: null
                                                })
                                            }
                                        >
                                            Add Graduate School
                                        </Button>
                                    </Typography>
                                )}
                                {watchGraduateSchoolFlag &&
                                    GraduateDataFields.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                <Divider sx={{ m: '25px' }}>
                                                    <Chip label={`Graduate School ${index + 1}`} />
                                                </Divider>
                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    {GraduateFields.map((field) => (
                                                        <Grid item xs={field.size} key={field.name}>
                                                            <CustomInput
                                                                control={control}
                                                                fieldProps={field}
                                                                name={`graduate[${index}].${field.name}`}
                                                                options={
                                                                    EducationMap[
                                                                        field.options as keyof typeof EducationMap
                                                                    ]
                                                                }
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    <Grid
                                                        item
                                                        xs={educationSoloInputField.graduateExplnationField.size}
                                                    >
                                                        <ConditionField
                                                            control={control}
                                                            index={index}
                                                            watchName={`graduate[${index}].completionFlag`}
                                                            fieldProps={educationSoloInputField.graduateExplnationField}
                                                            name={`graduate[${index}].${educationSoloInputField.graduateExplnationField.name}`}
                                                            conditionBasis={false}
                                                            operation="equal"
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Typography textAlign="right" sx={{ mt: '20px' }}>
                                                    <Button
                                                        variant="contained"
                                                        startIcon={<DeleteIcon />}
                                                        onClick={() => {
                                                            graduateRemove(index);
                                                        }}
                                                    >
                                                        Remove Graduate School
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

export default Education;
