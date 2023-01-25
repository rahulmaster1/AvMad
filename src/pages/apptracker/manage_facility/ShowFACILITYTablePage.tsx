import React from 'react';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Avatar, Box, Container, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import type { NextPage } from 'next';

import AppTrackerClientFacilityPractitionerTable from 'view/components/ApptrackerComponents/AppTrackerClientFacilityPractitionerTable';
import AppTrackerClientFacilityTable from 'view/components/Table/AppTrackerClientFacilityTable';


const ManageClientPage: NextPage = () => {
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
                        <ListItemText primary="Manage Facility"  />
                    </ListItem>
                </List>
                <Divider sx={{ mb: 2 }} />
                <AppTrackerClientFacilityPractitionerTable />
                <AppTrackerClientFacilityTable />

            </Container>
        </Box>
    );
};

export default ManageClientPage;
