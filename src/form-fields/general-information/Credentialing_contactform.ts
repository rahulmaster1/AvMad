export interface CredentialingContactFormFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const CredentialingContactFields = [
    {
        size: 8,
        inputType: 'autoCompleteSingle',
        name: 'firstName',
        label: '*Preferred Method of Contact (This will be used for application follow-up.)',
        required: true,
        options: 'PreferredList'

    },
       
];

export default CredentialingContactFields;
