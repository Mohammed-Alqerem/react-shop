import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Button, CircularProgress, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import LoginSchema from '../../../validation/LoginSchema';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import axiosInstance from '../../../api/axiosInstance';
export default function Login() {
   
   const navigate = useNavigate();
   
  const [serverError, setServerError] = useState([]);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',

  });


  const handleLogin = async (value) => {

    try {
      const response = await axiosInstance.post(`/auth/Account/Login`, value);
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      if(response.status === 200){
        localStorage.setItem('accessToken', response.data.accessToken);
        navigate('/');
      }
      console.log(response.data.accessToken);
    } catch (error) {
      console.log("mohammed" + error.response.data.message);
      setServerError(error.response.data.message);
    }


  }


  return (
    <Box component={ 'section' } py={ 4 } mt={ 4 } textAlign={ 'center' }>

      <Typography variant='h2' py={ 2 } component={ 'h1' } fontWeight={ 'medium' }>
        Sign in
      </Typography>

      <Typography color='#9e9494' sx={ { userSelect: 'none' } } my={ 2 } component={ 'p' } >
        If you have an account with us, please sign in.
      </Typography>

      { serverError?.length > 0 && (

        <Alert variant='standard' severity='error'>{ serverError }</Alert>
      )
      }

      <Box component={ 'form' } onSubmit={ handleSubmit(handleLogin) } py={ 3 } display={ 'flex' } gap={ 3 } flexDirection={ 'column' } alignItems={ 'flex-start' }>

        <TextField { ...register('email') } label='Email' fullWidth variant='outlined'
          error={ errors.email }
          helperText={ errors.email?.message }
        />
        <TextField { ...register('password') } label='Password' fullWidth variant='outlined'
          error={ errors.password }
          helperText={ errors.password?.message }
        />

        <Button variant='contained' type='submit' disabled={ isSubmitting } sx={ { background: '#000', width: '100%' } }>
          { isSubmitting ? <CircularProgress
            size={ '22px' }
            enableTrackSlot={ '30px' }
            color='secondary' />
            : 'SIGN IN'
          }
        </Button>

        <Box width={ '100%' } display={ 'flex' } flexWrap={ 'wrap' } justifyContent={ 'space-between' }>
          <Typography color='#595757' sx={ { userSelect: 'none' } }>Do not have an account? <Link component={ RouterLink } color='#000' fontWeight={ 'medium' } to={ 'register' }>Sign up</Link></Typography>

          <Link color='#595757' sx={ { userSelect: 'none' } } component={ RouterLink }>Forget your password?</Link>
        </Box>


      </Box>

    </Box>
  )
}
