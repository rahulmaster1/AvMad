export interface NonPendingFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const NonPendingFields = [
    {
        size: 3,
        inputType: 'date',
        name: 'appointmentDate',
        label: 'Appointment Date',
        required: true
    },
    {
        size: 3,
        inputType: 'date',
        name: 'expirationDate',
        label: 'Expiration Date',
        required: false
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'doesNotExpire',
        label: 'Does Not Expire',
        required: false
    }
];

export default NonPendingFields;
