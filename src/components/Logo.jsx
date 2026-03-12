import { IconButton, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

export default function Logo() {
    const navigate = useNavigate();

    return (

        <IconButton sx={{ borderRadius: 2, display: 'flex', alignItems: 'center', gap: .5 }} color='primary' onClick={() => navigate('/')}>
            <OfflineBoltIcon fontSize='large' />
            <Typography variant='body1' component={'span'} color='text.primary' sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Stride</Typography>
        </IconButton>
    )
}
