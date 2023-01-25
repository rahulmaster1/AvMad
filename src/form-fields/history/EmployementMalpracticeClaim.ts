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
        size: 4,
        inputType: 'text',
        name: 'dateOfOccurrence',
        label: 'First Name',
        required: true
    },
    {
        size: 2,
        inputType: 'text',
        name: 'dateClaim',
        label: 'Middle',
        required: true
    },
    {
        size: 4,
        inputType: 'text',
        name: 'dateClaim',
        label: 'Last Name',
        required: true
    },
    {
        size: 2,
        inputType: 'autoCompleteSingle',
        name: 'statusOfClaim',
        label: 'Suffix',
        required: true,
        options: 'claimStatusList'
    },
    {
        size: 12,
        inputType: 'text',
        name: 'settlement',
        label: 'Degree',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'settlementAttribute',
        label: 'Physician Primary License State        ',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'methodOfResolution',
        label: 'Physician Primary License Number        ',
        required: false,
    },
    {
        size: 6,
        inputType: 'text',
        name: 'descriptionOfAllegations',
        label: 'Medicare Number ',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'specificResponsibility',
        label: 'NPI Number',
        required: false
    },
    ];

export default MalpracticeClaimField;
