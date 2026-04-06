import React from 'react'
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import Loader from '../../ui/Loader/Loader';
import { Alert, Box, Button, CardMedia, Chip, Container, Divider, Grid, Rating, Typography, Breadcrumbs, Link as MuiLink, IconButton } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';

import { useTranslation } from 'react-i18next';
import Reviews from '../../components/reviews/Reviews';

export default function ProductDetails() {

    const { id } = useParams();

    const { data, isError, isLoading, error } = useProductDetails(id);
    console.log(data);
    const { t } = useTranslation();

    const { mutate, isPending } = useAddToCart();

    const product = data?.response;

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <Alert severity="error">{error.message}</Alert>
    }

    return (
        <Box component={'section'} className='productDetails'>
            <Box sx={{ py: 5 }}>
                <Container>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '15px' }}>
                        <MuiLink underline="hover" color="inherit" href="/">{t('Home')}</MuiLink>
                        <MuiLink underline="hover" color="inherit" href="/categories">{t('Shop')}</MuiLink>
                        <Typography color="text.primary" sx={{ fontWeight: 600 }}>{product?.name}</Typography>
                    </Breadcrumbs>
                </Container>
            </Box>
            <Container>
                <Divider />


                <Grid container spacing={{ xs: 4, md: 8 }} py={9}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={{ borderRadius: 6, overflow: 'hidden' }}>
                            <CardMedia component={'img'} image={product?.image} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Box>

                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography color="primary.main" sx={{ fontWeight: 800, fontSize: '14px', textTransform: 'uppercase' }}>
                                {product?.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Rating value={product?.rate} readOnly size="small" sx={{ color: '#faaf00' }} />
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                                    {product?.rate} ({product?.reviews?.length} {t('reviews')})
                                </Typography>
                            </Box>
                        </Box>

                        <Typography variant='h3' component='h1' sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '2.5rem' }, color: 'text.primary', lineHeight: 1.2 }}>
                            {product?.name}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography sx={{ fontWeight: 900, fontSize: '2.2rem' }}>${product?.price}</Typography>
                            <Typography sx={{ fontWeight: 600, fontSize: '1.2rem', color: 'text.secondary', textDecoration: 'line-through' }}>
                                ${(product?.price * 1.22).toFixed(0)}
                            </Typography>
                            <Chip label={`Save $${(product?.price * 0.22).toFixed(0)}`} sx={{ bgcolor: '#ffe8cc', color: '#d95f13', fontWeight: 800, borderRadius: 1.5, height: 28 }} />
                        </Box>

                        <Typography variant='body1' color='text.secondary' sx={{ lineHeight: 1.6, fontSize: '16px', whiteSpace: 'pre-line' }}>
                            {product?.description}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                            <Button
                                variant='contained'
                                color="primary"
                                startIcon={<LocalMallOutlinedIcon />}
                                onClick={() => mutate({ ProductId: product?.id, Count: 1 })}
                                disabled={isPending || product?.quantity <= 0}
                                sx={{
                                    flexGrow: 1,
                                    py: 1.8,
                                    borderRadius: 8,
                                    fontWeight: 800,
                                    fontSize: '1.05rem',
                                    textTransform: 'none',
                                    boxShadow: '0 8px 20px rgba(217, 95, 19, 0.25)'
                                }}
                            >
                                {isPending ? t('Adding...') : t('Add to Cart')}
                            </Button>
                            <IconButton sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: '50%', width: 56, height: 56, '&:hover': { bgcolor: 'grey.50' } }}>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                            mt: 1,
                            border: '1px solid #ccc',
                            borderRadius: 3,
                            p: 2
                        }}>
                            <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', gap: 2 }}>
                                <LocalShippingOutlinedIcon color="primary" sx={{ opacity: 0.8 }} />
                                <Box>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 800 }} color='textSecondary'>{t('Free Shipping')}</Typography>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 500 }} color='textSecondary'>{t('On orders over $75')}</Typography>
                                </Box>
                            </Box>
                            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
                            <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', gap: 2 }}>
                                <AssignmentReturnOutlinedIcon color="primary" sx={{ opacity: 0.8 }} />
                                <Box>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 800, color: 'text.primary' }}>{t('60-Day Returns')}</Typography>
                                    <Typography sx={{ fontSize: '12px', color: 'text.secondary', fontWeight: 500 }}>{t('Try it, love it')}</Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>

                <Divider sx={{ my: 8 }} />

                <Box sx={{ mb: 6 }}>
                    <Typography variant='h4' component={'h2'} sx={{ fontWeight: 900, mb: 5 }}>{t('Customer Reviews')}</Typography>

                    <Grid container spacing={3}>
                        {product?.reviews?.length > 0 ? (
                            product?.reviews?.map((review) => (
                                <Grid item size={{ xs: 12, md: 4 }} key={review.id}>
                                    <Reviews review={review} />
                                </Grid>
                            ))
                        ) : (
                            <Typography variant='body2' color='text.secondary' sx={{ lineHeight: 1.6, fontWeight: 500 }}>
                                {t('No reviews yet')}
                            </Typography>
                        )}
                    </Grid>
                </Box>

            </Container>
        </Box>
    )
}
