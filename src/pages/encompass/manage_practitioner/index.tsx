import React from 'react';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Avatar, Box, Container, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import type { NextPage } from 'next';

import ManagePractitioner from 'view/components/EncompassComponents/ManagePractitioner';
import ManagePractitionerTable from 'view/components/Table/ManagePractitionerTable';

const ManagePractitionerPage: NextPage = () => {
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
                        <ListItemText primary="Manage Practitioner" secondary="Manage Practitioner Data" />
                    </ListItem>
                </List>
                <Divider sx={{ mb: 2 }} />
                <ManagePractitioner />
                <ManagePractitionerTable />
            </Container>
        </Box>
    );
};

export default ManagePractitionerPage;
