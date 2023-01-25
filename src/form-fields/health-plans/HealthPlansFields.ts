export interface HealthPlansFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const HealthPlansFields = [
    {
        size: 12,
        inputType: 'autoCompleteMultiple',
        name: 'healthPlans',
        label: 'Health Plans*',
        required: true,
        options: 'healthPlanList'
    },
    {
        size: 12,
        inputType: 'autoCompleteMultiple',
        name: 'hospitals',
        label: 'Hospitals*',
        required: true,
        options: 'hospitalList'
    },

    {
        size: 12,
        inputType: 'autoCompleteMultiple',
        name: 'directories',
        label: 'Directories*',
        required: true,
        options: 'directoryList'
    }
];

export default HealthPlansFields;
