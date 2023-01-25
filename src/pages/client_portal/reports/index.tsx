import React from 'react';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Avatar, Box, Container, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import type { NextPage } from 'next';

import ClientPortalReport from 'view/components/ClientPortalComponents/ClientPortalReport';
import ReportsTable from 'view/components/ClientPortalComponents/Table/ReportsTable';

const ReportsPage: NextPage = () => {
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
                        <ListItemText primary="Reports Page" secondary="Manage Reports" />
                    </ListItem>
                </List>
                <Divider />
                <ClientPortalReport />
                <ReportsTable />
            </Container>
        </Box>
    );
};

export default ReportsPage;
