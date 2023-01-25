export interface OtherNamesFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const OtherNamesFields = [
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'nameType',
        label: 'Name Type',
        required: true,
        options: 'nameTypeList'
    },
    {
        size: 3,
        inputType: 'date',
        name: 'dateStartedUsing',
        label: 'Date Started Using',
        required: true
    },
    {
        size: 3,
        inputType: 'date',
        name: 'dateStoppedUsing',
        label: 'Date Stopped Using',
        required: false
    },
    {
        size: 2,
        inputType: 'switch',
        name: 'currentlyInUse',
        label: 'Currently in use',
        required: true
    },
    {
        size: 4,
        inputType: 'text',
        name: 'otherFirstName',
        label: 'Other First Name',
        required: true
    },
    {
        size: 2,
        inputType: 'text',
        name: 'otherMiddleName',
        label: 'Other Middle Name',
        required: false
    },
    {
        size: 4,
        inputType: 'text',
        name: 'otherLastName',
        label: 'Other Last Name',
        required: true
    },
    {
        size: 2,
        inputType: 'autoCompleteSingle',
        name: 'otherSuffix',
        label: 'Other Suffix',
        required: false,
        options: 'otherSuffixList'
    }
];

export default OtherNamesFields;
