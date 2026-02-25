import useCart from '../../hooks/useCart';
import {  CircularProgress, Box } from '@mui/material';

export default function Cart() {

  const { data, isLoading, isError, error } = useCart();

  if (isLoading) {
    return <CircularProgress sx={ { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } } />
  }


  if (isError) {
    return <Box color={ 'red' }>{ error.message }</Box>
  }

  console.log(data);

  return (
    <div>
      cart

    </div>
  )
}
