import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#0971f1'
        },
        secondary: {
            main: '#fff'
        },
        divider: '#DDDDDD'
    },
    typography: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 12
    }
});
