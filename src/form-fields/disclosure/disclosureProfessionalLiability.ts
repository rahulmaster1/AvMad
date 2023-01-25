export interface DisclosureProfessionalLiabilityFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosureProfessionalLiabilityFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion17',
        label: '17. Has your professional liability coverage ever been cancelled, restricted, declined or not renewed by the carrier based on your individual liability history?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation17',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion18',
        label: '18. Have you ever been assessed a surcharge, or rated in a high-risk class for your specialty, by your professional liability insurance carrier, based on your individual liability history?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation18',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosureProfessionalLiabilityFields;
