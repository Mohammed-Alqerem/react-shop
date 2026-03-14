import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';
import Loader from '../../ui/Loader/Loader';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Products({ limit }) {

    const { data:products, isError, isLoading, error } = useProducts(limit);
    console.log(products);
    const {t} = useTranslation();

    if (isLoading) {
        return <Loader />
    }


    if (isError) {
        return <Box color={ 'red' }>{ error.message }</Box>
    }

    return (
        <Box component={ 'section' } py={ 3 } className='products'>
            <Grid container spacing={ 4 } sx={{ mt: 1 }}>
                {
                    products?.response?.data?.map((product) =>
                        <Grid item size={{ xs: 12, sm: 6, lg: 4 }} key={product.id}>
                            <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        position: 'relative',
                                        bgcolor: 'background.paper',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                                        transition: 'all 0.3s ease-in-out',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 32px rgba(217, 95, 19, 0.2)',
                                            borderColor: 'primary.main',
                                            '& .productImage': {
                                                transform: 'scale(1.1)'
                                            },
                                            '& .productTitle': {
                                                color: 'primary.main'
                                            }
                                        }
                                    }}
                                >
                                    <Box sx={{
                                        position: 'relative',
                                        height: '240px',
                                        width: '100%',
                                        p: 4,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: 'rgba(0,0,0,0.02)',
                                        overflow: 'hidden'
                                    }}>
                                        <CardMedia
                                            className='productImage'
                                            component="img"
                                            image={ product.image }
                                            alt={ product.name }
                                            sx={{
                                                transition: 'transform 0.4s ease-in-out',
                                                objectFit: 'contain',
                                                height: '100%',
                                                width: '100%'
                                            }}
                                        />
                                    </Box>
                                    
                                    <CardContent sx={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        flexGrow: 1,
                                        justifyContent: 'space-between',
                                        p: '24px !important',
                                    }}>
                                        <Box>
                                            <Chip sx={{my:2}} variant='filled' color='primary' label={product.name} />
                                            <Typography className="productTitle" variant="h6" component="h3" sx={{ 
                                                fontWeight: '800', 
                                                transition: 'color 0.2s',
                                                overflow: 'hidden',
                                                lineHeight: 1.3,
                                                mb: 1
                                            }}>
                                                {product.name}
                                            </Typography>
                                            <Typography color='textSecondary' variant="body2" sx={{ mb: 2 }}>
                                                Premium footwear for maximum comfort
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto', pt: 1 }}>
                                            <Typography variant="h5" color="text.primary" sx={{ fontWeight: '900' }}>
                                                ${product.price}
                                            </Typography>
                                            <Typography variant="button" sx={{ 
                                                fontWeight: 'bold', 
                                                textDecoration: 'underline',
                                                textUnderlineOffset: 4,
                                                color: 'text.secondary',
                                                '&:hover': { color: 'primary.main' }
                                            }}>
                                                {t('Explore')}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ) }
            </Grid>
        </Box>
    )
}
