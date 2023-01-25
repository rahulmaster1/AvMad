import React from 'react';

import CustomInput from '.';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Chip, Divider, Grid, IconButton, Typography } from '@mui/material';
import { useFieldArray } from 'react-hook-form';

const NestedFieldArrayMultiple = ({
    control,
    fieldProps,
    options,
    fieldArrayName,
    title,
    defaultValue
}: {
    control: any;
    fieldProps: any;
    options?: any;
    fieldArrayName: string;
    title: string;
    defaultValue: any;
}) => {
    const { fields, remove, append } = useFieldArray({
        control,
        name: fieldArrayName
    });

    return (
        <>
            {fields.map((item, index) => {
                return (
                    <div key={item.id}>
                        {index === 0 && (
                            <Typography textAlign="right" sx={{ m: '0px' }}>
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    onClick={() => {
                                        console.log(defaultValue);
                                        append(defaultValue);
                                    }}
                                >
                                    Add {`${title}`}
                                </Button>
                            </Typography>
                        )}
                        <Divider sx={{ m: '20px' }}>
                            <Chip label={`${title} ${index + 1}`} />
                        </Divider>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                mt: 0
                            }}
                        >
                            {fieldProps.map((field: any) => (
                                <Grid item xs={field.size} key={field.name}>
                                    <CustomInput
                                        control={control}
                                        fieldProps={field}
                                        name={`${fieldArrayName}[${index}].${field.name}`}
                                        options={options[field.options as keyof typeof options]}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Typography textAlign="right" sx={{ m: '10px 0' }}>
                            <Button
                                variant="contained"
                                startIcon={<DeleteIcon />}
                                disabled={fields.length == 1}
                                onClick={() => {
                                    remove(index);
                                }}
                            >
                                Remove {`${title}`}
                            </Button>
                        </Typography>
                    </div>
                );
            })}
        </>
    );
};

export default NestedFieldArrayMultiple;
