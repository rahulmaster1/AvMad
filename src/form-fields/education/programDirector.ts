export interface ProgramDiectorFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const ProgramDiectorFields = [
    {
        size: 6,
        inputType: 'text',
        name: 'directorFirstName',
        label: 'Program Director First Name',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'directorLastName',
        label: 'Program Director Last Name',
        required: false
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'directorDegree',
        label: 'Program Director Degree',
        required: true,
        options: 'degreeAwardedList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'academicRank',
        label: 'Academic Rank or Title',
        required: true,
        options: 'degreeAwardedList'
    },
    {
        size: 6,
        inputType: 'date',
        name: 'startDate',
        label: 'Start Date',
        required: false
    },
    {
        size: 6,
        inputType: 'date',
        name: 'endDate',
        label: `End (Graduation) Date`,
        required: false
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'doesNotExpire',
        label: 'Does Not Expire',
        required: false
    }
];

export default ProgramDiectorFields;
