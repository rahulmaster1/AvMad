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
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'goTo',
        label: 'Go To',
        required: false,
        options: 'goToList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'conditionName',
        label: 'ConditionName',
        required: false
    }
];

export default ManagePractitionerFilter2Fields;
