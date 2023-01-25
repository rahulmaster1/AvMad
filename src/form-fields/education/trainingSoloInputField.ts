const trainingSoloInputField = {
    trainingProgramFlagField: {
        size: 12,
        inputType: 'switch',
        name: 'trainingProgramFlag',
        label: 'Did/Do you attend a training program?',
        required: true
    },
    trainingExplanationField: {
        size: 12,
        inputType: 'textMultiline',
        name: 'explanation',
        label: 'Please explain why you did not complete your training at this institution.',
        required: true
    }
};

export default trainingSoloInputField;
