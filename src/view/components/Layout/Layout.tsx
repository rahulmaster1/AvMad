import React, { FC, ReactNode, useEffect, useState } from 'react';

import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import CloudCircleSharpIcon from '@mui/icons-material/CloudCircleSharp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HandymanSharpIcon from '@mui/icons-material/HandymanSharp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoveToInboxSharpIcon from '@mui/icons-material/MoveToInboxSharp';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import ViewModuleSharpIcon from '@mui/icons-material/ViewModuleSharp';
import { AppBar, Button, Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

const navItems = ['Home', 'My Account', 'Help'];

function ScrollTop(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
            '#back-to-top-anchor'
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center'
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                {children}
            </Box>
        </Fade>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

const Layout: FC<{ props?: Props; children: ReactNode }> = ({ props, children }) => {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [activeRouter, setActiveRouter] = useState<'providerRoute' | 'encompassRoute' | 'client_portal' | 'vrc' |'apptracker' |'microsite'>(
        'providerRoute'
    );
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setActiveRouter(
            router.pathname.startsWith('/encompass/')
                ? 'encompassRoute'
                : router.pathname === '/client_portal/vrc'
                    ? 'vrc'
                    : router.pathname.startsWith('/client_portal/')
                        ? 'client_portal' : 'apptracker' );
    }, [router.pathname]);
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar elevation={0}>
                <Toolbar variant="dense" sx={{ minHeight: 'unset' }}>
                    <Container maxWidth="xl" sx={{ display: 'flex' }}>
                        <Tooltip title="PLM Apps">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 1 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <DashboardIcon />
                            </IconButton>
                        </Tooltip>
                        <Typography
                            variant="h6"
                            color="inherit"
                            component="div"
                            sx={{ display: 'flex', alignItems: 'end' }}
                        >
                            PLM
                        </Typography>
                    </Container>
                    <React.Fragment>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    maxWidth: '400px',
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1
                                    }
                                }
                            }}
                            transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        >
                            <Grid container spacing={0} sx={{ m: '-8px 0' }}>
                                <Grid item xs={4} sx={{ border: '1px solid #f1f1f1' }}>
                                    <Link href="/provider_source">
                                        <Button
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                m: '0 auto',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        >
                                            <MoveToInboxSharpIcon sx={{ fontSize: '50px' }} />
                                            PROVIDER APP
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={4} sx={{ border: '1px solid #f1f1f1' }}>
                                    <Link href="/encompass/client_home">
                                        <Button
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                m: '0 auto',
                                                p: '20px',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        >
                                            <CloudCircleSharpIcon sx={{ fontSize: '50px' }} />
                                            ENCOMPASS
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={4} sx={{ border: '1px solid #f1f1f1' }}>
                                    <Link href="/client_portal/reports">
                                        <Button
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                m: '0 auto',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        >
                                            <AdminPanelSettingsSharpIcon sx={{ fontSize: '50px' }} />
                                            CLIENT PORTAL
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={4} sx={{ border: '1px solid #f1f1f1' }}>
                                    <Link href="/client_portal/vrc">
                                        <Button
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                m: '0 auto',
                                                p: '20px',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        >
                                            <SpeakerNotesOutlinedIcon sx={{ fontSize: '50px' }} />
                                            VRC
                                        </Button>
                                    </Link>
                                </Grid>

                                <Grid item xs={4} sx={{ border: '1px solid #f1f1f1' }}>
                                <Link href="/apptracker/provider">

                                    <Button
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            m: '0 auto',
                                            p: '20px',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    >
                                        <TrackChangesOutlinedIcon sx={{ fontSize: '50px' }} />
                                        App Tracker
                                    </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={4} sx={{ border: '1px solid #f1f1f1' }}>
                                <Link href="/microsite">

                                    <Button
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            m: '0 auto',
                                            p: '20px',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    >
                                        <ViewModuleSharpIcon sx={{ fontSize: '50px' }} />
                                        Microsite
                                    </Button>
                                    </Link>
                                </Grid>
                                {/* <Grid item xs={4} sx={{ border: '1px solid #f1f1f1' }}>
                                    <Button
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            m: '0 auto',
                                            p: '20px',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    >
                                        <HandymanSharpIcon sx={{ fontSize: '50px' }} />
                                        Create Tool
                                    </Button>
                                </Grid> */}
                                <Grid item xs={4} sx={{ border: '1px solid #f1f1f1' }}></Grid>
                                <Grid item xs={4} sx={{ border: '1px solid #f1f1f1' }}></Grid>
                            </Grid>
                        </Menu>
                    </React.Fragment>
                </Toolbar>
                <Toolbar sx={{ background: '#fff', color: '#000', boxShadow: 'unset' }}>
                    <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
                        >
                            {activeRouter === 'encompassRoute' ? (
                                <Image
                                    src="/images/encompass_logo.png"
                                    className="App-logo"
                                    alt="logo"
                                    width={185}
                                    height={50}
                                />
                            ) : activeRouter === 'client_portal' ? (
                                <Image
                                    src="/images/client_portal_logo.png"
                                    className="App-logo"
                                    alt="logo"
                                    width={197}
                                    height={50}
                                />
                            ) : activeRouter === 'vrc' ? (
                                <Image
                                    src="/images/vrc_logo.png"
                                    className="App-logo"
                                    alt="logo"
                                    width={170}
                                    height={50}
                                />
                            )                           
                            : activeRouter === 'apptracker' ? (
                                <Image
                                src="/images/provider_source_logo.png"
                                className="App-logo"
                                    alt="logo"
                                    width={170}
                                    height={50}
                                />
                            )                              
                            : (
                                <Image
                                src="/images/provider_source_logo.png"
                                className="App-logo"
                                    alt="logo"
                                    width={177}
                                    height={33}
                                />
                            )
                            }
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#000' }}>
                                    {item}
                                </Button>
                            ))}
                            <Link href="/login">
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => localStorage.setItem('isLoggedIn', 'false')}
                                    type="submit"
                                >
                                    Logout
                                </Button>
                            </Link>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <Box sx={{ my: 5 }}>{children}</Box>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
};

export default Layout;