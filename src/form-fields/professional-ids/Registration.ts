export interface RegistrationIdFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const RegistrationIdFields = [
    {
        size: 6,
        inputType: 'text',
        name: 'registrationNumber',
        label: 'Registration Number',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingleCustom',
        name: 'specialty',
        label: 'Specialty',
        required: true,
        options: 'stateOfPracticeList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'state',
        label: 'State',
        required: true,
        options: 'stateOfPracticeList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingleCustom',
        name: 'issuingBoard',
        label: 'Issuing Board',
        required: true,
        options: 'stateOfPracticeList'
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
        name: 'practicingNumberFlag',
        label: 'Are you currently practicing under this number?',
        required: true
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'doesNotExpire',
        label: 'Does Not Expire',
        required: true
    }
];

export default RegistrationIdFields;
