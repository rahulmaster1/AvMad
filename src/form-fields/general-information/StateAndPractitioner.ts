export interface StateAndPractitionerFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const StateAndPractitionerFields = [
    {
        size: 12,
        inputType: 'autoCompleteMultiple',
        name: 'statesOfPractice',
        label: 'State(s) Of Practice*',
        required: false,
        options: 'statesOfPracticeList'
    },
    {
        size: 12,
        inputType: 'autoCompleteSingle',
        name: 'primaryPractitionerType',
        label: 'Primary Practitioner Type',
        required: true,
        options: 'primaryPractitionerTypeList'
    }
];

export default StateAndPractitionerFields;
