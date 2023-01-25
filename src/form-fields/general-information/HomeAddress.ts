export interface HomeAddressFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const HomeAddressFields = [
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
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'county',
        label: 'County',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'state',
        label: 'State',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'zipCode',
        label: 'Zip Code',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'telephoneNumber',
        label: 'Telephone Number',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'faxNumber',
        label: 'Fax Number',
        required: false
    },
    {
        size: 12,
        inputType: 'checkbox',
        name: 'unlistedNumber',
        label: 'Unlisted Number',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'mobileNumber',
        label: 'Mobile Number',
        required: false
    },
    {
        size: 3,
        inputType: 'text',
        name: 'pageNumber',
        label: 'Page Number',
        required: false
    },
    {
        size: 3,
        inputType: 'text',
        name: 'ext',
        label: 'Ext',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'emailAddress',
        label: 'Email Address',
        required: true
    }
];

export default HomeAddressFields;
