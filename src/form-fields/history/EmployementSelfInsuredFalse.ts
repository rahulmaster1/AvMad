export interface SelfInsuredFalseFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const SelfInsuredFalseFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'carrierLocation',
        label: 'Carrier Location',
        required: true,
        options: 'stateOfPracticeList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'carrierName',
        label: 'Practice/Employer Name        ',
        required: true
    },

    {
        size: 6,
        inputType: 'text',
        name: 'carrierName',
        label: 'Contact Last Name       ',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'carrierName',
        label: 'Contact Last Name       ',
        required: true
    },
    
    {
        size: 6,
        inputType: 'text',
        name: 'addressLine1',
        label: 'Address Line 1',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'addressLine2',
        label: 'Address Line 2',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'city',
        label: 'City',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'zipCode',
        label: 'Zip Code',
        required: true
    },
    {
        size: 4,
        inputType: 'text',
        name: 'telephoneNumber',
        label: 'Telephone Number',
        required: false
    },
    {
        size: 2,
        inputType: 'text',
        name: 'ext',
        label: 'Ext',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'faxNumber',
        label: 'Fax Number',
        required: false
    },
    {
        size: 8,
        inputType: 'text',
        name: 'emailAddress',
        label: 'Email Address',
        required: false
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'typeOfPolicy',
        label: 'Contact Method         ',
        required: false,
        options: 'typeOfPolicyList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'typeOfCoverage',
        label: 'Position Held        ',
        required: false,
        options: 'typeOfCoverageList'
    },
    {
        size: 6,
        inputType: 'date',
        name: 'effectiveDate',
        label: 'Start Date (MM/DD/YYYY)         ',
        required: false
    },
    {
        size: 6,
        inputType: 'date',
        name: 'expirationDate',
        label: 'End Date (MM/DD/YYYY)      ',
        required: true
    },
    
    {
        size: 12,
        inputType: 'checkbox',
        name: 'amountOfCoverageFlag',
        label: 'Present',
        required: true
    },
    
    {
        size: 12,
        inputType: 'switch',
        name: 'malpracticeClaimFlag',
        label: 'Do/Did you have a collaboration agreement with a licensed physician? ',
        required: false
    }
];
export default SelfInsuredFalseFields;
