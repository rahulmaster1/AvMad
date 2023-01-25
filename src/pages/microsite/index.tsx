import React, { useState } from 'react';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Avatar, Box, Container, Divider, List, ListItem,Tabs, ListItemAvatar, ListItemText } from '@mui/material';
import type { NextPage } from 'next';
import general_information from 'pages/provider_source/general_information'
import AppTrackerPractitionerTable from 'view/components/ApptrackerComponents/AppTrackerPractitionerTable';
import ApptrackerOption from 'view/components/ApptrackerComponents/ApptrackerOption/ApptrackerOption';
import microsite_client_docs from 'pages/microsite_client_docs';
import microsite_Attested_Data from 'pages/microsite_Attested_Data';

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import data_retrieval from 'pages/data_retrieval';

import Footer from 'view/components/Login/Footer';



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


const Microsite: NextPage = () => {
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
                        <ListItemText primary="You are now logged in as DWMHAAdmin 
"  />
                    </ListItem>
                </List>
                           


                <Divider sx={{ mb: 2 }} />
                <Table >
      <thead >
        <tr>
          <th>Title</th>
          <th>Link</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>User data retrieval using SSN or TIN	</td>
          <td>
<a href="data_retrieval" style={{ color: 'blue' ,}}>Data Retrieval</a>

</td>

        </tr>
        <tr>
          <td>Links to all the client documents	</td>
          <td><a href="microsite_client_docs" style={{ color: 'blue' ,}}>	Client Docs</a>
</td>
         
        </tr>
        <tr>
          <td>DWIHN Data and View Summary	</td>
          <td><a href="microsite_Attested_Data" style={{ color: 'blue' ,}}>DWIHN Data</a>
</td>
        </tr>
      </tbody>
    </Table>
    <Divider sx={{ mb: 2 }} />


    <a href="https://medversant.connectorcore.com/microsite/dashboard" style={{ color: 'blue' ,}}>Dashbord Microsite</a>   




    <Divider sx={{ mb: 2 }} />
    <a href="https://medversant.connectorcore.com/apptracker/dashboard" style={{ color: 'blue' ,}}>Dashbord App Tracker</a>   

    <Divider sx={{ mb: 2 }} />
    <Button variant="contained" type="submit">
                            Logout
                        </Button>


            </Container>

            <Footer />

        </Box>



    );
};

export default Microsite;
