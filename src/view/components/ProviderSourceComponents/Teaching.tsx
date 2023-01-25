import React, { useEffect } from 'react';

import CustomInput from '../CustomInput';
import AddIcon from '@mui/icons-material/Add';
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
import { useRouter } from 'next/router';
import { useFieldArray, useForm } from 'react-hook-form';

import ProgramDiectorFields from 'form-fields/education/programDirector';
import TeachingFields from 'form-fields/education/teaching';
import primaryPractitionerTypeList from 'form-fields/general-information/form-list/primaryPractitionerTypeList';
import schoolLocationList from 'form-fields/general-information/form-list/schoolLocationList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import trainingList from 'form-fields/general-information/form-list/trainingList';

const TeachingMap = {
    trainingList: trainingList,
    programLocationList: schoolLocationList,
    primaryPractitionerTypeList: primaryPractitionerTypeList,
    degreeAwardedList: stateOfPracticeList
};

const Teaching: NextPage<{
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

    const router = useRouter();

    const handleChangePanel = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        panel === 'panel1'
            ? setExpanded({ ...expanded, panel1: isExpanded })
            : panel === 'panel2'
            ? setExpanded({ ...expanded, panel2: isExpanded })
            : setExpanded({ ...expanded, panel3: isExpanded });
    };

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: {
            teachingFlag: false,
            teachingAppointment: [
                {
                    teachingProgramLocation: null,
                    teachingProgramName: '',
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    zipCode: '',
                    telephoneNumber: '',
                    ext: '',
                    faxNumber: '',
                    emailAddress: '',
                    directorFirstName: '',
                    directorLastName: '',
                    directorDegree: null,
                    academicRank: null,
                    startDate: null,
                    endDate: null,
                    doesNotExpire: false
                }
            ]
        }
    });

    const {
        fields: teachingAppointmentDataFields,
        remove: teachingAppointmentRemove,
        append: teachingAppointmentInsert
    } = useFieldArray({
        control,
        name: 'teachingAppointment'
    });

    const watchTeachingProgramFlag = watch('teachingFlag');

    const onSubmit = (data: any) => {
        console.log(data);
        handleComplete();
        localforage.setItem('teachingData', data);
        router.push('/provider_source/healthcare_facility_affiliations');

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
        localforage.getItem('teachingData').then((res: any) => {
            console.log(res);
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('teachingData', getValues());
        console.log('Form updated');
    }, 5000);

    const teachingSoloInputField = {
        teachingFlagField: {
            size: 12,
            inputType: 'switch',
            name: 'teachingFlag',
            label: 'Are/Were you an instructor or faculty for a teaching program?',
            required: true
        }
    };

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
                                    <Typography>Teaching Appointments</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <CustomInput
                                    control={control}
                                    fieldProps={teachingSoloInputField.teachingFlagField}
                                    name={`${teachingSoloInputField.teachingFlagField.name}`}
                                />
                                {watchTeachingProgramFlag && (
                                    <Typography textAlign="right" sx={{ m: '0px' }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            onClick={() =>
                                                teachingAppointmentInsert({
                                                    teachingProgramLocation: null,
                                                    teachingProgramName: '',
                                                    addressLine1: '',
                                                    addressLine2: '',
                                                    city: '',
                                                    zipCode: '',
                                                    telephoneNumber: '',
                                                    ext: '',
                                                    faxNumber: '',
                                                    emailAddress: '',
                                                    directorFirstName: '',
                                                    directorLastName: '',
                                                    directorDegree: null,
                                                    academicRank: null,
                                                    startDate: null,
                                                    endDate: null,
                                                    doesNotExpire: false
                                                })
                                            }
                                        >
                                            Add Teaching Appointment
                                        </Button>
                                    </Typography>
                                )}
                                {watchTeachingProgramFlag &&
                                    teachingAppointmentDataFields.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                <Divider sx={{ m: '25px' }}>
                                                    <Chip label={`Teaching Appointment ${index + 1}`} />
                                                </Divider>

                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    {TeachingFields.map((field) => (
                                                        <Grid item xs={field.size} key={field.name}>
                                                            <CustomInput
                                                                control={control}
                                                                fieldProps={field}
                                                                name={`teachingAppointment[${index}].${field.name}`}
                                                                options={
                                                                    TeachingMap[
                                                                        field.options as keyof typeof TeachingMap
                                                                    ]
                                                                }
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    {ProgramDiectorFields.map((field) => (
                                                        <Grid item xs={field.size} key={field.name}>
                                                            <CustomInput
                                                                control={control}
                                                                fieldProps={field}
                                                                name={`teachingAppointment[${index}].${field.name}`}
                                                                options={
                                                                    TeachingMap[
                                                                        field.options as keyof typeof TeachingMap
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
                                                            teachingAppointmentRemove(index);
                                                        }}
                                                    >
                                                        Remove Teaching Appointment
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

export default Teaching;
