import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Loader from '../../ui/Loader/Loader';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Products() {

    const { data, isError, isLoading, error } = useProducts();
    const {t} = useTranslation();

    if (isLoading) {
        return <Loader />
    }


    if (isError) {
        return <Box color={ 'red' }>{ error.message }</Box>
    }

    return (
        <Box component={ 'section' } py={ 3 } className='products'>
            <Typography variant='h4' component='h2' py={ 3 }>{t('Products')}</Typography>
            <Grid container spacing={ 3 }>
                {
                    data?.response?.data?.map((product) =>
                        <Grid item size={ { xs: 12, sm: 6, md: 4, lg: 3 } } sx={ { textAlign: 'center' } }>
                            <Link to={`product/${product.id}`}>
                                <Card >
                                    <CardContent sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 } }>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={ product.image }
                                            alt={ product.name }
                                        />
                                        <Box>
                                            <Typography gutterBottom variant="h5" component="div">
                                                { product.name }
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                { product.price }$
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
