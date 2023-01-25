export interface DisclosureLicensureFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosureLicensureFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion1',
        label: '1. Has your license, registration or certification to practice in your profession ever been voluntarily or involuntarily relinquished, denied, suspended, revoked, restricted, or have you ever been subject to a fine, reprimand, consent order, probation or any conditions or limitations by any state or professional licensing, registration or certification board?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation1',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion2',
        label: '2. Has there been any challenge to your licensure, registration or certification?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation2',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosureLicensureFields;
