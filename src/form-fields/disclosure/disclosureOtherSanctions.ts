export interface DisclosureOtherSanctionsFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosureOtherSanctionsFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion12',
        label: '12. Are you currently the subject of an investigation by any hospital, licensing authority, DEA or CDS authorizing entities, education or training program, Medicare or Medicaid program, or any other private, federal or state health program or a defendant in any civil action that is reasonably related to your qualifications, competence, functions, or duties as a medical professional for alleged fraud, an act of violence, child abuse or a sexual offense or sexual misconduct?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation12',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion13',
        label: '13. To your knowledge, has information pertaining to you ever been reported to the National Practitioner Data Bank or Healthcare Integrity and Protection Data Bank?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation13',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion14',
        label: '13. To your knowledge, has information pertaining to you ever been reported to the National Practitioner Data Bank or Healthcare Integrity and Protection Data Bank?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation14',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion15',
        label: '15. Have you ever been convicted of, pled guilty to, pled nolo contendere to, sanctioned, reprimanded, restricted, disciplined or resigned in exchange for no investigation or adverse action within the last ten years for sexual harassment or other illegal misconduct?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation15',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion16',
        label: '16. Are you currently being investigated or have you ever been sanctioned, reprimanded, or cautioned by a military hospital, facility, or agency, or voluntarily terminated or resigned while under investigation or in exchange for no investigation by a hospital or healthcare facility of any military agency?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation16',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosureOtherSanctionsFields;
