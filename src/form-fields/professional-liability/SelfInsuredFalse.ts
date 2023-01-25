export interface SelfInsuredFalseFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const SelfInsuredFalseFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'carrierLocation',
        label: 'Carrier Location',
        required: true,
        options: 'stateOfPracticeList'
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
        name: 'addressLine1',
        label: 'Address Line 1',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'addressLine2',
        label: 'Address Line 2',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'city',
        label: 'City',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'zipCode',
        label: 'Zip Code',
        required: true
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
        name: 'emailAddress',
        label: 'Email Address',
        required: false
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'typeOfPolicy',
        label: 'Type of Policy',
        required: false,
        options: 'typeOfPolicyList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'typeOfCoverage',
        label: 'Type of Coverage',
        required: false,
        options: 'typeOfCoverageList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'policyHolderName',
        label: 'Policy Holder Name',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'policyNumber',
        label: 'Policy Number',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'tailCoverageFlag',
        label: 'Does this policy include tail coverage?',
        required: false
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'procedureCoverageFlag',
        label: `Has this carrier excluded any specific area of practice or proceduresfrom your coverage?`,
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

export default SelfInsuredFalseFields;
