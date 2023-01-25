export interface DisclosureMedicaidMedicareFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosureMedicaidMedicareFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion11',
        label: '11. Have you ever been disciplined, excluded from, debarred, suspended, reprimanded, sanctioned, censured, disqualified or otherwise restricted in regard to participation in the Medicare or Medicaid program, or in regard to other federal or state governmental health care plans or programs?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation11',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosureMedicaidMedicareFields;
