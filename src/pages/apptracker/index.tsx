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

const Encompass = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', background: '#F5F5F5' }}>
            Encompass
            <Footer />
        </Box>
    );
};

export default Encompass;
