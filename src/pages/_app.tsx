import { useEffect } from 'react';

import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';

import { customTheme } from 'config/theme/customTheme';

import ClientPortalLayout from 'view/components/ClientPortalLayout/ClientPortalLayout';
import EncompassLayout from 'view/components/EncompassLayout/EncompassLayout';
import Layout from 'view/components/Layout';
import ProviderSourceLayout from 'view/components/ProviderSourceLayout/ProviderSourceLayout';

import { store } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
    const noNav = ['/login', '/provider_source_registration', '/registration'];
    const router = useRouter();
    useEffect(() => {
        localStorage.getItem('isLoggedIn') == 'true' ? 'User logged in' : router.push('/login');
    }, []);

    if (router.pathname.startsWith('/provider_source/')) {
        return (
            <Provider store={store}>
                <ThemeProvider theme={customTheme}>
                    <Layout>
                        <ProviderSourceLayout>
                            <Component {...pageProps} />
                        </ProviderSourceLayout>
                    </Layout>
                </ThemeProvider>
            </Provider>
        );
    }

    if (router.pathname.startsWith('/encompass/')) {
        return (
            <Provider store={store}>
                <ThemeProvider theme={customTheme}>
                    <Layout>
                        <EncompassLayout>
                            <Component {...pageProps} />
                        </EncompassLayout>
                    </Layout>
                </ThemeProvider>
            </Provider>
        );
    }

    if (router.pathname.startsWith('/client_portal/')) {
        return (
            <Provider store={store}>
                <ThemeProvider theme={customTheme}>
                    <Layout>
                        <ClientPortalLayout>
                            <Component {...pageProps} />
                        </ClientPortalLayout>
                    </Layout>
                </ThemeProvider>
            </Provider>
        );
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={customTheme}>
                {noNav.includes(router.pathname) ? (
                    <Component {...pageProps} />
                ) : (
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                )}
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
