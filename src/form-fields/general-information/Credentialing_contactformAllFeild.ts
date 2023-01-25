export interface CredentialingContactAllFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const CredentialingContactFieldsAll = [
    {
        size: 6,
        inputType: 'text',
        name: 'firstName',
        label: '*First Name',
        required: true

    },
    {
        size: 6,
        inputType: 'text',
        name: 'lastName',
        label: '*Last Name',
        required: true,

    },
    {
        size: 6,
        inputType: 'text',
        name: 'lastName',
        label: '*Address Line 1',
        required: true,

    },
    {
        size: 6,
        inputType: 'text',
        name: 'lastName',
        label: '*AddressLne 2',
        required: true,

    },
    {
        size: 6,
        inputType: 'text',
        name: 'lastName',
        label: '*City',
        required: true,

    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'firstName',
        label: '*State',
        required: true,
        options: 'StateAndPractitionerFields'

    },
    {
        size: 7,
        inputType: 'text',
        name: 'lastName',
        label: '*Zip Code',
        required: true,

    },       
    {
        size: 6,
        inputType: 'text',
        name: 'lastName',
        label: '*Telephone Number',
        required: true,

    },
    {
        size: 2,
        inputType: 'text',
        name: 'lastName',
        label: 'Ext',
        required: true,

    },
    {
        size: 4,
        inputType: 'text',
        name: 'lastName',
        label: '*Fax',
        required: true,

    },
    
    {
        size: 12,
        inputType: 'checkbox',
        name: 'lastName',
        label: 'Does Not Have',
        required: true,
                    flexDirection: "row",
            justifyContent: "center"
    },
    
    {
        size: 6,
        inputType: 'text',
        name: 'lastName',
        label: '*Mobile Number',
        required: true,

    },
    {
        size: 6,
        inputType: 'text',
        name: 'lastName',
        label: '*Email Address  ',
        required: true,

    },
    
    {
        size: 12,
        inputType: 'checkbox',
        name: 'lastName',
        label: 'Does Not Have',
        required: true,
                    flexDirection: "row",
            justifyContent: "center"
    },
    
];

export default CredentialingContactFieldsAll;
