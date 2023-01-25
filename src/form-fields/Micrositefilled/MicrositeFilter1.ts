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
        size: 6,
        inputType: 'text',
        name: 'goTo',
        label: 'TIN (no space or -)	',
        required: false,
        options: 'goToList'
    },
    {
        size: 6,
        inputType: 'text',
        name: 'goTo',
        label: 'Agency Name    ',
        required: false,
        options: 'goToList'
    },
   
];

export default MicrositeFilter2;
