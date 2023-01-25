import React, { FC, ReactNode, useEffect } from 'react';

import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import { Badge, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { EncompassPages } from 'config/encompassSubPage';

import { selectProviderSourceReducer } from 'state/reducers/providerSourceReducer';

import { useAppSelector } from 'hooks/useAppSelector';

const EncompassLayout: FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter();
    const { activeRoute } = useAppSelector(selectProviderSourceReducer);
    const [value, setValue] = React.useState(router.pathname);

    useEffect(() => {
        setValue(router.pathname);
        // console.log('--debug active route', activeRoute);
    }, [router.pathname]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <section id="provider_source">
            <Box
                sx={{
                    flexGrow: 1,
                    maxWidth: { xs: 420, sm: 700, md: 800, lg: 1100, xl: 1400 },
                    bgcolor: 'background.paper',
                    margin: '0 auto'
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    // variant="scrollable"
                    scrollButtons
                    aria-label="visible arrows tabs example"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 }
                        }
                    }}
                >
                    {EncompassPages.map((page, index) => {
                        return (
                            <Tab
                                value={page.href}
                                key={page.title}
                                sx={{ padding: '0' }}
                                label={
                                    <Link href={page.href}>
                                        <div style={{ padding: '12px 16px' }}>{page.title}</div>
                                    </Link>
                                }
                            />
                        );
                    })}
                </Tabs>
            </Box>
            <div>{children}</div>
        </section>
    );
};

export default EncompassLayout;
