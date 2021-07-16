import { FC } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    maxHeight: 700
  }
});

const StyledTableCell = withStyles((theme: any) => {
  return {
    head: {
      backgroundColor: theme.palette.info.light,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }
})(TableCell);

export const LogsTable: FC<any> = ({ items = [] }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table stickyHeader className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell align="left">Message</StyledTableCell>
            <StyledTableCell align="left">AdditionalInfo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row: any, index: number) => (
            <TableRow key={index}>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.text}</TableCell>
              <TableCell align="left">{row.additionalData}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
