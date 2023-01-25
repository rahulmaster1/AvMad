import CheckBox from "@mui/icons-material/CheckBox";
import { Input } from "@mui/material";
import { divide, dropRight } from "lodash";

export interface DEAFieldsProps {
    size: number;
    inputType: 'string';
    name: 'string';
    label: 'string';
    required: boolean;
    options?: string;
    textAlign:string;
    
}

const CDSFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'branchofService',
        label: 'Branch Of Service',
        required: true,
        options: 'branchList'

    },
    {
        size: 6,
        inputType: 'text',
        name: 'miltryRank',
        label: 'Military Rank at Time of Discharge/Current',
        required: true
    },
    {
        size: 6,
        inputType: 'date',
        name: 'enlistDate',
        label: 'Enlist Date (MM/DD/YYYY)',
        required: true
    },

    {
        size: 6,
        inputType: 'date',
        name: 'discharge',
        label: 'Discharge Date (MM/DD/YYYY)',
        required: true
    },
   
   
];

export default CDSFields;
