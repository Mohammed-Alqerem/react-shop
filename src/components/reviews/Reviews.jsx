import { Avatar, Box, Rating, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'

export default function Reviews({ review }) {
    return (
        <Box sx={{ border: '1px solid', borderColor: 'grey.200', borderRadius: 3, p: 3, height: '100%', bgcolor: 'background.paper' }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
                <Avatar sx={{ width: 44, height: 44, bgcolor: deepOrange[500], fontWeight: 700 }}>
                    {review?.userName?.charAt(0)}
                </Avatar>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography sx={{ fontWeight: 800, fontSize: '14px' }}>{review?.userName}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '12px', color: 'text.secondary', fontWeight: 500 }}>
                        {new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </Typography>
                </Box>
            </Box>
            <Rating value={review?.rating} readOnly size="small" sx={{ mb: 2, color: '#faaf00' }} />
            <Typography variant='body2' color='text.secondary' sx={{ lineHeight: 1.6, fontWeight: 500 }}>
                {review?.comment}
            </Typography>
        </Box>
    )
}
