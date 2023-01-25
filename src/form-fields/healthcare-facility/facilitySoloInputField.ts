const facilitySoloInputField = {
    hospitalPrivilegeFlagField: {
        size: 12,
        inputType: 'switch',
        name: 'hospitalPrivilegeFlag',
        label: 'Do/Did you have hospital privileges?',
        required: true
    },
    dateApplicationField: {
        size: 6,
        inputType: 'date',
        name: 'dateApplication',
        label: 'Date Application Submitted',
        required: true
    },
    admittingField: {
        size: 6,
        inputType: 'switch',
        name: 'admittingArrangementFlag',
        label: 'Do you have an admitting arrangement?',
        required: true
    },
    explanationField: {
        size: 12,
        inputType: 'textMultiline',
        name: 'explanation',
        label: 'Please explain why you do not have an admitting arrangement.',
        required: true
    }
};

export default facilitySoloInputField;
