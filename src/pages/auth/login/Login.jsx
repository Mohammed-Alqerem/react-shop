import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Container, Link, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import LoginSchema from '../../../validation/LoginSchema';
import { Link as RouterLink } from 'react-router-dom';
import useLogin from '../../../hooks/useLogin';

export default function Login() {


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',

  });

  const { mutate, isPending } = useLogin();


  return (
    <Container>
      <Box component={ 'section' } py={ 4 } mt={ 4 } textAlign={ 'center' }>

        <Typography variant='h2' py={ 2 } component={ 'h1' } fontWeight={ 'medium' }>
          Sign in
        </Typography>

        <Typography color='#9e9494' sx={ { userSelect: 'none' } } my={ 2 } component={ 'p' } >
          If you have an account with us, please sign in.
        </Typography>
        {/* 
      { serverError?.length > 0 && (

        <Alert variant='standard' severity='error'>{ serverError }</Alert>
      )
      } */}

        <Box component={ 'form' } onSubmit={ handleSubmit(mutate) } py={ 3 } display={ 'flex' } gap={ 3 } flexDirection={ 'column' } alignItems={ 'flex-start' }>

          <TextField { ...register('email') } label='Email' fullWidth variant='outlined'
            error={ errors.email }
            helperText={ errors.email?.message }
          />
          <TextField { ...register('password') } label='Password' fullWidth variant='outlined'
            error={ errors.password }
            helperText={ errors.password?.message }
          />

          <Button variant='contained' type='submit' disabled={ isPending } sx={ { background: '#000', width: '100%' } }>
            { isPending ? <CircularProgress
              size={ '22px' }
              enableTrackSlot={ '30px' }
              color='secondary' />
              : 'SIGN IN'
            }
          </Button>

          <Box width={ '100%' } display={ 'flex' } flexWrap={ 'wrap' } justifyContent={ 'space-between' }>
            <Typography sx={ { userSelect: 'none' } }>Do not have an account? <Link component={ RouterLink } color='secondary.main' fontWeight={ 'medium' } to={ 'register' }>Sign up</Link></Typography>

            <Link sx={ { userSelect: 'none', color: 'secondary.main' } } to='/ForgetPassword' component={ RouterLink }>Forget your password?</Link>
          </Box>


        </Box>

      </Box>
    </Container>
  )
}
