import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Button, CircularProgress, Link, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import LoginSchema from '../../../validation/LoginSchema';
import { Link as RouterLink } from 'react-router-dom';
export default function Login() {

  const [serverError, setServerError] = useState([]);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',

  });


  const handleLogin = async (value) => {

    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`, value);
      console.log(response);
    } catch (error) {
      setServerError(error.response.data.message);
    }


  }



  return (
    <Box component={'section'} py={4} mt={4} textAlign={'center'}>

      <Typography variant='h2' component={'h1'} fontWeight={'medium'}>
        Login
      </Typography>


      {serverError?.length >= 0 && (

        <Box display={'flex'} flexDirection={'column'} gap={3} >
          {serverError.map((error) => <Alert variant='standard' severity='error'>{error}</Alert>)}
        </Box>
      )}

      <Box component={'form'} onSubmit={handleSubmit(handleLogin)} py={3} display={'flex'} gap={3} flexDirection={'column'} alignItems={'flex-start'}>

        <TextField {...register('email')} label='Email' fullWidth variant='outlined'
          error={errors.email}
          helperText={errors.email?.message}
        />
        <TextField {...register('password')} label='Password' fullWidth variant='outlined'
          error={errors.password}
          helperText={errors.password?.message}
        />

        <Button variant='contained' type='submit' disabled={isSubmitting} sx={{ background: '#000', width: '100%' }}>
          {isSubmitting ? <CircularProgress
          size={'22px'}
          enableTrackSlot={'30px'}
          color='secondary' /> 
          :'SIGN IN'
          }
        </Button>

        <Box width={'100%'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
          <Typography color='#595757'>Do not have an account? <Link component={RouterLink} color='#000' fontWeight={'medium'} to={'register'}>SIGN UP</Link></Typography>

          <Link color='#595757' component={RouterLink}>Forget your password?</Link>
        </Box>


      </Box>

    </Box>
  )
}
