export interface ManagePractitionerFilter2FieldsProps {
    size: number;
    inputType: string;
    name: string;
    label: string;
    required: boolean;
    options?: string;
}

const ManagePractitionerFilter2Fields = [
    {
        size: 12,
        inputType: 'text',
        name: 'goTo',
        label: 'Search for',
        required: false,
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'App Completed	',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Credential Cycle	',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'date',
        name: 'goTo',
        label: 'File Due Date	',
        required: false,
    }
];

export default ManagePractitionerFilter2Fields;
