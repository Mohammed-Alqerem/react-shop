import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Link, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import LoginSchema from '../../../validation/LoginSchema';
import { Link as RouterLink } from 'react-router-dom';
export default function Login() {


      const {register,handleSubmit,formState:{errors}}=  useForm({
        resolver: yupResolver(LoginSchema)
      });
       

      const handleLogin = async (value)=>{

        try{
            const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,value);
            console.log(response);
        } catch(error){
            console.log(error);

        }
           
        
      }


  return (
    <Box component={'section'} py={4} mt={4} textAlign={'center'}>

      <Typography variant='h2' component={'h1'} fontWeight={'medium'}>
        Login
      </Typography>

       <Box component={'form'} onSubmit={handleSubmit(handleLogin)}  py={3} display={'flex'} gap={3} flexDirection={'column'} alignItems={'flex-start'}>

        <TextField {...register('email')} label='Email' fullWidth  variant='outlined'
        error={errors.email}
        helperText={errors.email?.message}
        />
        <TextField {...register('password')} label='Password' fullWidth  variant='outlined'
        error={errors.password}
        helperText={errors.password?.message}
        />

        <Button variant='contained' type='submit' sx={{background:'#000',width:'100%'}}>Sign in</Button>

         <Box width={'100%'}  display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
             <Typography color='#595757'>Do not have an account? <Link component={RouterLink} color='#000' fontWeight={'medium'} to={'register'}>SIGN UP</Link></Typography>
              
              <Link  color='#595757' component={RouterLink}>Forget your password?</Link>
         </Box>


       </Box>
     
    </Box>
  )
}
