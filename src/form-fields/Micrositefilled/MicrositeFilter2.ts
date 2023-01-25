export interface MicrositeFilter2Props {
    size: number;
    inputType: string;
    name: string;
    label: string;
    required: boolean;
    options?: string;
}

const MicrositeFilter2 = [
    {
        size: 4,
        inputType: 'text',
        name: 'goTo',
        label: 'SSN (no space or -)	',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'text',
        name: 'goTo',
        label: 'First Name	',
        required: false,
        options: 'goToList'
    },
    {
        size: 4,
        inputType: 'text',
        name: 'goTo',
        label: 'Last Name',
        required: false,
        options: 'goToList'
    }
];

export default MicrositeFilter2;
