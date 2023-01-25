export interface DisclosurePerformJobFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const DisclosurePerformJobFields = [
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion23',
        label: `23. Are you currently engaged in the illegal use of drugs? ('Currently' means sufficiently recent to justify a reasonable belief that the use of drugs may have an ongoing impact on one's ability to practice medicine. It is not limited to the day of, or within a matter of days or weeks before the date of application, rather that it has occurred recently enough to indicate the individual is actively engaged in such conduct. "Illegal use of drugs" refers to drugs whose possession or distribution is unlawful under the Controlled Substances Act, 21 U.S.C. 812.22. It "does not include the use of a drug taken under supervision by a licensed health care professional, or other uses authorized by the controlled Substances Act or other provision of Federal law." The term does include, however, the unlawful use of prescription controlled substances.)`,
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation23',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion24',
        label: '24. Do you use any chemical substances that would in any way impair or limit your ability to practice medicine and perform the functions of your job with reasonable skill and safety?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation24',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion25',
        label: '25. Do you have any reason to believe that you would pose a risk to the safety or well being of your patients?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation25',
        label: 'Please provide an explanation below:',
        required: true
    },
    {
        size: 12,
        inputType: 'switch',
        name: 'licensureQuestion26',
        label: '26. Are you unable to perform the essential functions of a practitioner in your area of practice even with reasonable accommodation?',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'licensureExplanation26',
        label: 'Please provide an explanation below:',
        required: true
    }
];

export default DisclosurePerformJobFields;
