export interface ClientHomeFieldsProps {
    size: number;
    inputType: string;
    name: string;
    label: string;
    required: boolean;
    options?: string;
}

const ClientHomeFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'displayAll',
        label: 'Display All',
        required: false,
        options: 'displayList'
    },
    {
        size: 6,
        inputType: 'date',
        name: 'committeeDate',
        label: 'Committee Date',
        required: false
    }
];

export default ClientHomeFields;
