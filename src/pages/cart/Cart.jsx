import useCart from '../../hooks/useCart';
import { CircularProgress, Box, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Button, TableFooter, Container, Breadcrumbs, Link, Divider, Grid, TextField } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';

import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LockIcon from '@mui/icons-material/Lock';
import useClearCart from '../../hooks/useClearCart';

export default function Cart() {

  const { t } = useTranslation();

  const { data, isLoading, isError, error } = useCart();
  const navigate = useNavigate();

  const { mutate: removeItem, isPending: isPendingRemove } = useRemoveFromCart();
  const { mutate: updateItem, isPending: isPendingUpdate } = useUpdateCartItem();
  const { mutate: clearCart, isPending: isPendingClear } = useClearCart();


  if (isLoading) {
    return <CircularProgress sx={ { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } } />
  }


  if (isError) {
    return <Box color={ 'red' }>{ error.message }</Box>
  }



  return (
    <Box component={ 'section' } className='cartItem' py={ 5 }>
      <Box sx={ { py: 5, backgroundColor: 'background.default' } }>
        <Container>
          <Breadcrumbs aria-label="breadcrumb">
            <Link component={ RouterLink } underline="hover" color='gray' to="/">
              { t('Home') }
            </Link>
            <Typography
              color="text.primary"
              fontWeight={ 600 }
            >
              { t('Shopping Cart') }
            </Typography>
          </Breadcrumbs>
          <Typography variant='h4' component='h2' fontWeight={ 900 } py={ 3 } color='text.primary'>{ t('Shopping Cart') }</Typography>

        </Container>


      </Box>


      <Container>
        <Divider sx={ { mb: 5 } } />

        <Grid container spacing={ 3 } >
          <Grid item size={ { xs: 12, md: 8 } }>
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
                          { data.items.map(item => (
                            <TableRow key={ item.productId }>
                              <TableCell>{ item.productName }</TableCell>
                              <TableCell>{ item.price }</TableCell>
                              <TableCell>
                                <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={ () => updateItem({ productId: item.productId, newCount: item.count - 1 }) }
                                    disabled={ item.count <= 1 || isPendingUpdate }
                                  >
                                    -
                                  </Button>
                                  <Typography>{ item.count }</Typography>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={ () => updateItem({ productId: item.productId, newCount: item.count + 1 }) }
                                    disabled={ isPendingUpdate }
                                  >
                                    +
                                  </Button>
                                </Box>
                              </TableCell>
                              <TableCell>{ item.totalPrice }</TableCell>
                              <TableCell>
                                <Button color='error' variant='contained' onClick={ () => removeItem(item.productId) } disabled={ isPendingRemove }>{ isPendingRemove ? 'Removing...' : 'Remove' }</Button>
                              </TableCell>
                            </TableRow>
                          )) }
                        </TableBody>
                        <TableFooter>
                          <TableRow>
                            <TableCell colSpan={ 4 } sx={ { fontWeight: 800, fontSize: '16px' } }>
                              Total
                            </TableCell>
                            <TableCell sx={ { fontWeight: 800, fontSize: '16px' } }>
                              { data.cartTotal }$
                            </TableCell>

                          </TableRow>
                          <TableRow>
                            <TableCell colSpan={ 4 } sx={ { fontWeight: 800, fontSize: '16px' } }>
                              <Button sx={ { flexGrow: 1 } } variant='contained' color='primary' onClick={ () => navigate('/categories') }>Continue Shopping</Button>

                            </TableCell>
                            <TableCell sx={ { fontWeight: 800, fontSize: '16px' } }>
                              <Button sx={ { flexGrow: 1 } } variant='contained' color='error' onClick={ () => clearCart() } disabled={ isPendingClear }>{ isPendingClear ? 'Clearing...' : 'Clear Cart' }</Button>
                            </TableCell>

                          </TableRow>
                        </TableFooter>


                      </>
                    )
                    :
                    (
                      <TableBody>
                        <TableRow>
                          <TableCell colSpan={ 5 } rowSpan={ 5 } sx={ { textAlign: 'center', py: 15, fontSize: '40px', color: 'gray', userSelect: 'none' } }>
                            Cart is Empty
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    )
                }
              </Table>
            </TableContainer>

          </Grid>

          <Grid item size={ { xs: 12, md: 4 } }>

            <Box sx={ { backgroundColor: 'background.paper', p: 3, borderRadius: 2 } }>
              <Box>
                <Typography variant='h6' component='h3' fontWeight={ 900 } py={ 1 } color='text.secondary'>{ t('Order Summary') }</Typography>
              </Box>
              <Box sx={ { display: 'flex', flexDirection: 'column', gap: 3 } }>
                <Typography color='text.secondary'>{ t('Promo Code') }</Typography>
                <Box sx={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, mt: 1 } }>
                  <TextField size='small' placeholder='Enter Code' sx={ { flexGrow: 1 } } />
                  <Button variant='contained' color='primary' sx={ { flexGrow: 1 } }>{ t('Apply') }</Button>
                  <Typography variant='caption' sx={ { color: 'gray', mt: 1, fontWeight: 600, flexGrow: 1 } }>Try: STRIDE20 for 20% off</Typography>
                </Box>
                <Divider sx={ { my: 1 } } />
                <Box sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: 1.5 } }>
                  <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
                    <Typography color='text.secondary'>{ t('Subtotal') }</Typography>
                    <Typography color='text.secondary'>{ data.cartTotal }$</Typography>
                  </Box>
                  <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
                    <Typography color='text.secondary'>{ t('Shipping') }</Typography>
                    <Typography color='text.secondary'>FREE</Typography>
                  </Box>
                  <Box>
                    <Typography variant='caption' sx={ { color: 'green', fontWeight: 600, mt: 1 } }>You qualify for free shipping!</Typography>
                  </Box>
                  <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
                    <Typography color='text.secondary'>{ t('Discount') }</Typography>
                    <Typography color='text.secondary'>35$</Typography>
                  </Box>
                  <Divider sx={ { my: 1 } } />
                  <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
                    <Typography color='text.secondary'>{ t('Total') }</Typography>
                    <Typography color='text.secondary'>{ data.cartTotal }$</Typography>


                  </Box>
                  <Button sx={ { flexGrow: 1 } } variant='contained' color='success' disabled={ data.items.length === 0 } onClick={ () => navigate('/checkout') }>Checkout</Button>
                  <Box sx={ { py: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 } }>
                    <LockIcon />
                    <Typography>Secure Checkout</Typography>
                  </Box>
                  <Box sx={ { display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', justifyContent: 'center', filter: 'grayscale(100%)' } }>
                    <Typography component="svg" viewBox="0 0 24 24" fill="none" sx={ { width: 50, height: 50, paddingY: .5, paddingX: 1.5, borderRadius: 2 } }> <circle cx="9" cy="12" r="6" fill="#EB001B"></circle> <circle cx="15" cy="12" r="6" fill="#F79E1B"></circle> <path d="M12 7.5a6 6 0 000 9 6 6 0 000-9z" fill="#FF5F00"></path> </Typography>
                    <Typography sx={ { fontStyle: 'italic', fontWeight: 'bold', background: '#1a1f71', color: 'white', paddingY: .5, paddingX: 1.5, borderRadius: 2 } }>VISA</Typography>
                    <Typography sx={ { fontStyle: 'italic', fontWeight: 'bold', background: '#006fcf', color: 'white', paddingY: .5, paddingX: 1.5, borderRadius: 2 } }>AMEX</Typography>
                    <Typography sx={ { fontStyle: 'italic', fontWeight: 'bold', background: 'black', color: 'white', paddingY: .5, paddingX: 1.5, borderRadius: 2 } }>Pay</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

          </Grid>

        </Grid>




      </Container>
    </Box>
  )
}





