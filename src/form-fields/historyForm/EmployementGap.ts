export interface LicensureFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const LicensureFields = [
    {
        size: 6,
        inputType: 'date',
        name: 'licenseState',
        label: 'Start Date (MM/DD/YYYY)        ',
        required: true,
    },
    {
        size: 6,
        inputType: 'date',
        name: 'licenseState',
        label: 'End Date (MM/DD/YYYY)        ',
        required: true,
    }, {
        size: 12,
        inputType: 'checkbox',
        name: 'licenseNumber',
        label: 'Present',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licenseStatus',
        label: 'Detailed Explanation',  
        required: true,
    },
    
];

export default LicensureFields;
