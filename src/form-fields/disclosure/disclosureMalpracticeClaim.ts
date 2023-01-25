export interface DisclosureMalpracticeClaimFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosureMalpracticeClaimFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion19',
        label: '19. Have you ever had any professional liability actions (pending, settled, arbitrated, mediated or litigated) within the past 10 years? If yes, provide information for each case under Professional Liability Claims History.',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation19',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosureMalpracticeClaimFields;
