export interface OtherIDsFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const OtherIDsFields = [
    {
        size: 6,
        inputType: 'text',
        name: 'tricareProviderNumber',
        label: 'TRICARE Provider Number',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'usmleNumber',
        label: 'USMLE Number',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'workersCompensationNumber',
        label: `Workers' Compensation Number`,
        required: false
    }
];

export default OtherIDsFields;
