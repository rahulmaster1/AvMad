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
        size: 4,
        inputType: 'text',
        name: 'branchofService',
        label: 'First Name',
        required: true,
        options: 'branchList'

    },
    {
        size: 4,
        inputType: 'text',
        name: 'miltryRank',
        label: 'Middle Name',
        required: true
    },
    {
        size: 4,
        inputType: 'text',
        name: 'miltryRank',
        label: 'Last     Name',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'enlistDate',
        label: 'Degree',
        required: true
    },

    {
        size: 6,
        inputType: 'text',
        name: 'discharge',
        label: '   NPI Number  ',
        required: true
    },
    {
        size: 12,
        inputType: 'autoCompleteSingle',
        name: 'branchofService',
        label: 'Specialty        ',
        required: true,
        options: 'branchList'

    },

    
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'branchofService',
        label: 'Primary License State',
        required: true,
        options: 'branchList'

    },
   
    {
        size: 6,
        inputType: 'text',
        name: 'discharge',
        label: 'Primary License Number',
        required: true
    },
    
    {
        size: 8,
        inputType: 'text',
        name: 'discharge',
        label: 'Primary License Type',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'discharge',
        label: 'Address Line 1',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'discharge',
        label: 'Address Line 2',
        required: true
    },
    {
        size: 6,
        inputType: 'text',
        name: 'discharge',
        label: 'City ',
        required: true
    },{
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'state',
        label: 'State',
        required: true,
        options: 'stateOfPracticeList'

    },
    {
        size: 8,
        inputType: 'text',
        name: 'discharge',
        label: 'Zip Code ',
        required: true
    },
    
    {
        size: 5,
        inputType: 'text',
        name: 'discharge',
        label: 'Telephone Number ',
        required: true
    },
    {
        size: 2,
        inputType: 'text',
        name: 'discharge',
        label: 'Ext ',
        required: true
    },
    {
        size: 5,
        inputType: 'text',
        name: 'discharge',
        label: 'Fax Number ',
        required: true
    },
    {
        size: 8,
        inputType: 'text',
        name: 'discharge',
        label: 'Email Address ',
        required: true
    },
    {
        size: 8,
        inputType: 'textMultiline',
        name: 'discharge',
        label: 'Please explain your coverage arrangement.',
        required: true

    },
    
];

export default CDSFields;
