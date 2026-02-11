import { Box, Button, Link, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import React from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../validation/RegisterSchema';
import { Link as RouterLink } from 'react-router-dom';

export default function Register() {


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const handleRegister = async (value) => {
    console.log(value);
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, value);
      console.log(response);

    } catch (error) {
      console.log(error)
    }

  }

  return (

    <Box component={'section'} py={5} textAlign={'center'}>
      <Typography variant='h2' component={'h1'} fontWeight={'medium'} >
        Create Account
      </Typography>
      <Typography color='#9e9494' my={2} component={'p'}  >
        Please fill in the fields below
      </Typography>

      <Box onSubmit={handleSubmit(handleRegister)} component={'form'} display={'flex'} flexDirection={'column'} gap={3}>

        <Box sx={{ display: { sm: 'block', md: 'flex' }, gap: 3 }} width={'100%'} mt={3}>
          <TextField {...register('userName')} sx={{ mb: { xs: 3, md: 0 } }} fullWidth label="User Name" variant="outlined"
            error={errors.userName} helperText={errors.userName?.message} />
          <TextField {...register('fullName')} fullWidth label="FullName" variant="outlined"
            error={errors.fullName} helperText={errors.fullName?.message} />
        </Box>

        <TextField {...register('email')} fullWidth label="Email" variant="outlined"
          error={errors.email} helperText={errors.email?.message} />
        <TextField {...register('password')} fullWidth label="Password" variant="outlined"
          error={errors.password} helperText={errors.password?.message}
        />
        <TextField {...register('phoneNumber')} fullWidth label="Phone Number" variant="outlined"
          error={errors.phoneNumber} helperText={errors.phoneNumber?.message}
        />
        <Button type='submit' variant='contained' sx={{ background: '#212131ec' }} >Create</Button>
        <Typography component={'p'} color={'#625e5e'}>Already have an account?
          <Link component={RouterLink} to='/login' color='#000' px={1}>Login</Link>
        </Typography>
      </Box>
    </Box>

  )
}
