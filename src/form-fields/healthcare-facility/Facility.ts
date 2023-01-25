export interface FacilityFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
}

const FacilityFields = [
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
        size: 4,
        inputType: 'text',
        name: 'telephoneNumber',
        label: 'Medical Staff Office Telephone Number',
        required: true
    },
    {
        size: 2,
        inputType: 'text',
        name: 'ext',
        label: 'Ext',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'faxNumber',
        label: 'Medical Staff Office Fax Number',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingleCustom',
        name: 'departmentName',
        label: 'Department Name',
        required: true,
        options: 'stateOfPracticeList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingleCustom',
        name: 'divisionName',
        label: 'Division Name',
        required: false,
        options: 'stateOfPracticeList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'firstName',
        label: 'First Name',
        required: false
    },
    {
        size: 6,
        inputType: 'text',
        name: 'lastName',
        label: 'Last Name',
        required: false
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'unrestrictedPrivilegeFlag',
        label: 'Are/Were your privileges temporary?',
        required: false
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'privelegeTemporaryFlag',
        label: 'Are/Were your privileges temporary?',
        required: false
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'privillegeStatus',
        label: 'Privileges Status',
        required: true,
        options: 'privelegeStatusList'
    },
    {
        size: 6,
        inputType: 'checkbox',
        name: 'noLongerInBusinessFlag',
        label: 'No Longer in Business',
        required: false
    }
];

export default FacilityFields;
