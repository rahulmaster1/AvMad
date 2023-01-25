export interface DisclosureDeaOrCdsFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosureDeaOrCdsFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion10',
        label: '10. Have your Federal DEA and/or State Controlled Dangerous Substances (CDS) certificate(s) or authorization(s) ever been challenged, denied, suspended, revoked, restricted, denied renewal, or voluntarily or involuntarily relinquished?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation10',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosureDeaOrCdsFields;
