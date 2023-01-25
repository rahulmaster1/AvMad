import * as React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Box, Button, Container, Divider, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';

import Footer from 'view/components/Login/Footer';
import LoginHeader from 'view/components/Login/Header';
import LoginInput from 'view/components/Login/LoginInput';
import SignUp from 'view/components/Login/Signup';

const Home: NextPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', background: '#F5F5F5' }}>
            <LoginHeader />
            <Container maxWidth="md" sx={{ mt: 15, mb: 10, background: '#fff', p: '0px !important' }}>
                <Grid container sx={{ alignItems: 'center', mb: '-4px' }}>
                    <Grid item xs={4}>
                        <Image src="/images/login_image.png" className="App-logo" alt="logo" width={315} height={600} />
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            pr: 10,
                            pl: 10,
                            width: '100%'
                        }}
                    >
                        <div>
                            <Image
                                src="/images/plm_logo.png"
                                className="App-logo"
                                alt="logo"
                                width={149}
                                height={110}
                            />
                        </div>
                        <LoginInput />
                        <div
                            style={{
                                width: '100%'
                                // display: 'flex',
                                // flexDirection: 'column',
                            }}
                        >
                            <Divider sx={{ mb: '20px' }}>OR</Divider>
                            {/* <Button
                variant='outlined'
                sx={{
                  maxWidth: '285px',
                  m: '5px',
                  alignSelf: 'center',
                }}
                startIcon={<AccountCircleIcon />}
              >
                SIGN UP HERE AS ADMIN
              </Button>
              <Button
                variant='outlined'
                sx={{
                  maxWidth: '285px',
                  m: '5px',
                  alignSelf: 'center',
                }}
                startIcon={<ContactPageIcon />}
              >
                SIGN UP HERE AS PROVIDER
              </Button> */}
                        </div>
                        <SignUp />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default Home;
