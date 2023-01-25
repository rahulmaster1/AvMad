export interface PageConfig {
    title: string;
    href: string;
    error: boolean;
}

export const MicrositePages: PageConfig[] = [
    {
        title: 'Attested/Submitted Applications',
        href: '/microsite/attestedsubmittedapplications',
        error: false,
        
    },
    {
        title: 'All Applications',
        href: '/microsite/alll_applications',
        error: false
    },
    
 
];
