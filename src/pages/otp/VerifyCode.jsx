import { Box, Typography, Button, Paper, TextField, Link, CircularProgress } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { keyframes } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useRestPassword from '../../hooks/useRestPassword';
import RestPasswordSchema from '../../validation/RestPassword';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px 10px rgba(211, 47, 47, 0);
  }
`;





export default function VerifyCode() {


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(RestPasswordSchema),
        mode: 'onChange',

    });

    const { mutate, isPending } = useRestPassword();


    return (
        <Box
            component="section"
            sx={ {
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 6,
                px: 2,
            } }
        >
            <Paper
                elevation={ 0 }
                sx={ {
                    maxWidth: 520,
                    width: '100%',
                    textAlign: 'center',
                    p: { xs: 4, sm: 6 },
                    borderRadius: 4,
                    background: (theme) =>
                        theme.palette.mode === 'dark'
                            ? 'linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(20,20,20,0.9) 100%)'
                            : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.95) 100%)',
                    backdropFilter: 'blur(12px)',
                    border: (theme) =>
                        `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                    animation: `${fadeInUp} 0.6s ease-out`,
                } }
            >
                {/* Lock Icon */ }
                <Box
                    sx={ {
                        width: 88,
                        height: 88,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        animation: `${pulse} 2.5s ease-in-out infinite`,
                    } }
                >
                    <LockOutlinedIcon sx={ { fontSize: 42, color: '#fff' } } />
                </Box>
                <Typography
                    variant="h4"
                    component="h1"
                    fontWeight={ 700 }
                    sx={ { mb: 1.5 } }
                >
                    Verify Code
                </Typography>

                <Box component={ 'form' } onSubmit={ handleSubmit(mutate) } py={ 3 } display={ 'flex' } gap={ 3 } flexDirection={ 'column' } alignItems={ 'center' }>

                    <TextField type='number' { ...register('code') } label='Code' fullWidth variant='standard'
                        error={ errors.code }
                        helperText={ errors.code?.message }
                    />
                    <TextField type='password' { ...register('newPassword') } label='New Password' fullWidth variant='standard'
                        error={ errors.newPassword }
                        helperText={ errors.newPassword?.message }
                    />
                    <TextField type='email' { ...register('email') } label='Email' fullWidth variant='standard'
                        error={ errors.email }
                        helperText={ errors.email?.message }
                    />
                    <Button
                        disabled={ isPending }
                        type='submit'
                        variant="contained"
                        size="large"
                        sx={ {
                            background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
                            color: '#fff',
                            px: 6,
                            py: 1.2,
                            borderRadius: 2,
                            fontWeight: 'medium',
                            textTransform: 'none',
                            fontSize: '0.95rem',
                            boxShadow: '0 4px 14px rgba(211, 47, 47, 0.35)',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #b71c1c 0%, #d32f2f 100%)',
                                boxShadow: '0 6px 20px rgba(211, 47, 47, 0.45)',
                                transform: 'translateY(-2px)',
                            },
                        } }
                    >
                        { isPending ? <CircularProgress size={ '22px' } color="secondary" /> : 'RESET PASSWORD' }

                    </Button>

                </Box>
            </Paper>
        </Box>
    );
}
