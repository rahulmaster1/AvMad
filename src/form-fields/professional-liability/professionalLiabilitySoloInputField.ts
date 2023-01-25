const professionalLiabilitySoloInputField = {
    selfInsuredFlagField: {
        size: 12,
        inputType: 'switch',
        name: 'selfInsuredFlag',
        label: `Are you self-insured?`,
        required: true
    },
    liabilityCoverageFlagField: {
        size: 12,
        inputType: 'switch',
        name: 'liabilityCoverageFlag',
        label: 'Do/Did you have professional liability coverage within the past ten (10) years?',
        required: true
    },
    sovereignDocumentFlagField: {
        size: 6,
        inputType: 'switch',
        name: 'sovereignDocumentFlag',
        label: 'Do you have an admitting arrangement?',
        required: true
    },
    explanationField: {
        size: 12,
        inputType: 'textMultiline',
        name: 'explanation',
        label: 'Please explain your lack of Professional Liability Coverage.',
        required: true
    }
};

export default professionalLiabilitySoloInputField;
