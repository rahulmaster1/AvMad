export interface PageConfig {
    title: string;
    href: string;
    error: boolean;
}

export const EncompassPages: PageConfig[] = [
    {
        title: 'Client Home',
        href: '/encompass/client_home',
        error: false
    },
    {
        title: 'Manage Client',
        href: '/encompass/manage_client',
        error: false
    },
    {
        title: 'Manage Practitioner',
        href: '/encompass/manage_practitioner',
        error: false
    },
    {
        title: 'Manage Tools',
        href: '/encompass/manage_tools',
        error: false
    },
    {
        title: 'Query Report',
        href: '/encompass/query_report',
        error: false
    },
    {
        title: 'Work Tickler',
        href: '/encompass/work_tickler',
        error: false
    }
];
