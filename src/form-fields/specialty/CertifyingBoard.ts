export interface CertifyingBoardFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const CertifyingBoardFields = [
    {
        size: 12,
        inputType: 'autoCompleteSingleCustom',
        name: 'certifyingBoard',
        label: 'Certifying Board',
        required: true,
        options: 'certifyingBoardList'
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
        inputType: 'autoCompleteSingle',
        name: 'state',
        label: 'State',
        required: true,
        options: 'stateOfPracticeList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'zipCode',
        label: 'Zip Code',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'boardCertificationNumber',
        label: 'Board Certification Number',
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
        inputType: 'date',
        name: 'certificationExpirationDate',
        label: 'Certification Expiration Date',
        required: false
    },
    {
        size: 6,
        inputType: 'date',
        name: 'initialCertificationDate',
        label: 'Initial Certification Date',
        required: false
    },
    {
        size: 12,
        inputType: 'checkbox',
        name: 'doesNotExpire',
        label: 'Does not expire',
        required: false
    }
];

export default CertifyingBoardFields;
