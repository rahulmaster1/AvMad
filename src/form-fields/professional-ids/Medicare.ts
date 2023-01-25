export interface MedicareFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const MedicareFields = [
    {
        size: 6,
        inputType: 'text',
        name: 'medicareNumber',
        label: 'Medicare Number',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'medicareState',
        label: 'Medicare State',
        required: true,
        options: 'stateList'
    }
];

export default MedicareFields;
