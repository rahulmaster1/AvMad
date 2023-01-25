export interface GraduateFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const GraduateFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'educationType',
        label: 'Education Type',
        required: true,
        options: 'educationTypeList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'schoolLocation',
        label: 'Graduate/Professional School Location',
        required: true,
        options: 'schoolLocationList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'professionalSchoolName',
        label: 'Professional School Name',
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
        inputType: 'autoCompleteSingle',
        name: 'graduationType',
        label: 'Graduation Type',
        required: true,
        options: 'graduateTypeList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'specialization',
        label: 'Specialization',
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
        inputType: 'text',
        name: 'facultyFirstName',
        label: 'Faculty Director First Name',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'facultyLastName',
        label: 'Faculty Director Last Name',
        required: false
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'directorDegree',
        label: 'Director Degree',
        required: true,
        options: 'directorDegreeList'
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

export default GraduateFields;
