import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';
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
import { useRouter } from 'next/router';
import { useFieldArray, useForm } from 'react-hook-form';

import certificationList from 'form-fields/general-information/form-list/certificationList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import MedicaidFields from 'form-fields/professional-ids/Medicaid';
import MedicareFields from 'form-fields/professional-ids/Medicare';
import OtherCertificationsFields from 'form-fields/professional-ids/OtherCertifications';
import OtherIDsFields from 'form-fields/professional-ids/OtherIDs';
import otherIdsAndCertificationSoloInputField from 'form-fields/professional-ids/otherIdsAndCertificationSoloInputField';

const OtherIdAndCertificationMap = {
    stateList: stateOfPracticeList,
    certificationList: certificationList
};

const OtherIdAndCertification: NextPage<{
    activeStep: number;
    handleBack: () => void;
    handleComplete: () => void;
    steps: string[];
}> = ({ activeStep, handleBack, steps, handleComplete }) => {
    const router = useRouter();

    const [expanded, setExpanded] = useState<{
        panel1: boolean;
        panel2: boolean;
        panel3: boolean;
        panel4: boolean;
    }>({
        panel1: true,
        panel2: true,
        panel3: true,
        panel4: true
    });

    const handleChangePanel = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        panel === 'panel1'
            ? setExpanded({ ...expanded, panel1: isExpanded })
            : panel === 'panel2'
            ? setExpanded({ ...expanded, panel2: isExpanded })
            : panel === 'panel3'
            ? setExpanded({ ...expanded, panel3: isExpanded })
            : setExpanded({ ...expanded, panel4: isExpanded });
    };

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: {
            medicareFlag: false,
            medicareProviderFlag: false,
            medicareData: [
                {
                    medicareNumber: '',
                    medicareState: null
                }
            ],
            medicaidProviderFlag: false,
            medicaidData: [
                {
                    medicaidNumber: '',
                    medicaidState: null,
                    medicaidNumberFlag: false
                }
            ],
            tricareProviderNumber: '',
            usmleNumber: '',
            workersCompensationNumber: '',
            otherCertificationsFlag: false,
            otherCertificationsData: [
                {
                    certificationType: null,
                    state: null,
                    certificationNumber: '',
                    issueDate: null,
                    expirationDate: null,
                    doesNotExpire: false
                }
            ]
        }
    });

    const {
        fields: medicareProviderDataFields,
        remove: medicareProviderRemove,
        append: medicareProviderInsert
    } = useFieldArray({
        control,
        name: 'medicareData'
    });

    const watchMedicareProviderFlag = watch('medicareProviderFlag');

    const {
        fields: medicaidProviderDataFields,
        remove: medicaidProviderRemove,
        append: medicaidProviderInsert
    } = useFieldArray({
        control,
        name: 'medicaidData'
    });

    const watchMedicaidProviderFlag = watch('medicaidProviderFlag');

    const {
        fields: otherCertificationsDataFields,
        remove: otherCertificationsRemove,
        append: otherCertificationsInsert
    } = useFieldArray({
        control,
        name: 'otherCertificationsData'
    });

    const watchOtherCertificationsFlag = watch('otherCertificationsFlag');

    const onSubmit = (data: any) => {
        handleComplete();
        localforage.setItem('otherIdAndCertificationData', data);
        router.push('/provider_source/health_plans');

        localforage.getItem('userId').then((res: any) => {
            console.log({ ...data, userId: res });
            axios
                .post('https://plm-health.herokuapp.com/api/provider/other-ids-and-cert/add', { ...data, userId: res })
                .then((res) => {
                    console.log('Data has been saved', { ...data, userId: res });
                })
                .catch((err) => {
                    console.log('Error while processing request', err);
                });
        });
    };

    useEffect(() => {
        localforage.getItem('otherIdAndCertificationData').then((res: any) => {
            console.log(res);
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('otherIdAndCertificationData', getValues());
        console.log('Form updated');
    }, 5000);

    return (
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
                                <Typography>Medicare</Typography>
                            </AccordionSummary>
                        </Tooltip>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <CustomInput
                                        control={control}
                                        fieldProps={otherIdsAndCertificationSoloInputField.medicareFlagField}
                                        name={otherIdsAndCertificationSoloInputField.medicareFlagField.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomInput
                                        control={control}
                                        fieldProps={otherIdsAndCertificationSoloInputField.medicareProviderFlagField}
                                        name={otherIdsAndCertificationSoloInputField.medicareProviderFlagField.name}
                                    />
                                </Grid>
                            </Grid>
                            {watchMedicareProviderFlag ? (
                                <>
                                    <Alert severity="info" sx={{ mb: '20px', mt: '20px' }}>
                                        An Identification number assigned to providers by Center for Medicare and
                                        Medicaid Services ( CMS) for Providers participating in medicare program. Also
                                        known as Medicare billing numbers or Physician Profiling Numbers
                                    </Alert>
                                    <div>
                                        <Typography textAlign="right" sx={{ m: '0px' }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<AddIcon />}
                                                onClick={() =>
                                                    medicareProviderInsert({
                                                        medicareNumber: '',
                                                        medicareState: null
                                                    })
                                                }
                                            >
                                                Add Medicare Provider
                                            </Button>
                                        </Typography>
                                        {medicareProviderDataFields && medicareProviderDataFields.length > 0
                                            ? medicareProviderDataFields.map((item: any, index: number) => {
                                                  return (
                                                      <div key={index}>
                                                          <Divider sx={{ m: '25px' }}>
                                                              <Chip label={`Medicare Number ${index + 1}`} />
                                                          </Divider>

                                                          <Grid container spacing={2} sx={{ mt: 1 }}>
                                                              {MedicareFields.map((field) => (
                                                                  <Grid item xs={field.size} key={field.name}>
                                                                      <CustomInput
                                                                          control={control}
                                                                          fieldProps={field}
                                                                          name={`medicareData[${index}].${field.name}`}
                                                                          options={
                                                                              OtherIdAndCertificationMap[
                                                                                  field.options as keyof typeof OtherIdAndCertificationMap
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
                                                                      medicareProviderRemove(index);
                                                                  }}
                                                              >
                                                                  Remove Medicare Provider
                                                              </Button>
                                                          </Typography>
                                                      </div>
                                                  );
                                              })
                                            : ''}
                                    </div>
                                </>
                            ) : (
                                ''
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
                                <Typography>Medicaid</Typography>
                            </AccordionSummary>
                        </Tooltip>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <CustomInput
                                        control={control}
                                        name={otherIdsAndCertificationSoloInputField.medicaidFlagField.name}
                                        fieldProps={otherIdsAndCertificationSoloInputField.medicaidFlagField}
                                    />
                                </Grid>
                            </Grid>
                            {watchMedicaidProviderFlag ? (
                                <>
                                    <Alert severity="info" sx={{ mb: '20px', mt: '20px' }}>
                                        An Identification number assigned to providers each state Medicaid agency for
                                        Providers participating in medicaid program
                                    </Alert>
                                    <div>
                                        <Typography textAlign="right" sx={{ m: '0px' }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<AddIcon />}
                                                onClick={() =>
                                                    medicaidProviderInsert({
                                                        medicaidNumber: '',
                                                        medicaidState: null,
                                                        medicaidNumberFlag: false
                                                    })
                                                }
                                            >
                                                Add Medicaid Provider
                                            </Button>
                                        </Typography>
                                        {medicaidProviderDataFields && medicaidProviderDataFields.length > 0
                                            ? medicaidProviderDataFields.map((item: any, index: number) => {
                                                  return (
                                                      <div key={index}>
                                                          <Divider sx={{ m: '25px' }}>
                                                              <Chip label={`Medicare Number ${index + 1}`} />
                                                          </Divider>

                                                          <Grid container spacing={2} sx={{ mt: 1 }}>
                                                              {MedicaidFields.map((field) => (
                                                                  <Grid item xs={field.size} key={field.name}>
                                                                      <CustomInput
                                                                          control={control}
                                                                          fieldProps={field}
                                                                          name={`medicaidData[${index}].${field.name}`}
                                                                          options={
                                                                              OtherIdAndCertificationMap[
                                                                                  field.options as keyof typeof OtherIdAndCertificationMap
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
                                                                      medicaidProviderRemove(index);
                                                                  }}
                                                              >
                                                                  Remove Medicaid Provider
                                                              </Button>
                                                          </Typography>
                                                      </div>
                                                  );
                                              })
                                            : ''}
                                    </div>
                                </>
                            ) : (
                                ''
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
                                <Typography>Other IDs</Typography>
                            </AccordionSummary>
                        </Tooltip>
                        <AccordionDetails>
                            <Alert severity="info" sx={{ mb: '20px' }}>
                                <p>
                                    Identification number assigned by TRICARE, a government agency designated to
                                    provider healthcare for military personel
                                </p>
                                <p>
                                    Identification number assigned by the United Sates Medical Licensing Examination (
                                    Do not enter hyphen )
                                </p>
                                <p>Identification number assigned by the United States Department of Labor</p>
                            </Alert>
                            <Grid container spacing={2} sx={{ mt: 1 }}>
                                {OtherIDsFields.map((field) => (
                                    <Grid item xs={field.size} key={field.name}>
                                        <CustomInput control={control} fieldProps={field} name={field.name} />
                                    </Grid>
                                ))}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded.panel4} onChange={handleChangePanel('panel4')}>
                        <Tooltip title="Click here to add" arrow placement="top">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Other Certifications</Typography>
                            </AccordionSummary>
                        </Tooltip>
                        <AccordionDetails>
                            <CustomInput
                                control={control}
                                fieldProps={otherIdsAndCertificationSoloInputField.otherCertificationsFlagField}
                                name={otherIdsAndCertificationSoloInputField.otherCertificationsFlagField.name}
                            />
                            {watchOtherCertificationsFlag ? (
                                <>
                                    <div>
                                        <Typography textAlign="right" sx={{ m: '0px' }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<AddIcon />}
                                                onClick={() =>
                                                    otherCertificationsInsert({
                                                        certificationType: null,
                                                        state: null,
                                                        certificationNumber: '',
                                                        issueDate: null,
                                                        expirationDate: null,
                                                        doesNotExpire: false
                                                    })
                                                }
                                            >
                                                Add Certification
                                            </Button>
                                        </Typography>
                                        {otherCertificationsDataFields && otherCertificationsDataFields.length > 0
                                            ? otherCertificationsDataFields.map((item: any, index: number) => {
                                                  return (
                                                      <div key={index}>
                                                          <Divider sx={{ m: '25px' }}>
                                                              <Chip label={`Other Certifications ${index + 1}`} />
                                                          </Divider>

                                                          <Grid container spacing={2} sx={{ mt: 1 }}>
                                                              {OtherCertificationsFields.map((field) => (
                                                                  <Grid item xs={field.size} key={field.name}>
                                                                      <CustomInput
                                                                          control={control}
                                                                          fieldProps={field}
                                                                          name={`otherCertificationsData[${index}].${field.name}`}
                                                                          options={
                                                                              OtherIdAndCertificationMap[
                                                                                  field.options as keyof typeof OtherIdAndCertificationMap
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
                                                                      otherCertificationsRemove(index);
                                                                  }}
                                                              >
                                                                  Remove Certification
                                                              </Button>
                                                          </Typography>
                                                      </div>
                                                  );
                                              })
                                            : ''}
                                    </div>
                                </>
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
    );
};

export default OtherIdAndCertification;
