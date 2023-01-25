export interface MedicaidFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const MedicaidFields = [
    {
        size: 6,
        inputType: 'text',
        name: 'medicaidNumber',
        label: 'Medicaid Number',
        required: false
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'medicaidState',
        label: 'Medicaid State',
        required: true,
        options: 'stateList'
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'medicaidNumberFlag',
        label: `I don't have Medicaid Number`,
        required: false
    }
];

export default MedicaidFields;
