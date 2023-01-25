export interface EmergencyContactFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const EmergencyContactFields = [
    {
        size: 5,
        inputType: 'text',
        name: 'firstName',
        label: 'First Name',
        required: false
    },
    {
        size: 2,
        inputType: 'text',
        name: 'middleName',
        label: 'Middle Name',
        required: false
    },
    {
        size: 5,
        inputType: 'text',
        name: 'lastName',
        label: 'Last Name',
        required: false
    },

    {
        size: 5,
        inputType: 'text',
        name: 'emergencyContactPhoneNumber',
        label: 'Emergency Contact Phone Number',
        required: false
    }
];

export default EmergencyContactFields;
