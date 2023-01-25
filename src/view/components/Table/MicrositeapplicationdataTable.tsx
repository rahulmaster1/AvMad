import * as React from 'react';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
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
import { FaFileExcel } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import { FaMicrosoft } from 'react-icons/fa';
import { FaFileCsv } from 'react-icons/fa';
import { FaRecycle } from 'react-icons/fa';
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
    createData('700', 'Yes', 'Yes'),
    createData('701', 'Yes', 'Yes'),
    createData('702,', 'Yes', 'Yes'),
    createData('703','Yes', 'Yes'),
   

];

export default function AppTrackerPractitionerTable() {
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
            
            <Table sx={{ minWidth: 1200 }} 
            
            aria-label="custom pagination table">
             
                <TableHead>

                    <StyledTableRow >
                    
                        <StyledTableCell></StyledTableCell>

                        <StyledTableCell>View Summary</StyledTableCell>
                        <StyledTableCell>Entity ID</StyledTableCell>

                        <StyledTableCell>Agency Name</StyledTableCell>
                        <StyledTableCell>TIN</StyledTableCell>
                        <StyledTableCell>Primary Address ID</StyledTableCell>
                        <StyledTableCell>		Create Date</StyledTableCell>
                        <StyledTableCell>Update Date</StyledTableCell>

<StyledTableCell>NPI	</StyledTableCell>
<StyledTableCell>Is File Submitted	</StyledTableCell>

<StyledTableCell>File Submit Date</StyledTableCell>
<StyledTableCell>DBA Name</StyledTableCell>
<StyledTableCell>No NPI Reason</StyledTableCell>
<StyledTableCell>		Incorporation State</StyledTableCell>

<StyledTableCell>Counties Served</StyledTableCell>
<StyledTableCell>Electronic Claims</StyledTableCell>
<StyledTableCell>		Has License</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
                        (row) => (
                            <StyledTableRow key={row.practitionerName}>
                                 
                                 <StyledTableCell></StyledTableCell>

                                     <StyledTableCell component="th" scope="row">
                                    {row.practitionerName}
                                       </StyledTableCell>

                                <StyledTableCell>View Summary</StyledTableCell>
                                <StyledTableCell>4533	</StyledTableCell>
                                <StyledTableCell>Test	</StyledTableCell>
                                <StyledTableCell>123456789		</StyledTableCell>
                                <StyledTableCell>3153	</StyledTableCell>
                                <StyledTableCell>View Summary</StyledTableCell>
                                <StyledTableCell>4533	</StyledTableCell>
                                <StyledTableCell>Test	</StyledTableCell>
                                <StyledTableCell>123456789		</StyledTableCell>
                                <StyledTableCell>3153	</StyledTableCell>
                                <StyledTableCell>View Summary</StyledTableCell>
                                <StyledTableCell>4533	</StyledTableCell>
                                <StyledTableCell>Test	</StyledTableCell>
                                <StyledTableCell>123456789		</StyledTableCell>
                                <StyledTableCell>3153	</StyledTableCell>
                              
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
