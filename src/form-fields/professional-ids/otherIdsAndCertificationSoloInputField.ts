const otherIdsAndCertificationSoloInputField = {
    medicareFlagField: {
        size: 6,
        inputType: 'switch',
        name: 'medicareFlag',
        label: 'Have you ever voluntarily opted out of Medicare?',
        required: true
    },
    medicareProviderFlagField: {
        size: 6,
        inputType: 'switch',
        name: 'medicareProviderFlag',
        label: 'Are you a participating Medicare provider?',
        required: true
    },
    deaReasonField: {
        size: 6,
        inputType: 'textMultiline',
        name: 'deaReason',
        label: 'Please explain why you do not have a DEA Registration Number.',
        required: true
    },
    medicaidFlagField: {
        size: 6,
        inputType: 'switch',
        name: 'medicaidProviderFlag',
        label: 'Are you a participating Medicaid provider?',
        required: true
    },
    otherCertificationsFlagField: {
        size: 6,
        inputType: 'switch',
        name: 'otherCertificationsFlag',
        label: 'Do you hold any other non- specialty related certifications? (e.g., ACLS, BLS, ATLS, CPR, PALS, NALS, Fluoroscopy, Radiography, etc.)',
        required: true
    }
};

export default otherIdsAndCertificationSoloInputField;
