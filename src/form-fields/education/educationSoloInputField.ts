const educationSoloInputField = {
    undergraduateSchoolField: {
        size: 6,
        inputType: 'switch',
        name: 'undergraduateSchoolFlag',
        label: 'Did you attend an Undergraduate school?',
        required: true
    },
    undergraduateExplnationField: {
        size: 12,
        inputType: 'textMultiline',
        name: 'explanation',
        label: 'Please explain why you did not complete your undergraduate education at this school.',
        required: false
    },
    graduateSchoolField: {
        size: 6,
        inputType: 'switch',
        name: 'graduateSchoolFlag',
        label: 'Did you complete your professional education at this school?',
        required: true
    },
    graduateExplnationField: {
        size: 12,
        inputType: 'textMultiline',
        name: 'explanation',
        label: 'Please explain why you did not complete your professional education at this school.',
        required: false
    }
};

export default educationSoloInputField;
