import React, { useState } from 'react'
import useCart from '../../hooks/useCart';
import { CircularProgress, Box, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, TableFooter, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import useCheckout from '../../hooks/useCheckout';

export default function Checkout() {


  const { data, isLoading, isError, error } = useCart();
  const { mutate: checkout, isPending: checkoutPending } = useCheckout();
  const [PaymentMethod, setPaymentMethod] = useState('Cash');

  if (isLoading) {
    return <CircularProgress sx={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
  }


  if (isError) {
    return <Box color={'red'}>{error.message}</Box>
  }


  return (

    <Box component={'section'} className='cartItem' py={5}>
      <Typography variant='h3' component={'h3'}>My Cart</Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>

          {
            data.items?.length > 0 ?
              (<>
                  <TableBody>
                    {data.items.map(item => (
                      <TableRow key={item.productId}>
                        <TableCell>{item.productName}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>
                          {item.count}
                        </TableCell>
                        <TableCell>{item.totalPrice}</TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3} sx={{ fontWeight: 800, fontSize: '16px' }}>
                        Total
                      </TableCell>
                      <TableCell sx={{ fontWeight: 800, fontSize: '16px' }}>
                        {data.cartTotal}$
                      </TableCell>
                    </TableRow>
                  </TableFooter>

                </>
              )
              :
              (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={5} rowSpan={5} sx={{ textAlign: 'center', fontSize: '40px', color: 'gray', userSelect: 'none' }}>
                      Cart is Empty
                    </TableCell>
                  </TableRow>
                </TableBody>
              )
          }
        </Table>
      </TableContainer>
      {
        {
          data.items?.length > 0 && (
          <Box sx={{display:'flex',flexDirection:'column', gap:2}}>              <InputLabel id="PaymentMethod">Payment Method</InputLabel>
              <Select
                labelId="PaymentMethod"
                id="PaymentMethod"
                value={PaymentMethod}
                label="Payment Method"
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <MenuItem value={'Visa'}>Visa</MenuItem>
                <MenuItem value={'Cash'}>Cash</MenuItem>
              </Select>
            </FormControl>
            <Button variant='contained' onClick={()=>checkout(PaymentMethod)} disabled={checkoutPending}>Checkout</Button>
          </Box>
        )
      }
    </Box>

  )
}
