export interface DisclosureCriminalHistoryFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosureCriminalHistoryFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion20',
        label: '20. Have you ever been convicted of, pled guilty to, or pled nolo contendere to any felony?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation20',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion21',
        label: '21. In the past ten years have you been convicted of, pled guilty to, or pled nolo contendere to any misdemeanor (excluding minor traffic violations) or been found liable or responsible for any civil offense that is reasonably related to your qualifications, competence, functions, or duties as a medical professional, or for fraud, an act of violence, child abuse or a sexual offense or sexual misconduct?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation21',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion22',
        label: '22. Have you ever been court-martialed for actions related to your duties as a medical professional?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation22',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosureCriminalHistoryFields;
