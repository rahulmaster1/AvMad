export interface ManagePractitionerFilter2FieldsProps {
    size: number;
    inputType: string;
    name: string;
    label: string;
    required: boolean;
    options?: string;
}

const ManagePractitionerFilter2Fields = [
    {
        size: 6,
        inputType: 'text',
        name: 'goTo',
        label: '	',
        required: false,
        options: 'goToList'
    },
   
];

export default ManagePractitionerFilter2Fields;
