import React from 'react';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Avatar, Box, Container, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import type { NextPage } from 'next';

import ShowPROVIDERTableInTablePage from 'view/components/ApptrackerComponents/ShowPROVIDERTableInTablePage';
import ShowPROVIDERTableInTablePage1 from 'view/components/Table/ShowPROVIDERTableInTablePage1';


const ManageProvider: NextPage = () => {
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
                        <ListItemText primary="Manage Provider"  />
                    </ListItem>
                </List>
                <Divider sx={{ mb: 2 }} />
                <ShowPROVIDERTableInTablePage />
                <ShowPROVIDERTableInTablePage1 />

            </Container>
        </Box>
    );
};

export default ManageProvider;
