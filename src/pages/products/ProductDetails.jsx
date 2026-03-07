import React from 'react'
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import Loader from '../../ui/Loader/Loader';
import { Alert, Avatar, Box, Button, CardMedia, Chip, Divider, Grid, Rating, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import useAddToCart from '../../hooks/useAddToCart';

export default function ProductDetails() {

    const { id } = useParams();

    const { data, isError, isLoading, error } = useProductDetails(id);

    const { mutate, isPending } = useAddToCart();

    const product = data?.response;

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <Alert severity="error">{error.message}</Alert>
    } 

    return (
        <Box component={'section'} className='productDetails' py={6}>
            <Grid container spacing={3}>
                <Grid item size={{ xs: 12, md: 5 }}>
                    <CardMedia component={'img'} image={product?.image} sx={{ maxWidth: '100%', width: '100%' }} />
                </Grid>
                <Grid item size={{ xs: 12, md: 7 }} sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
                    <Typography variant='h3' component='h2' sx={{ fontWeight: 700 }}>{product?.name}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', gap: 2, width: '100%' }}>
                        <Rating value={product?.rate} readOnly />
                        <Chip label={product?.quantity > 0 ? `In Stock :${product?.quantity}` : `Out of Stock`} color={product?.quantity > 0 ? 'success' : 'error'} />

                    </Box>
                    <Chip label={`${product?.price}$`} color='primary' sx={{ fontWeight: 800, fontSize: '1.2rem' }} />
                    <Button variant='contained' onClick={() => mutate({ ProductId: product?.id, Count: 1 })} disabled={isPending}>{isPending ? 'Adding...' : 'Add To Cart'}</Button>
                    <Typography variant='body1' component='p' sx={{ lineHeight: 1.6, whiteSpace: 'pre-line', fontSize: '17px' }}>{product?.description}</Typography>

                </Grid>

                <Grid item size={{ xs: 12 }}>
                    <Typography variant='h4' component={'h2'} sx={{ fontWeight: 700 }}>Reviews</Typography>
                </Grid>
                {
                    product?.reviews?.length > 0 ?
                        (
                            product?.reviews?.map((review) =>
                                <Grid item size={{ xs: 12 }} key={review.id}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Avatar sx={{ bgcolor: deepOrange[500] }}>{review?.userName?.charAt(0)}</Avatar>
                                            <Typography variant='h6' component='h2' sx={{ fontSize: '16px' }}>{review?.userName}</Typography>
                                        </Box>
                                        <Typography>{new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Typography>

                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                                        <Rating value={review?.rating} readOnly />
                                        <Typography variant='body1' component='p' sx={{ lineHeight: 1.6, whiteSpace: 'pre-line', fontSize: '17px' }}>{review?.comment}</Typography>
                                    </Box>
                                    <Divider sx={{ my: 2 }} />
                                </Grid>


                            )
                        ) :

                        (
                            <Typography variant='h3' sx={{ color: 'gray', userSelect: 'none', textAlign: 'center' }}>No Reviews Yet</Typography>
                        )

                }
            </Grid>
        </Box>
    )
}
