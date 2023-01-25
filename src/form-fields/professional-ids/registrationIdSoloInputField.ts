const registrationIdSoloInputField = {
    npiNumberField: {
        size: 6,
        inputType: 'text',
        name: 'npiNumber',
        label: 'NPI Number',
        required: true
    },
    deaField: {
        size: 6,
        inputType: 'switch',
        name: 'dea',
        label: 'Do/Did you have a DEA Registration Number?',
        required: true
    },
    deaReasonField: {
        size: 6,
        inputType: 'textMultiline',
        name: 'deaReason',
        label: 'Please explain why you do not have a DEA Registration Number.',
        required: true
    },
    cdsField: {
        size: 6,
        inputType: 'switch',
        name: 'cds',
        label: 'Do / Did you have a CDS Registration Number ?',
        required: true
    },
    cdsReasonField: {
        size: 6,
        inputType: 'textMultiline',
        name: 'cdsReason',
        label: 'Please explain why you do not have a CDS Registration Number.',
        required: true
    },
    registrationField: {
        size: 6,
        inputType: 'switch',
        name: 'registrationFlag',
        label: 'Do / Did you have a registration number related to your practicing specialty ?',
        required: true
    }
};

export default registrationIdSoloInputField;
