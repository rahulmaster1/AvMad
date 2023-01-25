export interface UniversityProgramFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const UniversityProgramFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'universityProgramLocation',
        label: 'University Affiliated Program Location',
        required: false,
        options: 'programLocationList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'universityAffiliatedProgram',
        label: 'University Affiliated Program',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'universityAddressLine1',
        label: 'Address Line 1',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'universityAddressLine2',
        label: 'Address Line 2',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'universityCity',
        label: 'City',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'universityZipCode',
        label: 'Zip Code',
        required: true
    },
    {
        size: 4,
        inputType: 'text',
        name: 'universityTelephoneNumber',
        label: 'Telephone Number',
        required: false
    },
    {
        size: 2,
        inputType: 'text',
        name: 'universityExt',
        label: 'Ext',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'universityFaxNumber',
        label: 'Fax Number',
        required: false
    }
];

export default UniversityProgramFields;
