import React from 'react'
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useChangePassword from '../../hooks/useChangePassword';
import ChangePasswordSchema from '../../validation/UpdatePasswordSchema';
export default function ChangePassword() {


  const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    mode: 'onChange',
  });

  const { mutate, isPending } = useChangePassword();


  const handlePasswordSubmit = (value) => {
    mutate({ CurrentPassword: value.CurrentPassword, NewPassword: value.NewPassword, ConfirmNewPassword: value.ConfirmNewPassword });
    reset();
  }


  return (
    <Box>

      <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
        <Typography component={'h2'} variant='h4'>Change Password</Typography>
        <Typography component={'p'} variant='body2' sx={{ color: 'secondary.primary' }}>Update your account security by choosing a strong, unique password</Typography>
      </Box>

      <Box component={ 'form' } onSubmit={ handleSubmit(handlePasswordSubmit) } py={ 3 } display={ 'flex' } gap={ 3 } flexDirection={ 'column' } alignItems={ 'flex-start' }>

        <TextField { ...register('CurrentPassword') } type='password' label='Current Password' sx={ { width: { xs: '100%', md: '70%', lg: '70%' } } } variant='outlined'
          error={ errors.CurrentPassword }
          helperText={ errors.CurrentPassword?.message }
        />
        <TextField { ...register('NewPassword') } type='password' label='New Password' sx={ { width: { xs: '100%', md: '70%', lg: '70%' } } } variant='outlined'
          error={ errors.NewPassword }
          helperText={ errors.NewPassword?.message }
        />
        <TextField { ...register('ConfirmNewPassword') } type='password' label='Confirm New Password' sx={ { width: { xs: '100%', md: '70%', lg: '70%' } } } variant='outlined'
          error={ errors.ConfirmNewPassword }
          helperText={ errors.ConfirmNewPassword?.message }
        />

        <Button variant='contained' type='submit' disabled={ isPending } sx={ { width: { xs: '100%', md: '70%', lg: '70%' } } }>
          { isPending ? <CircularProgress
            size={ '22px' }
            enableTrackSlot={ '30px' }
            color='secondary' />
            : 'Update Password'
          }
        </Button>



      </Box>

    </Box>
  )
}
