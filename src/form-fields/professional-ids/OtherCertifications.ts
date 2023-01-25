export interface OtherCertificationsFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const OtherCertificationsFields = [
    {
        size: 12,
        inputType: 'autoCompleteSingleCustom',
        name: 'certificationType',
        label: 'Certification Type',
        required: true,
        options: 'certificationList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'state',
        label: 'false',
        required: true,
        options: 'stateList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'certificationNumber',
        label: 'Certification Number',
        required: false
    },
    {
        size: 6,
        inputType: 'date',
        name: 'issueDate',
        label: 'Issue Date',
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
        name: 'doesNotExpire',
        label: 'Does Not Expire',
        required: true
    }
];

export default OtherCertificationsFields;
