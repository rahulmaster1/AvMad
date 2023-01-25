import * as React from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

interface MediaProps {
    loading?: boolean;
}

export default function LoadingForm(props: MediaProps) {
    const { loading = false } = props;

    if (loading) {
        return (
            <Card
                sx={{
                    fontSize: '1rem',
                    border: 'unset',
                    maxWidth: 1100,
                    margin: '20px auto'
                }}
            >
                <CardContent>
                    <React.Fragment>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={4}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={2}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={4}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={2}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                            <Grid item xs={6}>
                                <Skeleton animation="wave" height={52} width="100%" />
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </CardContent>
            </Card>
        );
    } else {
        return <></>;
    }
}
