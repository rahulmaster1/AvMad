import React, { useEffect, useState } from 'react';

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

import Application_checklist from 'view/components/ProviderSourceComponents/application_checklist';
import Attestation_and_signature from 'view/components/ProviderSourceComponents/Attestation_and_signature';

import useStepperNavigation from 'hooks/useStepperNavigation';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    useEffect(() => {});
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

const Attestation: NextPage = () => {
    const steps = ['ATTESTATION AND SIGNATURE'];
    const { activeStep, progress, completed, handleBack, handleStep, handleComplete } = useStepperNavigation(
        steps,
        'GeneralInformation'
    );
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
                                <GroupAddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="ATTESTATION AND SIGNATURE" secondary="Department" />
                    </ListItem>
                </List>

                <Box sx={{ width: '100%' }}>
                    <LinearProgressWithLabel value={progress} />
                </Box>

                <Box sx={{ width: '100%', mt: '30px' }}>
                    <Stepper nonLinear activeStep={activeStep} sx={{ width: '50%' }}>
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
                           <Attestation_and_signature
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

export default Attestation;
