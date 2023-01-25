import * as React from 'react';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

function createData(practitionerName: string, readyForDownload: string, inProccess: string) {
    return { practitionerName, readyForDownload, inProccess };
}

const rows = [
    createData('Aaby, A Arthur, MD', 'Yes', 'Yes'),
    createData('Abawag, Jessica, SLP', 'Yes', 'Yes'),
    createData('Abbrescia, Jessika, PA', 'Yes', 'Yes'),
    createData('Abdelshafy, Ahmed, PA', 'Yes', 'Yes'),
    createData('Abebe, Leah M, PA', 'Yes', 'Yes'),
    createData('Abendroth, Francena D, MD', 'Yes', 'Yes'),
    createData('Abolafia, Fallon, LMHC', 'Yes', 'Yes'),
    createData('Abraham, Richard M, MD', 'Yes', 'Yes'),
    createData('Abuhl, Olivia Louise Gabriella, PA', 'Yes', 'Yes'),
    createData('Acevedo, Humberto, DC', 'Yes', 'Yes'),
    createData('Acheson, Karen, Other', 'Yes', 'Yes'),
    createData('Acosta-Drake, Caroline, LMT', 'Yes', 'Yes'),
    createData('Acra, Haley Marie, LMHC', 'Yes', 'Yes'),

    createData('Adams, Claire, DT', 'Yes', 'Yes'),
    createData('Adams, Curtis, MD', 'Yes', 'Yes'),
    createData('Adams, Kurt M, DC', 'Yes', 'Yes'),
    createData('Aiken, James, PT', 'Yes', 'Yes'),
    createData('Ainslie, Timothy, PT', 'Yes', 'Yes'),
    createData('Akin, Krystal, LMHC', 'Yes', 'Yes'),
    createData('Alba, Deborah Wagner, NMW', 'Yes', 'Yes'),
    createData('Albert, Matthew Vincent, LMHC', 'Yes', 'Yes'),
    createData('Albright, Jeffrey John, DC', 'Yes', 'Yes'),
    createData('Alderson, Patricia A, Other', 'Yes', 'Yes'),
    createData('Alexander, Miriam, OT', 'Yes', 'Yes'),
    createData('Alexander, Sarah leslie, LMHC', 'Yes', 'Yes'),
    createData('Alford, Seth, NP', 'Yes', 'Yes')
];

export default function ManageClientTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Client Organization</StyledTableCell>
                        <StyledTableCell>Current Client Organization</StyledTableCell>
                        <StyledTableCell>Encompass ID</StyledTableCell>
                        <StyledTableCell>Practitioner Name</StyledTableCell>
                        <StyledTableCell>Verification Status</StyledTableCell>
                        <StyledTableCell>Department/Division</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell>Image Management</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
                        (row) => (
                            <StyledTableRow key={row.practitionerName}>
                                <StyledTableCell component="th" scope="row">
                                    First Choice Health Network
                                </StyledTableCell>
                                <StyledTableCell>FCH</StyledTableCell>
                                <StyledTableCell>74097</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    Abawag, Jessica , SLP
                                </StyledTableCell>
                                <StyledTableCell>Completed</StyledTableCell>
                                <StyledTableCell>N/A</StyledTableCell>
                                <StyledTableCell>N/A</StyledTableCell>
                                <StyledTableCell>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Button variant="contained" component="label">
                                            Upload
                                            <input hidden accept="image/*" multiple type="file" />
                                        </Button>
                                        <Button variant="contained" component="label" color="success">
                                            View
                                        </Button>
                                    </Stack>
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    )}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={12}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page'
                                },
                                native: true
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
