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
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Facility Name',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'App Completed',
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
    }
];

export default ManagePractitionerFilter2Fields;
