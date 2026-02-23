import React, { useContext } from 'react'
import useCart from '../../hooks/useCart';
import { UserContext } from '../../context/UserContext';
import { Button } from '@mui/material';

export default function Cart() {

  const { data, isLoading, isError, error } = useCart();
  const {userName, setUserName} = useContext(UserContext);

    if (isLoading) {
          return <CircularProgress sx={ { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } } />
      }
  
  
      if (isError) {
          return <Box color={ 'red' }>{ error.message }</Box>
      }

  console.log(data);

  return (
    <div>
      cart - {userName}

      <Button variant='contained' onClick={() => setUserName('ahmed')}>change user name</Button>
    </div>
  )
}
