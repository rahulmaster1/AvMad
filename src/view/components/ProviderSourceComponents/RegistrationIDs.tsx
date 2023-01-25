import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';
import LoadingForm from '../Loading/Loading';
import { licenseDefaultValues } from './Licensure';
import AddIcon from '@mui/icons-material/Add';
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
import { uid } from 'uid';

import { setProgressBarState } from 'state/reducers/providerSourceReducer';

import { useAppDispatch } from 'hooks/useAppDispatch';

import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import CDSFields from 'form-fields/professional-ids/CDS';
import DEAFields from 'form-fields/professional-ids/DEA';
import RegistrationIdFields from 'form-fields/professional-ids/Registration';
import registrationIdSoloInputField from 'form-fields/professional-ids/registrationIdSoloInputField';

const RegistrationStateMap = {
    stateOfPracticeList: stateOfPracticeList
};

export const registrationIdDefaultValues = {
    npiNumber: '',
    dea: false,
    cds: false,
    registrationFlag: false,
    deaReason: '',
    cdsReason: '',
    deaData: [
        {
            deaRegistrationNumber: '',
            registrationState: null,
            issueDate: null,
            expirationDate: null,
            doesNotExpire: false,
            fullSchedule: false
        }
    ],
    cdsData: [
        {
            cdsRegistrationNumber: '',
            registrationState: null,
            issueDate: null,
            expirationDate: null,
            doesNotExpire: false,
            fullSchedule: false,
            practicingStateFlag: false
        }
    ],
    registrationData: [
        {
            registrationNumber: '',
            specialty: '',
            state: null,
            issuingBoard: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            zipCode: '',
            telephoneNumber: '',
            ext: '',
            faxNumber: '',
            issueDate: null,
            expirationDate: null,
            doesNotExpire: false,
            practicingNumberFlag: false
        }
    ]
};

