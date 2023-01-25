import React, { useState } from 'react';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Avatar, Box, Container, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import type { NextPage } from 'next';
import general_information from 'pages/provider_source/general_information'
import AppProviderPractitionerTable from 'view/components/ApptrackerComponents/AppProviderPractitionerTable';
import AppTrackerTable from 'view/components/Table/AppTrackerTable';
import Provider_option from 'view/components/ApptrackerComponents/Provider_option/Provider_option';
import Provider_option1 from 'view/components/ApptrackerComponents/Provider_option/Provider_option1';
import Provider_option2 from 'view/components/ApptrackerComponents/Provider_option/Provider_option2';







const ManagePractitionerPage: NextPage = () => {
    const [selectedOption, setSelectedOption] = useState<String>();
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
       /* setSelectedOption(value);*/
       window.location.href='value';
       
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
                    <ListItem sx={{ gap: 2 }}>
                        <ListItemAvatar>
                        <Provider_option/>   

                        </ListItemAvatar>

                        <ListItemAvatar>
                        <Provider_option1/>   

                        </ListItemAvatar>

                        
                        <ListItemAvatar>
                        <Provider_option2/>   

                        </ListItemAvatar>
                    </ListItem>
                </List>
                           
     

    


                <Divider sx={{ mb: 8 }} />
                
                <AppProviderPractitionerTable />
                <AppTrackerTable />
               
            </Container>
        </Box>
    );
};

export default ManagePractitionerPage;
