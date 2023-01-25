import CustomInput from '.';
import { Grid } from '@mui/material';
import { useWatch } from 'react-hook-form';

const ConditionField = ({
    control,
    index,
    watchName,
    fieldProps,
    name,
    conditionBasis,
    operation
}: {
    control: any;
    index?: number;
    watchName: string;
    fieldProps: any;
    name: string;
    conditionBasis: any;
    operation: string;
}) => {
    const output = useWatch<any>({
        name: watchName,
        control
    });
    if (operation == 'equal') {
        if (conditionBasis == output) {
            return (
                // <Grid container sx={{ m: 1 }}>
                //     <Grid item key={index} sx={12}>
                <CustomInput control={control} fieldProps={fieldProps} name={name} />
                //     </Grid>
                // </Grid>
            );
        } else {
            return <></>;
        }
    } else if (operation == 'notEqual') {
        if (conditionBasis != output && output !== null) {
            return (
                // <Grid container sx={{ m: 1 }}>
                //     <Grid item key={index} sx={12}>
                <CustomInput control={control} fieldProps={fieldProps} name={name} />
                //     </Grid>
                // </Grid>
            );
        } else {
            return <></>;
        }
    } else {
        return <></>;
    }
};
export default ConditionField;
