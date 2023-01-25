export interface UndergraduateFieldProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const UndergraduateField = [
    {
        size: 12,
        inputType: 'autoCompleteSingle',
        name: 'undergraduateSchoolLocation',
        label: 'Undergraduate School Location',
        required: true,
        options: 'schoolLocationList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'undergraduateSchoolName',
        label: 'Undergraduate School Name',
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
        name: 'undergraduateMajor',
        label: 'Undergraduate Major',
        required: false
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'degreeAwarded',
        label: 'Degree Awarded',
        required: true,
        options: 'degreeAwardedList'
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'completionFlag',
        label: 'Did you complete your undergraduate education at this school?',
        required: true
    },
    {
        size: 6,
        inputType: 'date',
        name: 'startDate',
        label: 'Start Date',
        required: true
    },
    {
        size: 6,
        inputType: 'date',
        name: 'endDate',
        label: `End (Graduation) Date`,
        required: true
    }
];

export default UndergraduateField;
