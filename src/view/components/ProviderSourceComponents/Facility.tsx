import React, { useEffect } from 'react';

import CustomInput from '../CustomInput';
import ConditionField from '../CustomInput/ConditionField';
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

import primaryPractitionerTypeList from 'form-fields/general-information/form-list/primaryPractitionerTypeList';
import privelegeStatusList from 'form-fields/general-information/form-list/privelegeStatusList';
import schoolLocationList from 'form-fields/general-information/form-list/schoolLocationList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import trainingList from 'form-fields/general-information/form-list/trainingList';
import AdmittingPhysicianFields from 'form-fields/healthcare-facility/AdmittingPhysician';
import DoesNotExpireFields from 'form-fields/healthcare-facility/DoesNotExpireFields';
import FacilityFields from 'form-fields/healthcare-facility/Facility';
import NonPendingFields from 'form-fields/healthcare-facility/NonPendingFields';
import facilitySoloInputField from 'form-fields/healthcare-facility/facilitySoloInputField';

const TeachingMap = {
    trainingList: trainingList,
    programLocationList: schoolLocationList,
    primaryPractitionerTypeList: primaryPractitionerTypeList,
    stateOfPracticeList: stateOfPracticeList,
    privelegeStatusList: privelegeStatusList
};

const Facility: NextPage<{
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
            hospitalPrivilegeFlag: false,
            admittingArrangementFlag: false,
            explanation: '',
            hospitalPrivilege: [
                {
                    facilityLocation: null,
                    facilityName: '',
                    noLongerInBusinessFlag: false,
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    zipCode: '',
                    telephoneNumber: '',
                    ext: '',
                    faxNumber: '',
                    departmentName: null,
                    divisionName: null,
                    firstName: '',
                    lastName: '',
                    unrestrictedPrivilegeFlag: false,
                    privelegeTemporaryFlag: false,
                    privillegeStatus: null,
                    dateApplication: null,
                    appointmentDate: null,
                    expirationDate: null,
                    doesNotExpire: false,
                    annualAdmissions: '',
                    primaryFacilityFlag: false
                }
            ],
            admittingArrangement: [
                {
                    nameOfAdmittingPhysician: '',
                    facilityLocation: null,
                    facilityName: '',
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    zipCode: '',
                    admittingArrangements: ''
                }
            ]
        }
    });

    const {
        fields: hospitalPrivilegeDataFields,
        remove: hospitalPrivilegeRemove,
        append: hospitalPrivilegeInsert
    } = useFieldArray({
        control,
        name: 'hospitalPrivilege'
    });

    const {
        fields: admittingArrangementDataFields,
        remove: admittingArrangementRemove,
        append: admittingArrangementInsert
    } = useFieldArray({
        control,
        name: 'admittingArrangement'
    });

    const watchTeachingProgramFlag = watch('hospitalPrivilegeFlag');
    const watchAdmittingFlag = watch('admittingArrangementFlag');

    const onSubmit = (data: any) => {
        console.log(data);
        handleComplete();
        localforage.setItem('HealthcareFacilityData', data);
        router.push('/provider_source/professional_liability');

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
        localforage.getItem('HealthcareFacilityData').then((res: any) => {
            console.log(res);
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('HealthcareFacilityData', getValues());
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
                                    <Typography>Affiliation Information</Typography>
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 0 }}>
                                    <Grid item xs={12}>
                                        <CustomInput
                                            control={control}
                                            fieldProps={facilitySoloInputField.hospitalPrivilegeFlagField}
                                            name={`${facilitySoloInputField.hospitalPrivilegeFlagField.name}`}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        {!watchTeachingProgramFlag && (
                                            <>
                                                <ConditionField
                                                    control={control}
                                                    watchName={`hospitalPrivilegeFlag`}
                                                    fieldProps={facilitySoloInputField.admittingField}
                                                    name={facilitySoloInputField.admittingField.name}
                                                    conditionBasis={false}
                                                    operation="equal"
                                                />
                                            </>
                                        )}
                                        {!watchAdmittingFlag && !watchTeachingProgramFlag ? (
                                            <CustomInput
                                                control={control}
                                                fieldProps={facilitySoloInputField.explanationField}
                                                name={facilitySoloInputField.explanationField.name}
                                            />
                                        ) : (
                                            ''
                                        )}
                                    </Grid>
                                </Grid>

                                {!watchTeachingProgramFlag && watchAdmittingFlag ? (
                                    <Typography textAlign="right" sx={{ m: '0px' }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            onClick={() =>
                                                admittingArrangementInsert({
                                                    nameOfAdmittingPhysician: '',
                                                    facilityLocation: null,
                                                    facilityName: '',
                                                    addressLine1: '',
                                                    addressLine2: '',
                                                    city: '',
                                                    zipCode: '',
                                                    admittingArrangements: ''
                                                })
                                            }
                                        >
                                            Add Affiliation
                                        </Button>
                                    </Typography>
                                ) : (
                                    ''
                                )}
                                {!watchTeachingProgramFlag && watchAdmittingFlag
                                    ? admittingArrangementDataFields.map((item, index) => {
                                          return (
                                              <div key={item.id}>
                                                  <Divider sx={{ m: '25px' }}>
                                                      <Chip label={`Affiliation ${index + 1}`} />
                                                  </Divider>

                                                  <Grid container spacing={2} sx={{ mt: 1 }}>
                                                      {AdmittingPhysicianFields.map((field) => (
                                                          <Grid item xs={field.size} key={field.name}>
                                                              <CustomInput
                                                                  control={control}
                                                                  fieldProps={field}
                                                                  name={`admittingArrangement[${index}].${field.name}`}
                                                                  options={
                                                                      TeachingMap[
                                                                          field.options as keyof typeof TeachingMap
                                                                      ]
                                                                  }
                                                              />
                                                          </Grid>
                                                      ))}
                                                  </Grid>

                                                  <Typography textAlign="right" sx={{ mt: '20px   ' }}>
                                                      <Button
                                                          variant="contained"
                                                          startIcon={<DeleteIcon />}
                                                          onClick={() => {
                                                              admittingArrangementRemove(index);
                                                          }}
                                                      >
                                                          Remove Affiliation
                                                      </Button>
                                                  </Typography>
                                              </div>
                                          );
                                      })
                                    : ''}

                                {watchTeachingProgramFlag && (
                                    <Typography textAlign="right" sx={{ m: '0px' }}>
                                        <Button
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            onClick={() =>
                                                hospitalPrivilegeInsert({
                                                    facilityLocation: null,
                                                    facilityName: '',
                                                    noLongerInBusinessFlag: false,
                                                    addressLine1: '',
                                                    addressLine2: '',
                                                    city: '',
                                                    zipCode: '',
                                                    telephoneNumber: '',
                                                    ext: '',
                                                    faxNumber: '',
                                                    departmentName: null,
                                                    divisionName: null,
                                                    firstName: '',
                                                    lastName: '',
                                                    unrestrictedPrivilegeFlag: false,
                                                    privelegeTemporaryFlag: false,
                                                    privillegeStatus: null,
                                                    dateApplication: null,
                                                    appointmentDate: null,
                                                    expirationDate: null,
                                                    doesNotExpire: false,
                                                    annualAdmissions: '',
                                                    primaryFacilityFlag: false
                                                })
                                            }
                                        >
                                            Add Affiliation
                                        </Button>
                                    </Typography>
                                )}
                                {watchTeachingProgramFlag &&
                                    hospitalPrivilegeDataFields.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                <Divider sx={{ m: '25px' }}>
                                                    <Chip label={`Affiliation ${index + 1}`} />
                                                </Divider>

                                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                                    {FacilityFields.map((field) => (
                                                        <Grid item xs={field.size} key={field.name}>
                                                            <CustomInput
                                                                control={control}
                                                                fieldProps={field}
                                                                name={`hospitalPrivilege[${index}].${field.name}`}
                                                                options={
                                                                    TeachingMap[
                                                                        field.options as keyof typeof TeachingMap
                                                                    ]
                                                                }
                                                                onChangeCustom={
                                                                    field.name == 'privillegeStatus'
                                                                        ? (
                                                                              event: React.SyntheticEvent<
                                                                                  Element,
                                                                                  Event
                                                                              >,
                                                                              data: any
                                                                          ) => {
                                                                              // @ts-expect-error
                                                                              // prettier-ignore
                                                                              setValue(`hospitalPrivilege[${index}].privillegeStatus`, data);
                                                                              // @ts-expect-error
                                                                              // prettier-ignore
                                                                              setValue(`hospitalPrivilege[${index}].doesNotExpire`, false);
                                                                          }
                                                                        : ''
                                                                }
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                <Grid container spacing={2} sx={{ mt: 0 }}>
                                                    <Grid item xs={facilitySoloInputField.dateApplicationField.size}>
                                                        <ConditionField
                                                            control={control}
                                                            index={index}
                                                            watchName={`hospitalPrivilege[${index}].privillegeStatus.label`}
                                                            fieldProps={facilitySoloInputField.dateApplicationField}
                                                            name={`hospitalPrivilege[${index}].${facilitySoloInputField.dateApplicationField.name}`}
                                                            conditionBasis={'Pending'}
                                                            operation="equal"
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Grid container spacing={2} sx={{ mt: 0 }}>
                                                    {NonPendingFields.map((field, key) => (
                                                        <Grid item xs={field.size} key={key}>
                                                            <ConditionField
                                                                control={control}
                                                                index={key}
                                                                watchName={`hospitalPrivilege[${index}].privillegeStatus.label`}
                                                                fieldProps={field}
                                                                name={`hospitalPrivilege[${index}].${field.name}`}
                                                                conditionBasis={'Pending'}
                                                                operation="notEqual"
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>

                                                <Grid container spacing={2} sx={{ mt: 0 }}>
                                                    {DoesNotExpireFields.map((field, key) => (
                                                        <Grid item xs={field.size} key={key}>
                                                            <ConditionField
                                                                control={control}
                                                                index={key}
                                                                watchName={`hospitalPrivilege[${index}].doesNotExpire`}
                                                                fieldProps={field}
                                                                name={`hospitalPrivilege[${index}].${field.name}`}
                                                                conditionBasis={true}
                                                                operation="equal"
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>

                                                <Typography textAlign="right">
                                                    <Button
                                                        variant="contained"
                                                        startIcon={<DeleteIcon />}
                                                        onClick={() => {
                                                            hospitalPrivilegeRemove(index);
                                                        }}
                                                    >
                                                        Remove Affiliation
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

export default Facility;
