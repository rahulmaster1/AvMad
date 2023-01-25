import * as React from 'react';

import { Alert, Box, Button, ButtonGroup, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Footer from 'view/components/Login/Footer';
import LoginHeader from 'view/components/Login/Header';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    padding: theme.spacing(1)
}));

const Home: NextPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                background: '#F5F5F5'
            }}
        >
            <LoginHeader />
            <Container
                maxWidth="md"
                sx={{
                    mt: 15,
                    mb: 10,
                    p: '0px !important',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#F5F5F5',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Image
                    src="/images/provider_source_logo.png"
                    className="App-logo"
                    alt="logo"
                    width={563}
                    height={105}
                />
                <Alert severity="info" sx={{ m: '20px 0', alignSelf: 'baseline' }}>
                    Please click on your affiliated organization to get started with the application.
                </Alert>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ mb: '90px' }}>
                    <Button
                        target="_blank"
                        href="https://www.onehealthport.com/credentialing-overview"
                        sx={{
                            backgroundColor: '#eee !important',
                            borderRight: '1px solid rgb(6, 79, 168)',
                            borderRadius: 'unset'
                        }}
                    >
                        <Image src="/images/ohp_icon.png" className="App-logo" alt="logo" width={175} height={25} />
                    </Button>
                    <Link href="/registration">
                        <Button sx={{ backgroundColor: '#eee !important' }}>
                            <Image
                                src="/images/tivity_icon.png"
                                className="App-logo"
                                alt="logo"
                                width={103}
                                height={49}
                            />
                        </Button>
                    </Link>
                    <Button sx={{ backgroundColor: '#eee !important' }}>
                        <Image src="/images/uc_icon.png" className="App-logo" alt="logo" width={268} height={18} />
                    </Button>
                    <Button sx={{ backgroundColor: '#eee !important' }}>
                        <Image src="/images/dwihn_icon.png" className="App-logo" alt="logo" width={88} height={65} />
                    </Button>
                    <Button sx={{ backgroundColor: '#eee !important' }}>
                        <Image src="/images/sdsu_icon.png" className="App-logo" alt="logo" width={99} height={38} />
                    </Button>
                </ButtonGroup>
            </Container>
            <Footer />
        </Box>
    );
};

export default Home;
