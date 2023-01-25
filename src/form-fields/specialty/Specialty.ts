export interface SpecialtyFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
}

const SpecialtyFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'ranking',
        label: 'Ranking',
        required: true,
        options: 'rankingList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'specialty',
        label: 'Specialty',
        required: true,
        options: 'specialtyList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'ppoDirectoryFlag',
        label: 'Do you wish to be listed in the PPO Directory under this specialty?',
        required: true,
        options: 'conditionList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'posDirectoryFlag',
        label: 'Do you wish to be listed in the POS Directory under this specialty?',
        required: true,
        options: 'conditionList'
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'providerDirectoryFlag',
        label: 'Do you wish to be listed in the Provider Directory under this specialty?',
        required: true
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'hmoDirectoryFlag',
        label: 'Do you wish to be listed in the HMO Directory under this specialty?',
        required: false
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'certifiedByAnyBoardFlag',
        label: 'Are/Were you certified by any board in this specialty?',
        required: true
    },
    {
        size: 6,
        inputType: 'switch',
        name: 'eligibleTobeCertifiedFlag',
        label: 'Are you eligible to be certified in this specialty?',
        required: true
    }
];

export default SpecialtyFields;
