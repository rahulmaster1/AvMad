export interface AdmittingPhysicianFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const AdmittingPhysicianFields = [
    {
        size: 12,
        inputType: 'text',
        name: 'nameOfAdmittingPhysician',
        label: 'Name of Admitting Physician/Practice/Clinic/Group',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'facilityLocation',
        label: 'Facility Location',
        required: true,
        options: 'stateOfPracticeList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'facilityName',
        label: 'Facility Name',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'addressLine1',
        label: 'Medical Staff Office Address Line 1',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'addressLine2',
        label: 'Medical Staff Office Address Line 2',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'city',
        label: 'City',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'zipCode',
        label: 'Zip Code',
        required: true
    },
    {
        size: 12,
        inputType: 'textMultiline',
        name: 'admittingArrangements',
        label: 'Please explain your admitting arrangements.',
        required: false
    }
];

export default AdmittingPhysicianFields;
