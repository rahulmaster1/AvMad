export interface DisclosureEducationAndTrainingFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosureEducationAndTrainingFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion6',
        label: '6. Were you ever placed on probation, disciplined, formally reprimanded, suspended or asked to resign during an internship, residency, fellowship, preceptorship or other clinical education program? If you are currently in a training program, have you been placed on probation, disciplined, formally reprimanded, suspended or asked to resign?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation6',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion7',
        label: '7. Have you ever, while under investigation or to avoid an investigation, voluntarily withdrawn or prematurely terminated your status as a student or employee in any internship, residency, fellowship, preceptorship, or other clinical education program?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation7',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion8',
        label: '8. Have any of your board certifications or eligibility ever been revoked?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation8',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion9',
        label: '9. Have you ever chosen not to re-certify or voluntarily surrendered your board certification(s) while under investigation?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation9',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosureEducationAndTrainingFields;
