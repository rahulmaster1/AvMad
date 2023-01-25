import { Container, Divider, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';

const footerNavigation = ['CONTACT US', 'TERMS OF SERVICE', 'SUPPORT', 'PRIVACY POLICY'];

export default function Footer() {
    return (
        <Container maxWidth="lg">
            <Divider />
            <Grid container spacing={4} justifyContent="center">
                {footerNavigation.map((title, index) => (
                    <Grid item sx={{ margin: '20px' }} key={title}>
                        <Link component="button" underline="hover">
                            {title}
                        </Link>
                        <span style={{ color: '#ddd', paddingLeft: '50px' }}>
                            {footerNavigation.length - 1 !== index ? '|' : ''}
                        </span>
                    </Grid>
                ))}
            </Grid>
            <Typography textAlign="center" sx={{ p: '10px' }}>
                Copyright © 2009-2021 PLM Technologies, LLC. All Rights Reserved
            </Typography>
            <Typography textAlign="center" sx={{ p: '10px' }}>
                <Image src="/images/plm_logo.png" className="App-logo" alt="logo" width={95} height={70} />
            </Typography>
        </Container>
    );
}
