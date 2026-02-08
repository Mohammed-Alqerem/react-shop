import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import React from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../validation/RegisterSchema';

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

    <Box component={'section'}>
      <Typography variant='h1' component={'h1'} py={4} fontWeight={'medium'} textAlign={'center'}>
        Register
      </Typography>

      <Box onSubmit={handleSubmit(handleRegister)} component={'form'} display={'flex'} flexDirection={'column'} gap={3} alignItems={'center'}>
        <TextField {...register('userName')} fullWidth label="User Name" variant="outlined"
           error={errors.userName} helperText={errors.userName?.message} />
          <TextField {...register('fullName')} fullWidth label="FullName" variant="outlined"
          error={errors.fullName} helperText={errors.fullName?.message} />
          <TextField {...register('email')} fullWidth label="Email" variant="outlined"
           error={errors.email} helperText={errors.email?.message} />
          <TextField {...register('password')} fullWidth label="Password" variant="outlined"
           error={errors.password} helperText={errors.password?.message}
           />
          <TextField {...register('phoneNumber')} fullWidth label="Phone Number" variant="outlined"
          error={errors.phoneNumber } helperText={errors.phoneNumber?.message}
            />
        <Button type='submit' variant='outlined' >Register</Button>
      </Box>
    </Box>

  )
}
