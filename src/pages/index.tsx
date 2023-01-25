import * as React from 'react';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { Box, Button, Container, Divider, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import Footer from 'view/components/Login/Footer';

const ProviderSource = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', background: '#F5F5F5' }}>
            <Container maxWidth="md" sx={{ background: '#fff', p: '0px !important', mb: 10, mt: 7 }}>
                <Grid container sx={{ alignItems: 'center' }}>
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
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Link href="/provider_source/general_information">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: '100%',
                                            textAlign: 'left',
                                            lineHeight: 1.5,
                                            textTransform: 'unset',
                                            display: 'block'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontWeight: 400
                                            }}
                                        >
                                            <StickyNote2Icon sx={{ fontSize: '70px' }} />
                                            <div>
                                                <b
                                                    style={{
                                                        fontSize: '1rem',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    Credentialing Application
                                                </b>
                                                <p style={{ margin: '0' }}>
                                                    Complete the credentialing application. Attest to the information
                                                    you entered. Upload your documents.
                                                </p>
                                            </div>
                                        </div>
                                    </Button>
                                </Link>
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '100%',
                                        textAlign: 'left',
                                        lineHeight: 1.5,
                                        textTransform: 'unset',
                                        display: 'block'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontWeight: 400
                                        }}
                                    >
                                        <ManageSearchIcon sx={{ fontSize: '70px' }} />
                                        <div>
                                            <b style={{ fontSize: '1rem', textTransform: 'uppercase' }}>View Summary</b>
                                            <p style={{ margin: '0' }}>
                                                View the summary of the information you entered.
                                            </p>
                                        </div>
                                    </div>
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: '100%',
                                        textAlign: 'left',
                                        lineHeight: 1.5,
                                        textTransform: 'unset',
                                        display: 'block'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontWeight: 400
                                        }}
                                    >
                                        <AppRegistrationIcon sx={{ fontSize: '70px' }} />
                                        <div>
                                            <b style={{ fontSize: '1rem', textTransform: 'uppercase' }}>
                                                Re-attest Application
                                            </b>
                                            <p style={{ margin: '0' }}>
                                                Reconfirm the information you submitted. Update your attestation.
                                            </p>
                                        </div>
                                    </div>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Script src="chat.js" />
            <Footer />
        </Box>
    );
};

export default ProviderSource;
