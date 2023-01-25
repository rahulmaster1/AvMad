export interface PageConfig {
    title: string;
    href: string;
    error: boolean;
}

export const ClientPortalPages: PageConfig[] = [
    {
        title: 'Reports',
        href: '/client_portal/reports',
        error: false
    },
    {
        title: 'VRC',
        href: '/client_portal/vrc',
        error: false
    },
    {
        title: 'Data Access',
        href: '/client_portal/data_access',
        error: false
    }
];
