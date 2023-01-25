export interface BoardExamFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const BoardExamFields = [
    {
        size: 6,
        inputType: 'date',
        name: 'boardExamDate',
        label: 'Board Exam Date',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingleCustom',
        name: 'certifyingBoard',
        label: 'Certifying Board',
        required: true,
        options: 'stateOfPracticeList'
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'reasonForFailure',
        label: 'Reason for Failure',
        required: true
    }
];

export default BoardExamFields;
