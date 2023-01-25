import React, { useEffect, useState } from 'react';

import CustomInput from '../CustomInput';
import ConditionField from '../CustomInput/ConditionField';
import CustomInputField from '../CustomInputField';
import AddIcon from '@mui/icons-material/Add';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import localforage from 'localforage';
import { debounce } from 'lodash';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';

import DisclosureCriminalHistoryFields from 'form-fields/disclosure/disclosureCriminalHistory';
import DisclosureDeaOrCdsFields from 'form-fields/disclosure/disclosureDeaOrCds';
import DisclosureEducationAndTrainingFields from 'form-fields/disclosure/disclosureEducationAndTraining';
import DisclosureHospitalPrivilegeFields from 'form-fields/disclosure/disclosureHospitalPrivilege';
import DisclosureLicensureFields from 'form-fields/disclosure/disclosureLicensure';
import DisclosureMalpracticeClaimFields from 'form-fields/disclosure/disclosureMalpracticeClaim';
import DisclosureMedicaidMedicareFields from 'form-fields/disclosure/disclosureMedicaidMedicare';
import DisclosureOtherSanctionsFields from 'form-fields/disclosure/disclosureOtherSanctions';
import DisclosurePerformJobFields from 'form-fields/disclosure/disclosurePerformJob';
import DisclosureProfessionalLiabilityFields from 'form-fields/disclosure/disclosureProfessionalLiability';
import educationTypeList from 'form-fields/general-information/form-list/educationTypeList';
import graduateTypeList from 'form-fields/general-information/form-list/graduateTypeList';
import schoolLocationList from 'form-fields/general-information/form-list/schoolLocationList';
import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';

