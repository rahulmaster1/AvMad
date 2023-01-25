export interface PageConfig {
    title: string;
    href: string;
    error: boolean;
}

export const ApptrackerPages: PageConfig[] = [
    {
        title: 'Application Collection',
        href: '/apptracker/application_collection',
        error: false,
        
    },
    {
        title: 'Manage Facility',
        href: '/apptracker/manage_facility',
        error: false
    },
    {
        title: 'Manage Provider',
        href: '/apptracker/manage_provider',
        error: false
    },
 
];
