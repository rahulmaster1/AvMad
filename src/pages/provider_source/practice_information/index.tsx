import React, { useState } from 'react';

import BadgeIcon from '@mui/icons-material/Badge';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {FaGlobe} from "react-icons/fa";

import {
    Alert,
    Avatar,
    Box,
    Container,
    Icon,
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
import PracticeLocation from 'view/components/ProviderSourceComponents/practiceLocation';
import Unique_circumtaces from 'view/components/ProviderSourceComponents/unique_circumtaces';
import RegistrationIDs from 'view/components/ProviderSourceComponents/RegistrationIDs';
import Credentialing_contact from 'view/components/ProviderSourceComponents/credentialing_contact';
import Covering from 'view/components/ProviderSourceComponents/covering_colleagues';

import useStepperNavigation from 'hooks/useStepperNavigation';


const ProfessionalIDsPage: NextPage = () => {
    const router = useRouter();
    const steps = ['Credentialing Contact', 'Practice Location', 'Covering Colleagues','Unique Circumstances'];
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
                              <FaGlobe/>  
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Practice Information" secondary="Please fill out all required fields" />
                    </ListItem>
                </List>

               
                <Box sx={{ width: '100%', mt: '30px' }}>
                    <Stepper nonLinear activeStep={activeStep} sx={{ width: '100%' }}>
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
                            <Credentialing_contact
                                activeStep={activeStep}
                                handleBack={goToGeneralPage}
                                handleComplete={handleComplete}
                                steps={steps}
                            />
                        ) : activeStep === 1 ? (
                            <PracticeLocation
                                activeStep={activeStep}
                                handleBack={handleBack}
                                handleComplete={handleComplete}
                                steps={steps}
                            />
                            ) : activeStep === 2 ? (
                                <Covering
                                    activeStep={activeStep}
                                    handleBack={handleBack}
                                    handleComplete={handleComplete}
                                    steps={steps}
                                />
                        ) : (
                            <Unique_circumtaces
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
