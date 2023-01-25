import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Image = styled('img')({
    width: '100%'
});

function SkeletonChildrenDemo(props: { loading?: boolean }) {
    const { loading = false } = props;

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ margin: 1 }}>
                    <Skeleton variant="circular">
                        <Avatar />
                    </Skeleton>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Skeleton width="100%">
                        <Typography>.</Typography>
                    </Skeleton>
                </Box>
            </Box>
            <Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: '30%' }} />
            </Skeleton>
        </div>
    );
}

export default function SkeletonChildren() {
    return (
        <>
            <Skeleton variant="rectangular" width="100%">
                This page is under development
            </Skeleton>
            <Grid container spacing={8}>
                <Grid item xs>
                    <SkeletonChildrenDemo loading />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo />
                </Grid>
            </Grid>
            <Grid container spacing={8}>
                <Grid item xs>
                    <SkeletonChildrenDemo loading />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo />
                </Grid>
            </Grid>
        </>
    );
}