const RegistrationIDs: NextPage<{
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
        fields: deaDataFields,
        remove: deaRemove,
        append: deaInsert
    } = useFieldArray({
        control,
        name: 'deaData'
    });

    const {
        fields: cdsDataFields,
        remove: cdsRemove,
        append: cdsInsert
    } = useFieldArray({
        control,
        name: 'cdsData'
    });

    const {
        fields: registrationDataFields,
        remove: registrationRemove,
        append: registrationInsert
    } = useFieldArray({
        control,
        name: 'registrationData'
    });
    const watchDeaFlag = watch('dea');
    const watchCdsFlag = watch('cds');
    const watchRegistrationFlag = watch('registrationFlag');

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
                    <Grid item xs={5}>
                        <CustomInput
                            control={control}
                            fieldProps={registrationIdSoloInputField.npiNumberField}
                            name={registrationIdSoloInputField.npiNumberField.name}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded.panel1} onChange={handleChangePanel('panel1')}>
                            <Tooltip title="Click here to add" arrow placement="top">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>DEA</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <Alert severity="info" sx={{ mb: '20px' }}>
                                    Drug Enforcement Administration Registration number, applicable to MD, DO, DDS, DMD,
                                    DVM, DPM only.
                                </Alert>
                                <CustomInput
                                    control={control}
                                    fieldProps={registrationIdSoloInputField.deaField}
                                    name={registrationIdSoloInputField.deaField.name}
                                />

                                {watchDeaFlag ? (
                                    <div>
                                        <Typography textAlign="right" sx={{ m: '0px' }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<AddIcon />}
                                                onClick={() =>
                                                    deaInsert({
                                                        deaRegistrationNumber: '',
                                                        registrationState: null,
                                                        issueDate: null,
                                                        expirationDate: null,
                                                        doesNotExpire: false,
                                                        fullSchedule: false
                                                    })
                                                }
                                            >
                                                Add DEA
                                            </Button>
                                        </Typography>
                                        {deaDataFields && deaDataFields.length > 0
                                            ? deaDataFields.map((item: any, index: number) => {
                                                  return (
                                                      <div key={index}>
                                                          <Divider sx={{ m: '25px' }}>
                                                              <Chip label={`DEA Registration ${index + 1}`} />
                                                          </Divider>

                                                          <Grid container spacing={2} sx={{ mt: 1 }}>
                                                              {DEAFields.map((field) => (
                                                                  <Grid item xs={field.size} key={field.name}>
                                                                      <CustomInput
                                                                          control={control}
                                                                          fieldProps={field}
                                                                          name={`deaData[${index}].${field.name}`}
                                                                          options={
                                                                              RegistrationStateMap[
                                                                                  field.options as keyof typeof RegistrationStateMap
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
                                                                      deaRemove(index);
                                                                  }}
                                                              >
                                                                  Remove DEA
                                                              </Button>
                                                          </Typography>
                                                      </div>
                                                  );
                                              })
                                            : ''}
                                    </div>
                                ) : (
                                    <Grid container sx={{ mt: 2 }}>
                                        <Grid item xs={12}>
                                            <CustomInput
                                                control={control}
                                                fieldProps={registrationIdSoloInputField.deaReasonField}
                                                name={registrationIdSoloInputField.deaReasonField.name}
                                            />
                                        </Grid>
                                    </Grid>
                                )}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel2} onChange={handleChangePanel('panel2')}>
                            <Tooltip title="Click here to add" arrow placement="top">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>CDS</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <Alert severity="info" sx={{ mb: '20px' }}>
                                    Controlled Dangerous Substances Registration Number issued by certain states.
                                    Applicable to MD, DO, DDS, DMD, DVM, DPM only
                                </Alert>
                                <CustomInput
                                    control={control}
                                    fieldProps={registrationIdSoloInputField.cdsField}
                                    name={registrationIdSoloInputField.cdsField.name}
                                />
                                {watchCdsFlag ? (
                                    <div>
                                        <Typography textAlign="right" sx={{ m: '0px' }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<AddIcon />}
                                                onClick={() =>
                                                    cdsInsert({
                                                        cdsRegistrationNumber: '',
                                                        registrationState: null,
                                                        issueDate: null,
                                                        expirationDate: null,
                                                        doesNotExpire: false,
                                                        fullSchedule: false,
                                                        practicingStateFlag: false
                                                    })
                                                }
                                            >
                                                Add CDS
                                            </Button>
                                        </Typography>
                                        {cdsDataFields && cdsDataFields.length > 0
                                            ? cdsDataFields.map((item: any, index: number) => {
                                                  return (
                                                      <div key={index}>
                                                          <Divider sx={{ m: '25px' }}>
                                                              <Chip label={`CDS Registration ${index + 1}`} />
                                                          </Divider>

                                                          <Grid container spacing={2} sx={{ mt: 1 }}>
                                                              {CDSFields.map((field) => (
                                                                  <Grid item xs={field.size} key={field.name}>
                                                                      <CustomInput
                                                                          control={control}
                                                                          fieldProps={field}
                                                                          name={`cdsData[${index}].${field.name}`}
                                                                          options={
                                                                              RegistrationStateMap[
                                                                                  field.options as keyof typeof RegistrationStateMap
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
                                                                      cdsRemove(index);
                                                                  }}
                                                              >
                                                                  Remove CDS
                                                              </Button>
                                                          </Typography>
                                                      </div>
                                                  );
                                              })
                                            : ''}
                                    </div>
                                ) : (
                                    <Grid container sx={{ mt: 2 }}>
                                        <Grid item xs={12}>
                                            <CustomInput
                                                control={control}
                                                fieldProps={registrationIdSoloInputField.cdsReasonField}
                                                name={registrationIdSoloInputField.cdsReasonField.name}
                                            />
                                        </Grid>
                                    </Grid>
                                )}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel3} onChange={handleChangePanel('panel3')}>
                            <Tooltip title="Click here to add" arrow placement="top">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Registration</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <CustomInput
                                    control={control}
                                    fieldProps={registrationIdSoloInputField.registrationField}
                                    name={registrationIdSoloInputField.registrationField.name}
                                />
                                {watchRegistrationFlag ? (
                                    <div>
                                        <Typography textAlign="right" sx={{ m: '0px' }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<AddIcon />}
                                                onClick={() =>
                                                    registrationInsert({
                                                        registrationNumber: '',
                                                        specialty: '',
                                                        state: null,
                                                        issuingBoard: '',
                                                        addressLine1: '',
                                                        addressLine2: '',
                                                        city: '',
                                                        zipCode: '',
                                                        telephoneNumber: '',
                                                        ext: '',
                                                        faxNumber: '',
                                                        issueDate: null,
                                                        expirationDate: null,
                                                        doesNotExpire: false,
                                                        practicingNumberFlag: false
                                                    })
                                                }
                                            >
                                                Add Registration
                                            </Button>
                                        </Typography>
                                        {registrationDataFields && registrationDataFields.length > 0
                                            ? registrationDataFields.map((item: any, index: number) => {
                                                  return (
                                                      <div key={index}>
                                                          <Divider sx={{ m: '25px' }}>
                                                              <Chip label={`Registration ${index + 1}`} />
                                                          </Divider>

                                                          <Grid container spacing={2} sx={{ mt: 1 }}>
                                                              {RegistrationIdFields.map((field) => (
                                                                  <Grid item xs={field.size} key={field.name}>
                                                                      <CustomInput
                                                                          control={control}
                                                                          fieldProps={field}
                                                                          name={`registrationData[${index}].${field.name}`}
                                                                          options={
                                                                              RegistrationStateMap[
                                                                                  field.options as keyof typeof RegistrationStateMap
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
                                                                      registrationRemove(index);
                                                                  }}
                                                              >
                                                                  Remove Registration
                                                              </Button>
                                                          </Typography>
                                                      </div>
                                                  );
                                              })
                                            : ''}
                                    </div>
                                ) : (
                                    ''
                                )}
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

export default RegistrationIDs;
