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
        inputType: 'autoCompleteSingle',
        name: 'licenseState',
        label: 'License State',
        required: true,
        options: 'stateOfPracticeList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingleCustom',
        name: 'licenseType',
        label: 'License Type',
        required: true,
        options: 'licenseTypeList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'licenseNumber',
        label: 'License Number',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'licenseStatus',
        label: 'License Status',
        required: true,
        options: 'licenseStatusList'
    },
    {
        size: 6,
        inputType: 'date',
        name: 'issueDate',
        label: 'Issue Date',
        required: true
    },
    {
        size: 6,
        inputType: 'date',
        name: 'expirationDate',
        label: 'Expiration Date',
        required: true
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'practicingStateFlag',
        label: 'Are you currently practicing in this state?',
        required: true
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'doesNotExpire',
        label: 'Does Not Expire',
        required: true
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'primaryLicenseFlag',
        label: 'Is this your primary license?',
        required: true
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'requireSupervisionFlag',
        label: 'Does this license require supervision?',
        required: true
    }
];

export default LicensureFields;
