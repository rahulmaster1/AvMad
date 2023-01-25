export interface PageConfig {
    title: string;
    href: string;
    icon: any;
    navigationLocation: 'top' | 'bottom';
    pageDisabled: boolean;
}

export const LayoutPages: PageConfig[] = [
    {
        title: 'Provider Source',
        href: '/provider_source/general_information',
        icon: 'PeopleAltOutlinedIcon',
        navigationLocation: 'top',
        pageDisabled: false
    },
    {
        title: 'Encompass',
        href: '/encompass',
        icon: 'FactCheckOutlinedIcon',
        navigationLocation: 'top',
        pageDisabled: true
    },
    {
        title: 'Client Portal',
        href: '/client_portal',
        icon: 'WebOutlinedIcon',
        navigationLocation: 'top',
        pageDisabled: true
    },
    {
        title: 'App Tracker',
        href: '/app_tracker',
        icon: 'AccessTimeOutlinedIcon',
        navigationLocation: 'top',
        pageDisabled: true
    },
    {
        title: 'Virtual Review Committee',
        href: '/virtual_review_committee',
        icon: 'ChangeCircleOutlinedIcon',
        navigationLocation: 'top',
        pageDisabled: true
    },
    {
        title: 'Modules',
        href: '/modules',
        icon: 'FolderCopyOutlinedIcon',
        navigationLocation: 'top',
        pageDisabled: true
    },
    {
        title: 'Create Your Tool',
        href: '/create_your_tool',
        icon: 'ConstructionOutlinedIcon',
        navigationLocation: 'top',
        pageDisabled: true
    },
    {
        title: 'Reports',
        href: '/reports',
        icon: 'AssessmentOutlinedIcon',
        navigationLocation: 'top',
        pageDisabled: true
    },
    {
        title: 'Help',
        href: '/help',
        icon: 'QuestionAnswerOutlinedIcon',
        navigationLocation: 'bottom',
        pageDisabled: true
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: 'SettingsApplicationsOutlinedIcon',
        navigationLocation: 'bottom',
        pageDisabled: true
    }
];
