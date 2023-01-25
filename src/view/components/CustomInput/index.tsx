import React from 'react';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, Checkbox, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Controller, useForm } from 'react-hook-form';

import stateOfPracticeList from 'form-fields/general-information/form-list/stateOfPracticeList';

interface fieldPropsInterface {
    inputType: string;
    label: string;
    required: boolean;
    disabled?: boolean;
}

interface CustomInputProps {
    control: any;
    fieldProps: fieldPropsInterface;
    name: string;
    options?: any;
    onChangeCustom?: any;
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

const CustomInput: React.FC<CustomInputProps> = ({ control, fieldProps, options, name, onChangeCustom }) => {
    const { inputType, label, required, disabled = false } = fieldProps;
    switch (inputType) {
        case 'text':
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={label}
                            variant="outlined"
                            fullWidth
                            required={required}
                            disabled={disabled}
                        />
                    )}
                />
            );

        case 'textMultiline':
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={label}
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                            required={required}
                            disabled={disabled}
                        />
                    )}
                />
            );

        case 'autoCompleteSingle':
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Autocomplete
                            {...field}
                            disablePortal
                            options={options}
                            disabled={disabled}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            renderInput={(params) => <TextField {...params} label={label} required={required} />}
                            onChange={
                                onChangeCustom
                                    ? onChangeCustom
                                    : (event, data) => {
                                          field.onChange(data);
                                      }
                            }
                        />
                    )}
                />
            );

        case 'autoCompleteSingleCustom':
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Autocomplete
                            {...field}
                            freeSolo
                            disableClearable
                            options={options}
                            disabled={disabled}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            onChange={
                                onChangeCustom
                                    ? onChangeCustom
                                    : (event, data) => {
                                          field.onChange(data);
                                      }
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                                        field.onChange(event.target.value)
                                    }
                                    label={label}
                                    required={required}
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search'
                                    }}
                                />
                            )}
                        />
                    )}
                />
            );

        case 'autoCompleteMultiple':
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Autocomplete
                            {...field}
                            multiple
                            disableCloseOnSelect
                            options={options}
                            disabled={disabled}
                            onChange={(event, data) => field.onChange(data)}
                            getOptionLabel={(option) => option.label}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                        required={required}
                                    />
                                    {option.label}
                                </li>
                            )}
                            renderInput={(params) => <TextField {...params} label={label} />}
                        />
                    )}
                />
            );

        case 'switch':
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <FormControlLabel
                            control={<Switch {...field} checked={field.value} />}
                            label={label}
                            disabled={disabled}
                        />
                    )}
                />
            );

        case 'date':
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                {...field}
                                onChange={(event, data) => {
                                    field.onChange(event);
                                }}
                                label={label}
                                inputFormat="MM/dd/yyyy"
                                renderInput={(params) => (
                                    <TextField {...params} fullWidth required={required} disabled={disabled} />
                                )}
                            />
                        </LocalizationProvider>
                    )}
                />
            );

        case 'checkbox':
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox {...field} />}
                                checked={field.value}
                                label={label}
                                disabled={disabled}
                            />
                        </FormGroup>
                    )}
                />
            );

        default:
            return <p>'Invalid input type'</p>;
    }
};

export default CustomInput;
