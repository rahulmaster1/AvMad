import React, { useEffect } from 'react';

import CustomInput from '../CustomInput';
import NestedFieldArray from '../CustomInput/NestedFieldArray';
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

import certifyingBoardList from 'form-fields/general-information/form-list/certifyngBoardList';
import conditionList from 'form-fields/general-information/form-list/conditionList';
import primaryPractitionerTypeList from 'form-fields/general-information/form-list/primaryPractitionerTypeList';
import rankingList from 'form-fields/general-information/form-list/rankingList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import BoardExamFields from 'form-fields/specialty/BoardExam';
import CertifyingBoardFields from 'form-fields/specialty/CertifyingBoard';
import SpecialtyFields from 'form-fields/specialty/Specialty';
import specialtySoloInputFields from 'form-fields/specialty/specialtySoloInputField';

const SpecialtyMap = {
    rankingList: rankingList,
    stateOfPracticeList: stateOfPracticeList,
    specialtyList: primaryPractitionerTypeList,
    conditionList: conditionList,
    certifyingBoardList: certifyingBoardList
};

const Specialty: NextPage<{
    activeStep: number;
    handleBack: () => void;
    handleComplete: () => void;
    steps: string[];
}> = ({ activeStep, handleBack, steps, handleComplete }) => {
    const router = useRouter();

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

    const certifyingBoardAutofill: string[] = [
        'addressLine1',
        'addressLine2',
        'city',
        // 'state',
        'zipCode',
        'telephoneNumber'
    ];

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: {
            specialtyData: [
                {
                    ranking: null,
                    specialty: null,
                    ppoDirectoryFlag: null,
                    posDirectoryFlag: null,
                    providerDirectoryFlag: false,
                    hmoDirectoryFlag: false,
                    certifiedByAnyBoardFlag: false,
                    eligibleTobeCertifiedFlag: false,
                    certifyingBoardData: {
                        certifyingBoard: null,
                        addressLine1: '',
                        addressLine2: '',
                        city: '',
                        state: null,
                        zipCode: '',
                        boardCertificationNumber: '',
                        telephoneNumber: '',
                        ext: '',
                        faxNumber: '',
                        certificationExpirationDate: null,
                        initialCertificationDate: null,
                        doesNotExpire: false,
                        recertificationData: [{ recertificationDate: null }]
                    }
                }
            ],
            failedExamFlag: false,
            failedExamData: [
                {
                    boardExamDate: null,
                    certifyingBoard: null,
                    reasonForFailure: ''
                }
            ],
            populationServed: ''
        }
    });

    const {
        fields: specialtyDataFields,
        remove: specialtyRemove,
        append: specialtyInsert
    } = useFieldArray({
        control,
        name: 'specialtyData'
    });

    const {
        fields: failedExamDataFields,
        remove: failedExamRemove,
        append: failedExamInsert
    } = useFieldArray({
        control,
        name: 'failedExamData'
    });

    const watchFailedExamFlag = watch('failedExamFlag');

    const onSubmit = (data: any) => {
        handleComplete();
        localforage.setItem('specialtyData', data);
        router.push('/provider_source/education_and_training');

        localforage.getItem('userId').then((res: any) => {
            console.log({ ...data, userId: res });
            axios
                .post('https://plm-health.herokuapp.com/api/provider/specialties/add', { ...data, userId: res })
                .then((res) => {
                    console.log('Data has been saved', { ...data, userId: res });
                })
                .catch((err) => {
                    console.log('Error while processing request', err);
                });
        });
    };
    useEffect(() => {
        localforage.getItem('specialtyData').then((res: any) => {
            console.log(res);
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('specialtyData', getValues());
        console.log('Form updated');
    }, 5000);

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
                <Alert severity="info" sx={{ m: '20px 0' }}>
                    Please add all specialty types you wish to be credentialed in.
                </Alert>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded.panel1} onChange={handleChangePanel('panel1')}>
                            <Tooltip title="Click here to add" arrow placement="top">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Specialties</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <Alert severity="info" sx={{ mb: '20px' }}>
                                    Please enter all practicing specialty information.
                                </Alert>
                                <div>
                                    <Typography textAlign="right" sx={{ m: '0px' }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            onClick={() =>
                                                specialtyInsert({
                                                    ranking: null,
                                                    specialty: null,
                                                    ppoDirectoryFlag: null,
                                                    posDirectoryFlag: null,
                                                    providerDirectoryFlag: false,
                                                    hmoDirectoryFlag: false,
                                                    certifiedByAnyBoardFlag: false,
                                                    eligibleTobeCertifiedFlag: false,
                                                    certifyingBoardData: {
                                                        certifyingBoard: null,
                                                        addressLine1: '',
                                                        addressLine2: '',
                                                        city: '',
                                                        state: null,
                                                        zipCode: '',
                                                        boardCertificationNumber: '',
                                                        telephoneNumber: '',
                                                        ext: '',
                                                        faxNumber: '',
                                                        certificationExpirationDate: null,
                                                        initialCertificationDate: null,
                                                        doesNotExpire: false,
                                                        recertificationData: [{ recertificationDate: null }]
                                                    }
                                                })
                                            }
                                        >
                                            Add Specialty
                                        </Button>
                                    </Typography>
                                    {specialtyDataFields && specialtyDataFields.length > 0
                                        ? specialtyDataFields.map((item: any, index: number) => {
                                              return (
                                                  <div key={index}>
                                                      <Divider sx={{ m: '25px' }}>
                                                          <Chip
                                                              label={
                                                                  // @ts-expect-error
                                                                  // prettier-ignore
                                                                  `${watch(`specialtyData[${index}].ranking`)?.label || ''} Specialty`
                                                              }
                                                          />
                                                      </Divider>

                                                      <Grid container spacing={2} sx={{ mt: 1 }}>
                                                          {SpecialtyFields.map((field) => (
                                                              <Grid item xs={field.size} key={field.name}>
                                                                  <CustomInput
                                                                      control={control}
                                                                      fieldProps={field}
                                                                      name={`specialtyData[${index}].${field.name}`}
                                                                      options={
                                                                          SpecialtyMap[
                                                                              field.options as keyof typeof SpecialtyMap
                                                                          ]
                                                                      }
                                                                  />
                                                              </Grid>
                                                          ))}

                                                          {
                                                              // @ts-expect-error
                                                              // prettier-ignore
                                                              watch(`specialtyData[${index}].eligibleTobeCertifiedFlag`) &&
                                                            CertifyingBoardFields.map((field) => (
                                                                <Grid
                                                                    item
                                                                    xs={field.size}
                                                                    key={field.name}
                                                                >
                                                                    <CustomInput
                                                                        control={control}
                                                                        fieldProps={field}
                                                                        name={`specialtyData[${index}].certifyingBoardData.${field.name}`}
                                                                        options={
                                                                            SpecialtyMap[
                                                                            field.options as keyof typeof SpecialtyMap
                                                                            ]
                                                                        }
                                                                        onChangeCustom={
                                                                            field.name ==
                                                                                'certifyingBoard'
                                                                                ? (
                                                                                    e: React.SyntheticEvent<
                                                                                        Element,
                                                                                        Event
                                                                                    >,
                                                                                    value: any
                                                                                ) => {
                                                                                    // @ts-expect-error
                                                                                    // prettier-ignore
                                                                                    setValue(`specialtyData[${index}].certifyingBoardData.${field.name}`, value);

                                                                                    certifyingBoardAutofill.map(
                                                                                        (
                                                                                            item: string
                                                                                        ) =>
                                                                                            // @ts-expect-error
                                                                                            // prettier-ignore
                                                                                            setValue(`specialtyData[${index}].certifyingBoardData.${item}`, value[`${item}`])
                                                                                    );
                                                                                }
                                                                                : ''
                                                                        }
                                                                    />
                                                                </Grid>
                                                            ))
                                                          }
                                                      </Grid>
                                                      {
                                                          // @ts-expect-error
                                                          // prettier-ignore
                                                          watch(`specialtyData[${index}].eligibleTobeCertifiedFlag`) && (
                                                            <div>
                                                                <NestedFieldArray nestIndex={index} control={control} fieldProps={specialtySoloInputFields.recertificationDateField}
                                                                    name={`recertificationDate`}
                                                                    fieldArrayName={`specialtyData[${index}].certifyingBoardData.recertificationData`} />

                                                            </div>
                                                        )
                                                      }
                                                      <Typography textAlign="right" sx={{ mt: '20px' }}>
                                                          <Button
                                                              variant="contained"
                                                              startIcon={<DeleteIcon />}
                                                              disabled={specialtyDataFields.length == 1}
                                                              onClick={() => {
                                                                  specialtyRemove(index);
                                                              }}
                                                          >
                                                              Delete Specialty
                                                          </Button>
                                                      </Typography>
                                                  </div>
                                              );
                                          })
                                        : ''}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel2} onChange={handleChangePanel('panel2')}>
                            <Tooltip title="Click here to add" arrow placement="top">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Failed Exams</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <CustomInput
                                    control={control}
                                    fieldProps={specialtySoloInputFields.failedExamFlagField}
                                    name={specialtySoloInputFields.failedExamFlagField.name}
                                />
                                {watchFailedExamFlag && (
                                    <div>
                                        <Typography textAlign="right" sx={{ m: '0px' }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<AddIcon />}
                                                onClick={() =>
                                                    failedExamInsert({
                                                        boardExamDate: null,
                                                        certifyingBoard: null,
                                                        reasonForFailure: ''
                                                    })
                                                }
                                            >
                                                Add Failed Exam
                                            </Button>
                                        </Typography>
                                        {failedExamDataFields && failedExamDataFields.length > 0
                                            ? failedExamDataFields.map((item: any, failedExamIndex: number) => {
                                                  return (
                                                      <div key={failedExamIndex}>
                                                          <Divider sx={{ m: '25px' }}>
                                                              <Chip label={`Board Exam ${failedExamIndex + 1}`} />
                                                          </Divider>
                                                          <Grid container spacing={2} sx={{ mt: 1 }}>
                                                              {BoardExamFields.map((field) => (
                                                                  <Grid item xs={field.size} key={field.name}>
                                                                      <CustomInput
                                                                          control={control}
                                                                          fieldProps={field}
                                                                          name={`failedExamData[${failedExamIndex}].${field.name}`}
                                                                          options={
                                                                              SpecialtyMap[
                                                                                  field.options as keyof typeof SpecialtyMap
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
                                                                      failedExamRemove(failedExamIndex);
                                                                  }}
                                                              >
                                                                  Remove Failed Exam
                                                              </Button>
                                                          </Typography>{' '}
                                                      </div>
                                                  );
                                              })
                                            : ''}
                                    </div>
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
                                    <Typography>Population Served</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <Alert severity="info" sx={{ mb: '20px' }}>
                                    Other areas of professional practice interest, activities, procedures, diagnoses or
                                    populations
                                </Alert>
                                <CustomInput
                                    control={control}
                                    fieldProps={specialtySoloInputFields.populationServedField}
                                    name={specialtySoloInputFields.populationServedField.name}
                                />
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
        </React.Fragment>
    );
};

export default Specialty;
