export interface DisclosureHospitalPrivilegeFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosureHospitalPrivilegeFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion3',
        label: '3. Have your clinical privileges or medical staff membership at any hospital or healthcare institution, voluntarily or involuntarily, ever been denied, suspended, revoked, restricted, denied renewal or subject to probationary or to other disciplinary conditions (for reasons other than non-completion of medical record when quality of care was not adversely affected) or have proceedings toward any of those ends been instituted or recommended by any hospital or healthcare institution, medical staff or committee, or governing board?. Has your license, registration or certification to practice in your profession ever been voluntarily or involuntarily relinquished, denied, suspended, revoked, restricted, or have you ever been subject to a fine, reprimand, consent order, probation or any conditions or limitations by any state or professional licensing, registration or certification board?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation3',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion4',
        label: '4. Have you voluntarily or involuntarily surrendered, limited your privileges or not reapplied for privileges while under investigation?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation4',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion5',
        label: '5. Have you ever been terminated for cause or not renewed for cause from participation, or been subject to any disciplinary action, by any managed care organizations (including HMOs, PPOs, or provider organizations such as IPAs, PHOs)?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation5',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosureHospitalPrivilegeFields;
