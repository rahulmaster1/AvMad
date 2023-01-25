export interface SpecialtyFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const SpecialtyFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'typeOfTraining',
        label: 'Type of Training',
        required: true,
        options: 'trainingList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'specialty',
        label: 'Specialty',
        required: true,
        options: 'primaryPractitionerTypeList'
    },
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
        inputType: 'text',
        name: 'directorEmailAddress',
        label: 'Program Director Email Address',
        required: false
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
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'completionFlag',
        label: 'Did you complete your training at this institution?',
        required: true
    }
];

export default SpecialtyFields;
