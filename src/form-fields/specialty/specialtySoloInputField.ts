const specialtySoloInputFields = {
    recertificationDateField: {
        size: 6,
        inputType: 'date',
        name: 'recertificationDate',
        label: 'Recertification Date',
        required: false
    },
    failedExamFlagField: {
        size: 6,
        inputType: 'switch',
        name: 'failedExamFlag',
        label: 'Have you ever failed to pass a specialty board examination?',
        required: false
    },
    populationServedField: {
        size: 6,
        inputType: 'textMultiline',
        name: 'populationServed',
        label: 'Other Areas',
        required: false
    }
};

export default specialtySoloInputFields;
