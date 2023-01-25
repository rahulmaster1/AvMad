import CheckBox from "@mui/icons-material/CheckBox";
import { Input } from "@mui/material";
import { divide, dropRight } from "lodash";

export interface DEACHECKFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
    textAlign:string;
    
}
const DeaCheckField = [
    {
        size: 6,
        inputType: 'checkbox',
        name: 'current',
        label: 'current',
        required: true,

    },

   
];

export default DeaCheckField;
