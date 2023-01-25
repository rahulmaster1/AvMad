import React, { useEffect } from 'react';

import CustomInput from '../CustomInput';
import ConditionField from '../CustomInput/ConditionField';
import NestedFieldArrayMultiple from '../CustomInput/NestedFieldArrayMultiple';
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

import caseInvolvementList from 'form-fields/general-information/form-list/caseInvolvementList';
import claimStatusList from 'form-fields/general-information/form-list/claimStatusList';
import methodOfResolutionList from 'form-fields/general-information/form-list/methodOfResolutionList';
import primaryOrCoDefendantList from 'form-fields/general-information/form-list/primaryOrCoDefendantList';
import privelegeStatusList from 'form-fields/general-information/form-list/privelegeStatusList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';
import typeOfCoverageList from 'form-fields/general-information/form-list/typeOfCoverageList';
import typeOfPolicyList from 'form-fields/general-information/form-list/typeOfPolicyList';
import EmployementMalpracticeClaim from 'form-fields/history/EmployementMalpracticeClaim';
import EmployementSelfInsuredFalse from 'form-fields/history/EmployementSelfInsuredFalse';
import SelfInsuredTrueFields from 'form-fields/professional-liability/SelfInsuredTrue';
import professionalLiabilitySoloInputField from 'form-fields/professional-liability/professionalLiabilitySoloInputField';
import EmployemetLiabilitySoloInputField from 'form-fields/history/EmployemetLiabilitySoloInputField';
const ProfessionalLiabilityMap = {
    stateOfPracticeList: stateOfPracticeList,
    privelegeStatusList: privelegeStatusList,
    methodOfResolutionList: methodOfResolutionList,
    claimStatusList: claimStatusList,
    caseInvolvementList: caseInvolvementList,
    primaryOrCoDefendantList: primaryOrCoDefendantList,
    typeOfPolicyList: typeOfPolicyList,
    typeOfCoverageList: typeOfCoverageList
};