const Disclosure: NextPage<{
    activeStep: number;
    handleBack: () => void;
    handleComplete: () => void;
    steps: string[];
}> = ({ activeStep, handleBack, steps, handleComplete }) => {
    const [expanded, setExpanded] = React.useState<{
        panel1: boolean;
        panel2: boolean;
        panel3: boolean;
        panel4: boolean;
        panel5: boolean;
        panel6: boolean;
        panel7: boolean;
        panel8: boolean;
        panel9: boolean;
        panel10: boolean;
    }>({
        panel1: true,
        panel2: true,
        panel3: true,
        panel4: true,
        panel5: true,
        panel6: true,
        panel7: true,
        panel8: true,
        panel9: true,
        panel10: true
    });

    const handleChangePanel = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        panel === 'panel1'
            ? setExpanded({ ...expanded, panel1: isExpanded })
            : panel === 'panel2'
            ? setExpanded({ ...expanded, panel2: isExpanded })
            : panel === 'panel3'
            ? setExpanded({ ...expanded, panel3: isExpanded })
            : panel === 'panel4'
            ? setExpanded({ ...expanded, panel4: isExpanded })
            : panel === 'panel5'
            ? setExpanded({ ...expanded, panel5: isExpanded })
            : panel === 'panel6'
            ? setExpanded({ ...expanded, panel6: isExpanded })
            : panel === 'panel7'
            ? setExpanded({ ...expanded, panel7: isExpanded })
            : panel === 'panel8'
            ? setExpanded({ ...expanded, panel8: isExpanded })
            : panel === 'panel9'
            ? setExpanded({ ...expanded, panel9: isExpanded })
            : setExpanded({ ...expanded, panel3: isExpanded });
    };

    const { handleSubmit, control, watch, setValue, reset, getValues } = useForm({
        defaultValues: {
            licensureQuestion1: false,
            licensureExplanation1: '',
            licensureQuestion2: false,
            licensureExplanation2: '',
            licensureQuestion3: false,
            licensureExplanation3: '',
            licensureQuestion4: false,
            licensureExplanation4: '',
            licensureQuestion5: false,
            licensureExplanation5: '',
            licensureQuestion6: false,
            licensureExplanation6: '',
            licensureQuestion7: false,
            licensureExplanation7: '',
            licensureQuestion8: false,
            licensureExplanation8: '',
            licensureQuestion9: false,
            licensureExplanation9: '',
            licensureQuestion10: false,
            licensureExplanation10: '',
            licensureQuestion11: false,
            licensureExplanation11: '',
            licensureQuestion12: false,
            licensureExplanation12: '',
            licensureQuestion13: false,
            licensureExplanation13: '',
            licensureQuestion14: false,
            licensureExplanation14: '',
            licensureQuestion15: false,
            licensureExplanation15: '',
            licensureQuestion16: false,
            licensureExplanation16: '',
            licensureQuestion17: false,
            licensureExplanation17: '',
            licensureQuestion18: false,
            licensureExplanation18: '',
            licensureQuestion19: false,
            licensureExplanation19: '',
            licensureQuestion20: false,
            licensureExplanation20: '',
            licensureQuestion21: false,
            licensureExplanation21: '',
            licensureQuestion22: false,
            licensureExplanation22: '',
            licensureQuestion23: false,
            licensureExplanation23: '',
            licensureQuestion24: false,
            licensureExplanation24: '',
            licensureQuestion25: false,
            licensureExplanation25: '',
            licensureQuestion26: false,
            licensureExplanation26: ''
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
        handleComplete();
        localforage.setItem('disclosureData', data);

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
        localforage.getItem('disclosureData').then((res: any) => {
            console.log(res);
            res && reset(res);
        });
    }, []);

    const autoSave = debounce(() => {
        localforage.setItem('disclosureData', getValues());
        console.log('Form updated');
    }, 5000);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onSelect={() => autoSave()}>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Accordion expanded={expanded.panel1} onChange={handleChangePanel('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Licensure</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosureLicensureFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${DisclosureLicensureFields[index - 1].name}`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel2} onChange={handleChangePanel('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Hospital Privileges and Other Affiliations</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosureHospitalPrivilegeFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${DisclosureHospitalPrivilegeFields[index - 1].name}`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel3} onChange={handleChangePanel('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Education, Training and Board Certification</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosureEducationAndTrainingFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${
                                                        DisclosureEducationAndTrainingFields[index - 1].name
                                                    }`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel4} onChange={handleChangePanel('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>DEA or CDS</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosureDeaOrCdsFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${DisclosureDeaOrCdsFields[index - 1].name}`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel5} onChange={handleChangePanel('panel5')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Medicare, Medicaid or Other Governmental Program Participation</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosureMedicaidMedicareFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${DisclosureMedicaidMedicareFields[index - 1].name}`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel6} onChange={handleChangePanel('panel6')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Other Sanctions or Investigations</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosureOtherSanctionsFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${DisclosureOtherSanctionsFields[index - 1].name}`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel7} onChange={handleChangePanel('panel7')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Professional Liability Insurance Information and Claims History</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosureProfessionalLiabilityFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${
                                                        DisclosureProfessionalLiabilityFields[index - 1].name
                                                    }`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel8} onChange={handleChangePanel('panel8')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Malpractice Claims History</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosureMalpracticeClaimFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${DisclosureMalpracticeClaimFields[index - 1].name}`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel9} onChange={handleChangePanel('panel9')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Criminal/Civil History</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosureCriminalHistoryFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${DisclosureCriminalHistoryFields[index - 1].name}`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded.panel10} onChange={handleChangePanel('panel10')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Ability To Perform Job</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Alert severity="warning">
                                    Note: A criminal record will not necessarily be a bar to acceptance. Decisions will
                                    be made by each health plan or credentialing organization based upon all the
                                    relevant circumstances, including the nature of the crime.{' '}
                                </Alert>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {DisclosurePerformJobFields.map((field, index) =>
                                        index % 2 ? (
                                            <Grid item xs={field.size} key={field.name}>
                                                <ConditionField
                                                    control={control}
                                                    index={index}
                                                    watchName={`${DisclosurePerformJobFields[index - 1].name}`}
                                                    fieldProps={field}
                                                    name={field.name}
                                                    conditionBasis={true}
                                                    operation="equal"
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={field.size} key={field.name}>
                                                <CustomInput control={control} fieldProps={field} name={field.name} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
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

export default Disclosure;
