export interface LicensureFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const ProfessionalOrganizations = [
    {
        size: 12,
        inputType: 'text',
        name: 'licenseStatus',
        label: '*Organization Name',  
        required: true,
    },
    
    {
        size: 6,
        inputType: 'date',
        name: 'licenseState',
        label: 'Effective Date (MM/DD/YYYY)        ',
        required: true,
    },
    {
        size: 6,
        inputType: 'date',
        name: 'licenseState',
        label: 'Termination Date (MM/DD/YYYY)        ',
        required: true,
    }, {
        size: 12,
        inputType: 'checkbox',
        name: 'licenseNumber',
        label: 'Present',
        required: true
    },
    
];

export default ProfessionalOrganizations;
