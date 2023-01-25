import React, { useState } from 'react';

import BadgeIcon from '@mui/icons-material/Badge';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {
    Alert,
    Avatar,
    Box,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Snackbar,
    Step,
    StepButton,
    Stepper,
    Typography
} from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Licensure from 'view/components/ProviderSourceComponents/Licensure';
import OtherIdAndCertification from 'view/components/ProviderSourceComponents/OtherIdAndCertification';
import PersonalInformation from 'view/components/ProviderSourceComponents/PersonalInformation';
import RegistrationIDs from 'view/components/ProviderSourceComponents/RegistrationIDs';

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

const ProfessionalIDsPage: NextPage = () => {
    const router = useRouter();
    const steps = ['REGISTRATION IDS', 'LICENSURE', 'OTHER IDS AND CERTIFICATIONS'];
    const { activeStep, progress, completed, handleBack, handleStep, handleComplete } = useStepperNavigation(
        steps,
        'ProfessionalIDs'
    );

    const goToGeneralPage = () => {
        router.push('/provider_source/general_information');
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
                                <BadgeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Professional IDs" secondary="Please fill out all required fields" />
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
                        {activeStep === 0 ? (
                            <RegistrationIDs
                                activeStep={activeStep}
                                handleBack={goToGeneralPage}
                                handleComplete={handleComplete}
                                steps={steps}
                            />
                        ) : activeStep === 1 ? (
                            <Licensure
                                activeStep={activeStep}
                                handleBack={handleBack}
                                handleComplete={handleComplete}
                                steps={steps}
                            />
                        ) : (
                            <OtherIdAndCertification
                                activeStep={activeStep}
                                handleBack={handleBack}
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

export default ProfessionalIDsPage;
