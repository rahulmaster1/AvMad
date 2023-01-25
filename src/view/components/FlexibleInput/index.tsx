import React from 'react';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, Checkbox, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FastField } from 'formik';

interface FlexibleInputProps {
    inputType: 'text' | 'checkbox' | 'autoCompleteSingle' | 'autoCompleteMultiple' | 'datePicker' | string;
    name: string;
    value: string | number | Date | undefined | [string] | any;
    defaultValue?: string | number | Date | [string];
    onChange: any;
    label: string;
    required: boolean;
    options?: any;
    getOptionLabel?: any;
}

interface FieldProps {
    field: {
        name: string;
        value: string | number | Date | any;
        onChange: any;
    };
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const FlexibleInput: React.FC<FlexibleInputProps> = ({
    inputType,
    name,
    value,
    onChange,
    label,
    required,
    options,
    getOptionLabel
}) => {
    switch (inputType) {
        case 'text':
            return (
                <FastField name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <TextField
                                {...field}
                                value={value}
                                onChange={onChange}
                                label={label}
                                variant="outlined"
                                fullWidth
                                required={required}
                            />
                        );
                    }}
                </FastField>
            );

        case 'textMultiline':
            return (
                <FastField name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <TextField
                                {...field}
                                value={value}
                                onChange={onChange}
                                label={label}
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                required={required}
                            />
                        );
                    }}
                </FastField>
            );

        case 'autoCompleteSingle':
            return (
                <FastField name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <Autocomplete
                                {...field}
                                disablePortal
                                options={options}
                                onChange={onChange}
                                renderInput={(params) => <TextField {...params} label={label} required={required} />}
                            />
                        );
                    }}
                </FastField>
            );

        case 'autoCompleteMultiple':
            return (
                <FastField name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <Autocomplete
                                {...field}
                                multiple
                                options={options}
                                value={value}
                                onChange={onChange}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option}
                                renderOption={(props, option, { selected }) => (
                                    <li {...props}>
                                        <Checkbox
                                            icon={icon}
                                            checkedIcon={checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                            // onChange={(e) => {
                                        />
                                        {option}
                                    </li>
                                )}
                                renderInput={(params) => <TextField {...params} label={label} value={value} />}
                            />
                        );
                    }}
                </FastField>
            );

        case 'switch':
            return (
                <FastField name={name}>
                    {({ field }: FieldProps) => {
                        return <FormControlLabel control={<Switch {...field} checked={value} />} label={label} />;
                    }}
                </FastField>
            );

        case 'date':
            return (
                <FastField name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    {...field}
                                    onChange={onChange}
                                    label={label}
                                    inputFormat="MM/dd/yyyy"
                                    renderInput={(params) => (
                                        <TextField name={name} fullWidth {...params} required={required} />
                                    )}
                                />
                            </LocalizationProvider>
                        );
                    }}
                </FastField>
            );

        case 'checkbox':
            return (
                <FastField name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <FormGroup>
                                <FormControlLabel control={<Checkbox {...field} />} checked={value} label={label} />
                            </FormGroup>
                        );
                    }}
                </FastField>
            );

        default:
            return (
                <TextField
                    name={name}
                    value={value}
                    onChange={onChange}
                    label={label}
                    variant="outlined"
                    fullWidth
                    required={required}
                />
            );
    }
};

export default FlexibleInput;
