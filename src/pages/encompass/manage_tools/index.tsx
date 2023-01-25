import React from 'react';

import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';

const ManageToolsPage: NextPage = () => {
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
                This page is currently disabled.
            </Container>
        </Box>
    );
};

export default ManageToolsPage;
