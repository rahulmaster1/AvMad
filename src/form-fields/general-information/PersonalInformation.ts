export interface PersonalInformationFieldsProps {
    size: number;
    inputType: string;
    name: string;
    label: string;
    required: boolean;
    options?: string;
}

const PersonalInformationFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'gender',
        label: 'Gender',
        required: true,
        options: 'genderList'
    },
    {
        size: 6,
        inputType: 'date',
        name: 'dateOfBirth',
        label: 'Date of Birth',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'citizenship',
        label: 'Citizenship',
        required: true,
        options: 'countryList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'countryOfBirth',
        label: 'Country of Birth',
        required: false,
        options: 'countryList'
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'socialSecurityNumberFlag',
        label: 'Do you have a Social Security Number?',
        required: false
    }
];

export default PersonalInformationFields;
