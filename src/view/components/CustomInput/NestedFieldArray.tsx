import React from 'react';

import CustomInput from '.';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import { useFieldArray } from 'react-hook-form';

const NestedFieldArray = ({
    nestIndex,
    control,
    fieldProps,
    name,
    options,
    fieldArrayName
}: {
    nestIndex: number;
    control: any;
    fieldProps: any;
    name: string;
    options?: any;
    fieldArrayName: string;
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
                            <Typography textAlign="left" sx={{ m: '0px' }}>
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    onClick={() =>
                                        append({
                                            recertificationDate: null
                                        })
                                    }
                                >
                                    Add Recertification Date
                                </Button>
                            </Typography>
                        )}
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                mt: 0
                            }}
                        >
                            <Grid item xs={6}>
                                <CustomInput
                                    control={control}
                                    fieldProps={fieldProps}
                                    name={`${fieldArrayName}[${index}].${name}`}
                                    options={options}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={2}
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <IconButton
                                    color="primary"
                                    component="label"
                                    disabled={fields.length == 1}
                                    onClick={() => {
                                        remove(index);
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                );
            })}
        </>
    );
};

export default NestedFieldArray;
