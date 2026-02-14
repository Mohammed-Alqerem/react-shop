import { Alert, Box, Button, CircularProgress, Link, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../validation/RegisterSchema';
import { Link as RouterLink } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

export default function Register() {

  const [serverError, setServerError] = useState([]);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',

  });

  const handleRegister = async (value) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, value);
      toast.success("Registration successful!", {
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
      console.log(response);

    } catch (error) {
      setServerError(error.response.data.errors)
      // console.log(error.response.data.errors)
    }

  }

  return (

    <Box component={ 'section' } py={ 5 } textAlign={ 'center' }>
      <Typography variant='h2' component={ 'h1' } fontWeight={ 'medium' } >
        Create Account
      </Typography>
      <Typography color='#9e9494' sx={{userSelect:'none'}} my={ 2 } component={ 'p' }  >
        Please fill in the fields below
      </Typography>

      { serverError?.length >= 0 && (
        <Box display={ 'flex' } flexDirection={ 'column' } gap={ 3 } >
          { serverError.map((error) => <Alert variant='standard' severity='error'>{ error }</Alert>) }
        </Box>
      )
      }

      <Box onSubmit={ handleSubmit(handleRegister) } component={ 'form' } display={ 'flex' } flexDirection={ 'column' } gap={ 3 }>

        <Box sx={ { display: { sm: 'block', md: 'flex' }, gap: 3 } } width={ '100%' } mt={ 3 }>
          <TextField { ...register('userName') } sx={ { mb: { xs: 3, md: 0 } } } fullWidth label="User Name" variant="outlined"
            error={ errors.userName } helperText={ errors.userName?.message } />
          <TextField { ...register('fullName') } fullWidth label="FullName" variant="outlined"
            error={ errors.fullName } helperText={ errors.fullName?.message } />
        </Box>

        <TextField { ...register('email') } fullWidth label="Email" variant="outlined"
          error={ errors.email } helperText={ errors.email?.message } />
        <TextField { ...register('password') } fullWidth label="Password" variant="outlined"
          error={ errors.password } helperText={ errors.password?.message }
        />
        <TextField { ...register('phoneNumber') } fullWidth label="Phone Number" variant="outlined"
          error={ errors.phoneNumber } helperText={ errors.phoneNumber?.message }
        />

        <Button type='submit' variant='contained' sx={ { background: '#212131ec' } } disabled={ isSubmitting } >
          { isSubmitting ? <CircularProgress
            size={ '22px' }
            enableTrackSlot={ '30px' }
            color='secondary' />
            : 'Create'
          }
        </Button>



        <Typography component={ 'p' } sx={{userSelect:'none'}} color={ '#625e5e' }>Already have an account?
          <Link component={ RouterLink } to='/login' sx={{userSelect:'none'}} color='#000' px={ 1 } userSelect={ 'none' }>Sign In</Link>
        </Typography>
      </Box>
    </Box>

  )
}
