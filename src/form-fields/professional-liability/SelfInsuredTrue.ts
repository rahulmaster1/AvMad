export interface SelfInsuredTrueFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const SelfInsuredTrueFields = [
    {
        size: 6,
        inputType: 'text',
        name: 'policyName',
        label: 'Self Insured Policy Name',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'policyNumber',
        label: 'Policy Number',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'carrierName',
        label: 'Carrier Name',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'emailAddress',
        label: 'Email Address',
        required: false
    },
    {
        size: 4,
        inputType: 'text',
        name: 'telephoneNumber',
        label: 'Telephone Number',
        required: false
    },
    {
        size: 2,
        inputType: 'text',
        name: 'ext',
        label: 'Ext',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'faxNumber',
        label: 'Fax Number',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'amountOfCoverage',
        label: 'Amount of Coverage per Occurrence',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'amountOfAggregate',
        label: 'Amount of Aggregate Coverage',
        required: true
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'amountOfCoverageFlag',
        label: 'Unlimited Coverage',
        required: true
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'amountOfAggregateFlag',
        label: 'Unlimited Coverage',
        required: true
    },
    {
        size: 6,
        inputType: 'date',
        name: 'originalEffectiveDate',
        label: 'Original Effective (Retroactive)',
        required: true
    },
    {
        size: 6,
        inputType: 'date',
        name: 'effectiveDate',
        label: 'Effective Date',
        required: false
    },
    {
        size: 6,
        inputType: 'date',
        name: 'expirationDate',
        label: 'Expiration Date',
        required: true
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'expirationDateFlag',
        label: 'Does Not Expire',
        required: false
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'malpracticeClaimFlag',
        label: 'Was this policy involved in a malpractice claim?',
        required: false
    }
];

export default SelfInsuredTrueFields;
