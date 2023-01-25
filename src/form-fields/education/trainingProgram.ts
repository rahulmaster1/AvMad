export interface TrainingProgramFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const TrainingProgramFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'trainingProgramLocation',
        label: 'Training Program Location',
        required: true,
        options: 'programLocationList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'trainingProgramName',
        label: 'Training Program Name',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'trainingAddressLine1',
        label: 'Address Line 1',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'trainingAddressLine2',
        label: 'Address Line 2',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'trainingCity',
        label: 'City',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'trainingZipCode',
        label: 'Zip Code',
        required: true
    },
    {
        size: 4,
        inputType: 'text',
        name: 'trainingTelephoneNumber',
        label: 'Telephone Number',
        required: false
    },
    {
        size: 2,
        inputType: 'text',
        name: 'trainingExt',
        label: 'Ext',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'trainingFaxNumber',
        label: 'Fax Number',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'emailAddress',
        label: `Email Address`,
        required: false
    }
];

export default TrainingProgramFields;
