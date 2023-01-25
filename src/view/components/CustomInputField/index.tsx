import React, { ChangeEvent, useEffect, useState } from 'react';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, Checkbox, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Field } from 'formik';

interface fieldPropsInterface {
    inputType: string;
    label: string;
    required: boolean;
}

interface CustomInputProps {
    formProps: any;
    fieldProps: fieldPropsInterface;
    name: string;
    value: string | number | Date | undefined | [string] | any;
    options?: any;
    onChangeCustom?: any;
    _inputType?: string;
    _label?: string;
    _required?: boolean;
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

const CustomInputField: React.FC<CustomInputProps> = ({
    formProps,
    fieldProps,
    value,
    options,
    name,
    onChangeCustom,
    _inputType,
    _label,
    _required
}) => {
    const { inputType, label, required } = fieldProps;
    const { setFieldValue } = formProps;
    const [tempValue, setTempValue] = useState(value);
    useEffect(() => {
        setTempValue(value);
    }, [value]);
    switch (inputType) {
        case 'text':
            return (
                <Field name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <TextField
                                {...field}
                                value={tempValue}
                                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                                    setTempValue(event.target.value);
                                }}
                                onBlur={() => {
                                    setFieldValue(name, tempValue);
                                }}
                                label={label}
                                variant="outlined"
                                fullWidth
                                required={required}
                            />
                        );
                    }}
                </Field>
            );

        case 'textMultiline':
            return (
                <Field name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <TextField
                                {...field}
                                value={tempValue}
                                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                                    setTempValue(event.target.value);
                                }}
                                onBlur={() => {
                                    setFieldValue(name, tempValue);
                                }}
                                label={label}
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                required={required}
                            />
                        );
                    }}
                </Field>
            );

        case 'autoCompleteSingle':
            return (
                <Field name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <Autocomplete
                                {...field}
                                disablePortal
                                value={onChangeCustom ? value : tempValue}
                                options={options}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                onChange={
                                    onChangeCustom
                                        ? onChangeCustom
                                        : (event: React.SyntheticEvent<Element, Event>, value) => {
                                              setFieldValue(name, value);
                                              setTempValue(value);
                                          }
                                }
                                renderInput={(params) => <TextField {...params} label={label} required={required} />}
                            />
                        );
                    }}
                </Field>
            );

        case 'autoCompleteMultiple':
            return (
                <Field name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <Autocomplete
                                {...field}
                                multiple
                                options={options}
                                value={tempValue}
                                onChange={(event: React.SyntheticEvent<Element, Event>, value) => {
                                    setTempValue(value);
                                    setFieldValue(name, value);
                                    console.log(value);
                                }}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.label}
                                renderOption={(props, option, { selected }) => (
                                    <li {...props}>
                                        <Checkbox
                                            icon={icon}
                                            checkedIcon={checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.label}
                                    </li>
                                )}
                                renderInput={(params) => <TextField {...params} label={label} value={value} />}
                            />
                        );
                    }}
                </Field>
            );

        case 'switch':
            return (
                <Field name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <FormControlLabel
                                control={
                                    <Switch
                                        {...field}
                                        checked={value}
                                        value={value}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>, value) => {
                                            setFieldValue(name, event.target.checked);
                                        }}
                                    />
                                }
                                label={label}
                            />
                        );
                    }}
                </Field>
            );

        case 'date':
            return (
                <Field name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    {...field}
                                    value={tempValue}
                                    onChange={(event, value) => {
                                        setTempValue(event !== null ? event.toString() : event);
                                        setFieldValue(name, event !== null ? event.toString() : event);
                                        console.log(event);
                                    }}
                                    label={label}
                                    inputFormat="MM/dd/yyyy"
                                    renderInput={(params) => (
                                        <TextField {...params} name={name} fullWidth required={required} />
                                    )}
                                />
                            </LocalizationProvider>
                        );
                    }}
                </Field>
            );

        case 'checkbox':
            return (
                <Field name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <FormGroup>
                                <FormControlLabel control={<Checkbox {...field} />} checked={value} label={label} />
                            </FormGroup>
                        );
                    }}
                </Field>
            );

        default:
            return (
                <Field name={name}>
                    {({ field }: FieldProps) => {
                        return (
                            <TextField
                                {...field}
                                value={tempValue}
                                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                                    setTempValue(event.target.value);
                                }}
                                onBlur={() => {
                                    setFieldValue(name, tempValue);
                                }}
                                label={_label}
                                variant="outlined"
                                fullWidth
                                required={_required}
                            />
                        );
                    }}
                </Field>
            );
    }
};

export default CustomInputField;
