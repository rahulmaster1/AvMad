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
        label: 'First Name',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Last Name	',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'App Reviewed	',
        required: false,
        options: 'goToList'
    }
,  {
    size: 4,
    inputType: 'autoCompleteSingle',
    name: 'goTo',
    label: 'Crendential Status		',
    required: false,
    options: 'goToList'
}

    
];

export default ManagePractitionerFilter2Fields;
