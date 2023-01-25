import CheckBox from "@mui/icons-material/CheckBox";
import { Input } from "@mui/material";
import { divide, dropRight } from "lodash";

export interface NamePrimaryBaseFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
    textAlign:string;
    
}

const NamePrimaryBaseFieldCDSFields = [
   
    {
        size: 6,
        inputType: 'text',
        name: 'nopb',
        label: 'Name of Primary Base',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'division',
        label: 'Division',
        required: true
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'primarybLoc',
        label: 'Primary Base Location',
        required: true,
        options: 'baseLocation'
        

    },
    
   
];

export default NamePrimaryBaseFieldCDSFields;
