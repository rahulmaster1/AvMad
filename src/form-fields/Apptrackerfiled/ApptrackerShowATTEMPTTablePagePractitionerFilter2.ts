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
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Provider',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Facility',
        required: false,
        options: 'goToList'
    }
];

export default ManagePractitionerFilter2Fields;
