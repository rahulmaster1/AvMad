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
        size: 4,
        inputType: 'text',
        name: 'goTo',
        label: 'Search for',
        required: false,
        options: 'goToList'
    },
    
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Credential Cycle',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Provider Status	',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Provider Status	',
        required: false,
        options: 'goToList'
    },

    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Client Name	',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Batch Description	',
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
