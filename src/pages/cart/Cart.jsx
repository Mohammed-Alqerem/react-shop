import useCart from '../../hooks/useCart';
import { CircularProgress, Box, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Button, TableFooter } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';

import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import { useNavigate } from 'react-router-dom';

export default function Cart() {

  const { data, isLoading, isError, error } = useCart();
  const navigate = useNavigate();

  const { mutate: removeItem, isPending: isPendingRemove } = useRemoveFromCart();
  const { mutate: updateItem, isPending: isPendingUpdate } = useUpdateCartItem();


  if (isLoading) {
    return <CircularProgress sx={ { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } } />
  }


  if (isError) {
    return <Box color={ 'red' }>{ error.message }</Box>
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
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          {
            data.items.length > 0 ?
              (
                <>
                  <TableBody>
                    {data.items.map(item => (
                      <TableRow key={item.productId}>
                        <TableCell>{item.productName}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() => updateItem({ productId: item.productId, newCount: item.count - 1 })}
                              disabled={item.count <= 1 || isPendingUpdate}
                            >
                              -
                            </Button>
                            <Typography>{item.count}</Typography>
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() => updateItem({ productId: item.productId, newCount: item.count + 1 })}
                              disabled={isPendingUpdate}
                            >
                              +
                            </Button>
                          </Box>
                        </TableCell>
                        <TableCell>{item.totalPrice}</TableCell>
                        <TableCell>
                          <Button color='error' variant='contained' onClick={() => removeItem(item.productId)} disabled={isPendingRemove}>{isPendingRemove ? 'Removing...' : 'Remove'}</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={4} sx={{ fontWeight: 800, fontSize: '16px' }}>
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
        data.items.length > 0 && (
          <Box sx={{ display: 'flex', gap: 2, py: 3 }}>
            <Button sx={{ flexGrow: 1 }} variant='contained' color='success' onClick={() => navigate('/checkout')}>Checkout</Button>
            <Button sx={{ flexGrow: 1 }} variant='contained' color='primary' onClick={() => navigate('/')}>Continue Shopping</Button>

          </Box>
        )
      }

    </Box>
  )
}





