import React from 'react';

import SchoolIcon from '@mui/icons-material/School';
import {
    Avatar,
    Box,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Step,
    StepButton,
    Stepper,
    Typography
} from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import ProfessionalLiability from 'view/components/ProviderSourceComponents/ProfessionalLiability';

import useStepperNavigation from 'hooks/useStepperNavigation';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

const ProfessionalLiabilityPage: NextPage = () => {
    const router = useRouter();
    const steps = ['AFFILIATION INFORMATION'];
    const { activeStep, progress, completed, handleBack, handleStep, handleComplete } = useStepperNavigation(
        steps,
        'ProfessionalLiability'
    );

    const goToHealthCarePage = () => {
        router.push('/provider_source/healthcare_facility_affiliations');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                background: '#F5F5F5',
                p: '40px'
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    bgcolor: 'background.paper',
                    fontSize: '1rem',
                    pb: '40px',
                    maxWidth: { lg: 1100 }
                }}
            >
                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        p: 0
                    }}
                >
                    <ListItem sx={{ pl: 0 }}>
                        <ListItemAvatar>
                            <Avatar>
                                <SchoolIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Healthcare Facility Affiliations"
                            secondary="Please fill out all required fields"
                        />
                    </ListItem>
                </List>

                <Box sx={{ width: '100%' }}>
                    <LinearProgressWithLabel value={progress} />
                </Box>

                <Box sx={{ width: '100%', mt: '30px' }}>
                    <Stepper nonLinear activeStep={activeStep} sx={{ width: '60%' }}>
                        {steps.map((label, index) => (
                            <Step key={label} completed={completed[index]}>
                                <StepButton color="inherit" onClick={handleStep(index)}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === 0 && (
                            <ProfessionalLiability
                                activeStep={activeStep}
                                handleBack={goToHealthCarePage}
                                handleComplete={handleComplete}
                                steps={steps}
                            />
                        )}
                    </div>
                </Box>
            </Container>
        </Box>
    );
};

export default ProfessionalLiabilityPage;
