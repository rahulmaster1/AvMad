export interface DoesNotExpireFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DoesNotExpireFields = [
    {
        size: 6,
        inputType: 'text',
        name: 'annualAdmissions',
        label: 'Total Annual Admissions',
        required: false
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'primaryFacilityFlag',
        label: 'Is this your primary facility?',
        required: true
    }
];

export default DoesNotExpireFields;
