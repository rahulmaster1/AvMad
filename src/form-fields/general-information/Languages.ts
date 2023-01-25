export interface LanguagesFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const LanguagesFields = [
    {
        size: 6,
        inputType: 'autoCompleteMultiple',
        name: 'languagesSpeak',
        label: 'Please select all languages that you speak.',
        required: false,
        options: 'languagesList'
    },
    {
        size: 6,
        inputType: 'autoCompleteMultiple',
        name: 'languagesWrite',
        label: 'Please select all languages that you write.',
        required: false,
        options: 'languagesList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'ethnicity',
        label: 'Ethnicity',
        required: false,
        options: 'ethnicityList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'maritalStatus',
        label: 'Marital Status',
        required: false,
        options: 'maritalStatusList'
    }
];

export default LanguagesFields;
