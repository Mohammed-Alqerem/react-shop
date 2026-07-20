import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useProfile from '../../hooks/useProfile';
import { useState } from 'react';
import { Alert, Box, Chip, Typography } from '@mui/material';
import OrdersTableSkeleton from '../../ui/Skeleton/OrdersTableSkeleton';






export default function ColumnGroupingTable() {
  const { data, isError, isLoading, error } = useProfile();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  if (isLoading) {
    return <OrdersTableSkeleton />;
  }
  if (isError) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (

    <Box>
      <Box sx={{mb:3,display:'flex',gap:2,flexDirection:'column'}}>
        <Typography variant='h4' component={ 'h2' }>Order History</Typography>
        <Typography variant='body2' sx={{color:'secondary.main'}}>Manage and track your recent and past purchases from Stride</Typography>
      </Box>
      <Paper sx={ { width: '100%' } }>
        <TableContainer sx={ { maxHeight: 440 } }>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" >
                  Id
                </TableCell>
                <TableCell align="center" >
                  Amount Paid
                </TableCell>


                <TableCell align="center" >
                  Payment Status
                </TableCell>



                <TableCell align="center" >
                  Status
                </TableCell>


                <TableCell align="center" >
                  Order Date
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              { data?.orders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((orders) => <TableRow>

                  <TableCell hover>
                    { orders?.id }
                  </TableCell>
                  <TableCell hover>
                    { orders?.amountPaid }
                  </TableCell>
                  <TableCell hover>
                    { orders?.paymentStatus == null ?  <Chip label='N / F' color='error'/> : orders?.paymentStatus == 'unpaid' ? <Chip label={orders?.paymentStatus} color='info' /> :<Chip label={orders?.paymentStatus} color='success' /> }
                  </TableCell>
                  <TableCell hover>

                    { orders?.status == 1 ? <Chip label="Pending" color="#fff000" /> : orders?.status == 2 ? <Chip label="Canceled" color="error" />  : orders?.status == 3 ? <Chip label='Approved' color="success" /> : orders?.status == 4 ? <Chip label="Shipping" color="info" />  : orders?.status == 5 ?  <Chip label="Delivered" color="success" /> : <Chip label="Pending" color="default" /> }
                  </TableCell>
                  <TableCell hover>
                    { new Date(orders?.orderDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) }
                  </TableCell>
                </TableRow>
                ) }

            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={ [5, 10, 20] }
          component="div"
          count={ data?.orders.length }
          rowsPerPage={ rowsPerPage }
          page={ page }
          onPageChange={ handleChangePage }
          onRowsPerPageChange={ handleChangeRowsPerPage }
        />
      </Paper>
    </Box>

  );
}
