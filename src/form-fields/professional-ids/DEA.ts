export interface DEAFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const DEAFields = [
    {
        size: 6,
        inputType: 'text',
        name: 'deaRegistrationNumber',
        label: 'DEA Registration Number',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'registrationState',
        label: 'Registration State',
        required: true,
        options: 'stateOfPracticeList'
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
        name: 'fullSchedule',
        label: 'Full Schedule (2 2N 3 3N 4 5)?',
        required: false
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'doesNotExpire',
        label: 'Does Not Expire',
        required: true
    }
];

export default DEAFields;
