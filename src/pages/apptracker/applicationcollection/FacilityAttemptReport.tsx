import React, { useState } from 'react';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Avatar, Box, Container, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import type { NextPage } from 'next';
import general_information from 'pages/provider_source/general_information'
import AppTrackerPractitionerTable from 'view/components/ApptrackerComponents/AppTrackerPractitionerTable';
import AppTrackerTable from 'view/components/Table/AppTrackerTable';
import ApptrackerOption from 'view/components/ApptrackerComponents/ApptrackerOption/ApptrackerOption';






const options = [
    {
      label: "general_information",
      href: '/client_portal/reports',
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];

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
                    <ListItem sx={{ pl: 0 }}>
                        <ListItemAvatar>
                            <Avatar>
                                <GroupAddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Application Collection"  />
                    </ListItem>
                </List>
                <ApptrackerOption/>   
                           


                <Divider sx={{ mb: 2 }} />
                
                <AppTrackerPractitionerTable />
                <AppTrackerTable />
                <div >
      <select onChange={selectChange} >
        <option selected disabled>
          Choose one
        </option>
        <option value="bl/client_portal/reports">general_information</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="kindacode.com">Kindacode.com</option>
      </select>
      <h2 >{selectedOption}</h2>
    </div>
            </Container>
        </Box>
    );
};

export default ManagePractitionerPage;
