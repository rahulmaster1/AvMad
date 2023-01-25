export interface ClientPortalVRCFieldsProps {
    size: number;
    inputType: string;
    name: string;
    label: string;
    required: boolean;
    options?: string;
}

const ClientPortalVRCFields = [
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'providerType',
        label: 'Provider Type',
        required: false,
        options: 'primaryPractitionerTypeList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'reviewLevel',
        label: 'Review Level',
        required: false,
        options: 'reviewLevelList'
    },
    {
        size: 2,
        inputType: 'date',
        name: 'psvCompletedDateFrom',
        label: 'PSV Completed Date(From)',
        required: false
    },
    {
        size: 2,
        inputType: 'date',
        name: 'psvCompletedDateTo',
        label: 'PSV Completed Date(To)',
        required: false
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'specialty',
        label: 'Specialty',
        required: false,
        options: 'primaryPractitionerTypeList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'credCycle',
        label: 'Cred Cycle',
        required: false,
        options: 'credCycleList'
    },
    {
        size: 2,
        inputType: 'date',
        name: 'reviewDateFrom',
        label: 'Committee Date(From)',
        required: false
    },
    {
        size: 2,
        inputType: 'date',
        name: 'reviewDateTo',
        label: 'Committee Date(To)',
        required: false
    },
    {
        size: 3,
        inputType: 'text',
        name: 'firstName',
        label: 'First Name',
        required: false
    },
    {
        size: 3,
        inputType: 'text',
        name: 'lastName',
        label: 'Last Name',
        required: false
    },
    {
        size: 2,
        inputType: 'autoCompleteSingle',
        name: 'idType',
        label: 'ID Type',
        required: false,
        options: 'idTypeList'
    },
    {
        size: 2,
        inputType: 'date',
        name: 'committeeDateFrom',
        label: 'Review Date(From)',
        required: false
    },
    {
        size: 2,
        inputType: 'date',
        name: 'committeeDateTo',
        label: 'Review Date(To)',
        required: false
    }
];

export default ClientPortalVRCFields;
