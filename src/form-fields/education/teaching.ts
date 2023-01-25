export interface TeachingFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const TeachingFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'teachingProgramLocation',
        label: 'Teaching Program Location',
        required: true,
        options: 'programLocationList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'teachingProgramName',
        label: 'Teaching Program Name',
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
        label: `Email Address`,
        required: false
    }
];

export default TeachingFields;