const ProfessionalLiability: NextPage<{
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
            sovereignDocumentFlag: false,
            liabilityCoverageFlag: false,
            explanation: '',
            policyData: [
                {
                    selfInsuredFlag: false,
                    selfInsuredDataTrue: {
                        policyName: '',
                        policyNumber: '',
                        carrierName: '',
                        emailAddress: '',
                        telephoneNumber: '',
                        ext: '',
                        faxNumber: '',
                        amountOfCoverage: '',
                        amountOfAggregate: '',
                        amountOfCoverageFlag: false,
                        amountOfAggregateFlag: false,
                        originalEffectiveDate: null,
                        effectiveDate: null,
                        expirationDate: null,
                        expirationDateFlag: false,
                        malpracticeClaimFlag: false,
                        malpracticeClaimData: [
                            {
                                dateOfOccurrence: null,
                                dateClaim: null,
                                statusOfClaim: null,
                                settlement: '',
                                settlementAttribute: '',
                                methodOfResolution: null,
                                dismissalDate: null,
                                descriptionOfAllegations: '',
                                primaryOrCoDefendant: null,
                                numberOfDefendants: '',
                                involvementCase: null,
                                specificResponsibility: '',
                                descriptionOfInjury: '',
                                subsequentEvents: '',
                                resultInDeathFlag: false,
                                caseIncludedFlag: false
                            }
                        ]
                    },
                    selfInsuredDataFalse: {
                        carrierLocation: null,
                        carrierName: '',
                        addressLine1: '',
                        addressLine2: '',
                        city: '',
                        zipCode: '',
                        telephoneNumber: '',
                        ext: '',
                        faxNumber: '',
                        emailAddress: '',
                        typeOfPolicy: null,
                        typeOfCoverage: null,
                        policyHolderName: '',
                        policyNumber: '',
                        tailCoverageFlag: false,
                        procedureCoverageFlag: false,
                        amountOfCoverage: '',
                        amountOfAggregate: '',
                        amountOfCoverageFlag: false,
                        amountOfAggregateFlag: false,
                        originalEffectiveDate: null,
                        effectiveDate: null,
                        expirationDate: null,
                        expirationDateFlag: false,
                        malpracticeClaimFlag: false,
                        malpracticeClaimData: [
                            {
                                dateOfOccurrence: null,
                                dateClaim: null,
                                statusOfClaim: null,
                                settlement: '',
                                settlementAttribute: '',
                                methodOfResolution: null,
                                dismissalDate: null,
                                descriptionOfAllegations: '',
                                primaryOrCoDefendant: null,
                                numberOfDefendants: '',
                                involvementCase: null,
                                specificResponsibility: '',
                                descriptionOfInjury: '',
                                subsequentEvents: '',
                                resultInDeathFlag: false,
                                caseIncludedFlag: false
                            }
                        ]
                    }
                }
            ]
        }
    });

    const {
        fields: policyDataFields,
        remove: policyDataRemove,
        append: policyDataInsert
    } = useFieldArray({
        control,
        name: 'policyData'
    });

    const watchLiabilityCoverageFlag = watch('liabilityCoverageFlag');

    const onSubmit = (data: any) => {
        console.log(data);
        handleComplete();
        localforage.setItem('ProfessionalLiabilityData', data);
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
        localforage.getItem('ProfessionalLiabilityData').then((res: any) => {
            console.log(res);
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('ProfessionalLiabilityData', getValues());
        console.log('Form updated');
    }, 5000);

    const malpracticeClaimDefaultValue = {
        dateOfOccurrence: null,
        dateClaim: null,
        statusOfClaim: null,
        settlement: '',
        settlementAttribute: '',
        methodOfResolution: null,
        dismissalDate: null,
        descriptionOfAllegations: '',
        primaryOrCoDefendant: null,
        numberOfDefendants: '',
        involvementCase: null,
        specificResponsibility: '',
        descriptionOfInjury: '',
        subsequentEvents: '',
        resultInDeathFlag: false,
        caseIncludedFlag: false
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
                                </AccordionSummary>
                            </Tooltip>
                            <AccordionDetails>
                                <Alert severity="info">
                                    <p>
                                    Minimum of five year of healthcare relevant work history is required. If you have practiced fewer than five years, please provide full relevant work history from the time of initial licensure.
      </p>
                                 </Alert>
                                <Grid item xs={12}>
                                    <CustomInput
                                        control={control}
                                        fieldProps={EmployemetLiabilitySoloInputField.liabilityCoverageFlagField}
                                        name={`${EmployemetLiabilitySoloInputField.liabilityCoverageFlagField.name}`}
                                    />
                                    <ConditionField
                                        control={control}
                                        watchName={`liabilityCoverageFlag`}
                                        fieldProps={professionalLiabilitySoloInputField.explanationField}
                                        name={professionalLiabilitySoloInputField.explanationField.name}
                                        conditionBasis={false}
                                        operation="equal"
                                    />
                                </Grid>
                                {watchLiabilityCoverageFlag ? (
                                    <>
                                        <Typography textAlign="right" sx={{ mt: '10px', mb: '20px' }}>
                                        </Typography>
                                    </>
                                ) : (
                                    ''
                                )}
                                {watchLiabilityCoverageFlag &&
                                    policyDataFields.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                
                                                {
                                                    // @ts-expect-error
                                                    // prettier-ignore
                                                    watch(`policyData[${index}].selfInsuredFlag`) ?
                                                        <>
                                                            <Grid container spacing={2} sx={{ mt: 1 }}>
                                                                {SelfInsuredTrueFields.map((field) => (
                                                                    <Grid item xs={field.size} key={field.name}>
                                                                        <CustomInput
                                                                            control={control}
                                                                            fieldProps={field}
                                                                            name={`policyData[${index}].selfInsuredDataTrue.${field.name}`}
                                                                        />
                                                                    </Grid>
                                                                ))}
                                                            </Grid>
                                                            {
                                                                // @ts-expect-error
                                                                // prettier-ignore
                                                                watch(`policyData[${index}].selfInsuredDataTrue.malpracticeClaimFlag`) &&
                                                                <NestedFieldArrayMultiple control={control} fieldProps={EmployementMalpracticeClaim} title='Claim'
                                                                    fieldArrayName={`policyData[${index}].selfInsuredDataTrue.malpracticeClaimData`} 
                                                                    options={ProfessionalLiabilityMap} defaultValue={malpracticeClaimDefaultValue} />
                                                            }
                                                        </>
                                                        : <>
                                                            <Grid container spacing={2} sx={{ mt: 1 }}>
                                                                {EmployementSelfInsuredFalse.map((field) => (
                                                                    <Grid item xs={field.size} key={field.name}>
                                                                        <CustomInput
                                                                            control={control}
                                                                            fieldProps={field}
                                                                            name={`policyData[${index}].selfInsuredDataFalse.${field.name}`}
                                                                            options={
                                                                                ProfessionalLiabilityMap[
                                                                                field.options as keyof typeof ProfessionalLiabilityMap
                                                                                ]
                                                                            } />
                                                                    </Grid>
                                                                ))}
                                                            </Grid>
                                                            {
                                                                // @ts-expect-error
                                                                // prettier-ignore
                                                                watch(`policyData[${index}].selfInsuredDataFalse.malpracticeClaimFlag`) &&
                                                                <NestedFieldArrayMultiple control={control} fieldProps={EmployementMalpracticeClaim} 
                                                                title='Collaboration                                                                 '
                                                                    fieldArrayName={`policyData[${index}].selfInsuredDataFalse.malpracticeClaimData`}
                                                                     options={ProfessionalLiabilityMap} defaultValue={malpracticeClaimDefaultValue} />
                                                            }
                                                        </>
                                                }

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

export default ProfessionalLiability;
