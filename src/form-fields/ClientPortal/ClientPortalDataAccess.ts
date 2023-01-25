export interface ClientPortalDataAccessFieldsProps {
    size: number;
    inputType: string;
    name: string;
    label: string;
    required: boolean;
    options?: string;
}

const ClientPortalDataAccessFields = [
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'searchType',
        label: 'Search Type ',
        required: false,
        options: 'searchTypeList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'clientname',
        label: 'Client Name',
        required: false,
        options: 'clientNameList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'source',
        label: 'Source',
        required: false,
        options: 'sourceList'
    },
    {
        size: 4,
        inputType: 'text',
        name: 'firstName',
        label: 'First Name',
        required: false
    },
    {
        size: 4,
        inputType: 'text',
        name: 'lastName',
        label: 'Last Name',
        required: false
    },
    {
        size: 4,
        inputType: 'date',
        name: 'fromAttestDate',
        label: 'From Attest Date',
        required: false
    },
    {
        size: 4,
        inputType: 'date',
        name: 'toAttestDate',
        label: 'To Attest Date',
        required: false
    },
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
        name: 'specialty',
        label: 'Specialty',
        required: false,
        options: 'primaryPractitionerTypeList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'psvFlag',
        label: 'PSV Flag',
        required: false,
        options: 'psvFlagList'
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
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'credStatus',
        label: 'Cred Status',
        required: false,
        options: 'credStatusList'
    },
    {
        size: 4,
        inputType: 'autoCompleteSingle',
        name: 'vrcStatus',
        label: 'VRC Status',
        required: false,
        options: 'vrcStatusList'
    }
];

export default ClientPortalDataAccessFields;
