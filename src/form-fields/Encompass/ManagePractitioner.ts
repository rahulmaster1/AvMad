export interface ManagePractitionerFieldsProps {
    size: number;
    inputType: string;
    name: string;
    label: string;
    required: boolean;
    options?: string;
}
const ManagePractitionerFields = [
    {
        size: 12,
        inputType: 'autoCompleteSingle',
        name: 'in',
        label: 'In',
        required: false,
        options: 'inConditionList'
    },
    {
        size: 5,
        inputType: 'autoCompleteSingle',
        name: 'where',
        label: 'Where',
        required: false,
        options: 'whereConditionList'
    },
    {
        size: 2,
        inputType: 'autoCompleteSingle',
        name: 'whereOperator',
        label: 'Operator',
        required: false,
        options: 'operatorList'
    },
    {
        size: 3,
        inputType: 'text',
        name: 'whereCondition',
        label: 'Condition',
        required: false
    },
    {
        size: 2,
        inputType: 'autoCompleteSingle',
        name: 'andOr',
        label: 'And/Or',
        required: false,
        options: 'andOrList'
    }
];

export default ManagePractitionerFields;
