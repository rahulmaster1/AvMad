export interface MalpracticeClaimFieldProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const MalpracticeClaimField = [
    {
        size: 6,
        inputType: 'date',
        name: 'dateOfOccurrence',
        label: 'Date Of Occurrence',
        required: true
    },
    {
        size: 6,
        inputType: 'date',
        name: 'dateClaim',
        label: 'Date Claim was Filed',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'statusOfClaim',
        label: 'Status of Claim',
        required: true,
        options: 'claimStatusList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'settlement',
        label: 'Amount of Award or Settlement',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'settlementAttribute',
        label: 'Amount of Award or Settlement Attributed to You',
        required: false
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'methodOfResolution',
        label: 'Method of Resolution',
        required: false,
        options: 'methodOfResolutionList'
    },
    {
        size: 6,
        inputType: 'date',
        name: 'dismissalDate',
        label: 'Date of Settlement, Judgment or Dismissal',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'descriptionOfAllegations',
        label: 'Description of Allegations',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'primaryOrCoDefendant',
        label: 'Were you the primary defendant or co-defendant?',
        required: true,
        options: 'primaryOrCoDefendantList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'numberOfDefendants',
        label: 'Number of Defendants',
        required: false
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'involvementCase',
        label: 'Your involvement in the case',
        required: true,
        options: 'caseInvolvementList'
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'specificResponsibility',
        label: 'Your Specific Responsibility',
        required: false
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'descriptionOfInjury',
        label: 'Description of alleged injury to the patient, including clinical details, with preceding events.',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'subsequentEvents',
        label: `Subsequent events, including patient's clinical outcome.`,
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'resultInDeathFlag',
        label: 'Did the alleged injury result in death?',
        required: false
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'caseIncludedFlag',
        label: `To the best of your knowledge, is the case included in the National Practitioner Data Bank (NPDB)?`,
        required: false
    }
];

export default MalpracticeClaimField;
