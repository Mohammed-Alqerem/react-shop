import { Alert, Box, Button, CircularProgress, Container, Link, TextField, Typography } from '@mui/material'
import { yupResolver } from "@hookform/resolvers/yup"
import Reac from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../validation/RegisterSchema';
import { Link as RouterLink } from 'react-router-dom';
import useRegister from '../../../hooks/useRegister';
export default function Register() {


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  const { mutate, isPending } = useRegister();

  return (

    <Container>
      <Box component={ 'section' } py={ 5 } textAlign={ 'center' }>
        <Typography variant='h2' component={ 'h1' } fontWeight={ 'medium' } >
          Create Account
        </Typography>
        <Typography color='#9e9494' sx={ { userSelect: 'none' } } my={ 2 } component={ 'p' }  >
          Please fill in the fields below
        </Typography>

        <Box onSubmit={ handleSubmit(mutate) } component={ 'form' } display={ 'flex' } flexDirection={ 'column' } gap={ 3 }>

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

          <Button type='submit' variant='contained' sx={ { background: '#212131ec' } } disabled={ isPending } >
            { isPending ? <CircularProgress
              size={ '22px' }
              enableTrackSlot={ '30px' }
              color='secondary' />
              : 'Create'
            }
          </Button>



          <Typography component={ 'p' } sx={ { userSelect: 'none' } } color={ '#625e5e' }>Already have an account?
            <Link component={ RouterLink } to='/login' sx={ { userSelect: 'none' } } color='#000' px={ 1 } userSelect={ 'none' }>Sign In</Link>
          </Typography>
        </Box>
      </Box>
    </Container>

  )
}
