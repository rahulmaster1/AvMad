import React, { FC, ReactNode } from 'react';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import { Button, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';

import { LayoutPages, PageConfig } from 'config/pagesConfig';

import {
    AppBar,
    CustomToolbar,
    Drawer,
    DrawerHeader,
    Search,
    SearchIconWrapper,
    StyledInputBase
} from './Layout.style';

const navigationIcon = [
    { name: 'PeopleAltOutlinedIcon', value: <PeopleAltOutlinedIcon /> },
    { name: 'FactCheckOutlinedIcon', value: <FactCheckOutlinedIcon /> },
    { name: 'WebOutlinedIcon', value: <WebOutlinedIcon /> },
    { name: 'AccessTimeOutlinedIcon', value: <AccessTimeOutlinedIcon /> },
    { name: 'ChangeCircleOutlinedIcon', value: <ChangeCircleOutlinedIcon /> },
    { name: 'FolderCopyOutlinedIcon', value: <FolderCopyOutlinedIcon /> },
    { name: 'ConstructionOutlinedIcon', value: <ConstructionOutlinedIcon /> },
    { name: 'AssessmentOutlinedIcon', value: <AssessmentOutlinedIcon /> },
    { name: 'QuestionAnswerOutlinedIcon', value: <QuestionAnswerOutlinedIcon /> },
    {
        name: 'SettingsApplicationsOutlinedIcon',
        value: <SettingsApplicationsOutlinedIcon />
    }
];

const getIcon = (icon: string) => {
    const result = navigationIcon.find((el) => el.name === icon);
    return result !== undefined ? result.value : '?';
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        // setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <CustomToolbar>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Search>
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
                </CustomToolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Stack direction="column" justifyContent="space-between" height="100%">
                    <div>
                        <DrawerHeader>
                            {open ? (
                                <>
                                    <Link href="/">
                                        <a>
                                            <Image
                                                src="/images/logo.jpg"
                                                className="App-logo"
                                                alt="logo"
                                                width={191}
                                                height={52}
                                            />
                                        </a>
                                    </Link>

                                    <IconButton onClick={handleDrawerClose} sx={{ p: 0 }}>
                                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                    </IconButton>
                                </>
                            ) : (
                                <Tooltip title="Sidebar Disabled" placement="right">
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={handleDrawerOpen}
                                        edge="start"
                                        sx={{ p: 0, margin: `0 auto` }}
                                    >
                                        <Image
                                            src="/images/logo_icon.png"
                                            className="App-logo"
                                            alt="logo"
                                            width={50}
                                            height={47}
                                        />
                                    </IconButton>
                                </Tooltip>
                            )}
                        </DrawerHeader>
                        <Divider />
                        <List>
                            {LayoutPages.map(
                                ({ navigationLocation, icon, title, href }: PageConfig, index: number) =>
                                    navigationLocation === 'top' && (
                                        <Link href={href} key={title}>
                                            <ListItem disablePadding sx={{ display: 'block' }}>
                                                <ListItemButton
                                                    sx={{
                                                        minHeight: 48,
                                                        justifyContent: open ? 'initial' : 'center',
                                                        px: 2.5
                                                    }}
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            minWidth: 0,
                                                            mr: open ? 3 : 'auto',
                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        {getIcon(icon)}
                                                    </ListItemIcon>
                                                    <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    )
                            )}
                        </List>
                    </div>
                    <List>
                        {LayoutPages.map(
                            ({ navigationLocation, href, icon, title }: PageConfig, index: number) =>
                                navigationLocation === 'bottom' && (
                                    <Link href={href} key={title}>
                                        <ListItem disablePadding sx={{ display: 'block' }}>
                                            <ListItemButton
                                                href={href}
                                                sx={{
                                                    minHeight: 48,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2.5
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    {getIcon(icon)}
                                                </ListItemIcon>
                                                <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                )
                        )}
                        <Divider />
                        <Stack direction="row" alignItems="center" sx={{ pt: '20px' }}>
                            <Avatar
                                sx={{
                                    bgcolor: grey[500],
                                    color: '#000',
                                    borderRadius: '10px',
                                    margin: open ? 'none' : '0 auto'
                                }}
                                variant="rounded"
                            >
                                JD
                            </Avatar>
                            {open && (
                                <Typography variant="subtitle1" sx={{ fontWeight: 500, pl: '20px' }}>
                                    John Doe
                                    <span style={{ display: 'block' }}>johndoe@gmail.com</span>
                                </Typography>
                            )}
                        </Stack>
                    </List>
                </Stack>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '10px' }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
