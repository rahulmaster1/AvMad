export interface NameOfSponsorFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const NameOfSponsorFields = [
    {
        size: 4,
        inputType: 'text',
        name: 'firstName',
        label: 'First Name',
        required: true
    },
    {
        size: 2,
        inputType: 'text',
        name: 'middleName',
        label: 'Middle Name',
        required: false
    },
    {
        size: 4,
        inputType: 'text',
        name: 'lastName',
        label: 'Last Name',
        required: true
    },
    {
        size: 2,
        inputType: 'autoCompleteSingle',
        name: 'suffix',
        label: 'Suffix',
        required: false,
        options: 'suffixList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingleCustom',
        name: 'degree',
        label: 'Degree',
        required: true,
        options: 'stateOfPracticeList'
    }
];

export default NameOfSponsorFields;
