import React, { useState } from 'react'
import useCategories from '../../hooks/useCategories';
import Loader from '../../ui/Loader/Loader';
import { Box, Breadcrumbs, Button, Container, FormControl, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProductToShop from '../../components/product/ProductToShop';
import useProductByCategories from '../../hooks/useProductByCategories';
import useProducts from '../../hooks/useProducts';
import { useTranslation } from 'react-i18next';

export default function CategoriesPage() {

    const { t } = useTranslation();

    const [selectedCategoryId, setSelectedCategoryId] = useState();
    const [ascending, setAscending] = useState(false);
    const [sortBy, setSortBy] = useState('price');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [appliedFilters, setAppliedFilters] = useState({ minPrice: '', maxPrice: '' });

    const [allProduct, setAllProduct] = useState(true);
    const { data: allProducts } = useProducts(1000, sortBy, ascending, appliedFilters.minPrice, appliedFilters.maxPrice);

    const { data, isLoading, isError, error } = useCategories(8);
    const { data: products } = useProductByCategories(selectedCategoryId);
    console.log(products);

    const handleApplyFilter = () => {
        setAppliedFilters({ minPrice, maxPrice });
    }



    // stop here : the solution is by using the useState



    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setAllProduct(false);
    };


    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <Box color={ 'red' }>{ error.message }</Box>
    }

    return (
        <Box component={ 'section' } className='categories'>

            <Box sx={ { py: 5, backgroundColor: 'background.default' } }>
                <Container>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link component={ RouterLink } underline="hover" color='gray' to="/">
                            { t('Home') }
                        </Link>
                        <Typography
                            color="text.primary"
                            fontWeight={ 600 }
                        >
                            { t('Shop All') }
                        </Typography>
                    </Breadcrumbs>
                    <Typography variant='h4' component='h2' fontWeight={ 900 } py={ 3 } color='text.primary'>{ t('Shop All') }</Typography>
                    <Typography color='text.secondary'>{ t('Browse our complete collection of premium footwear') }</Typography>

                </Container>


            </Box>


            <Box>
                <Container>
                    <Typography variant='h4' component='h2' py={ 3 }>{ t('Categories') }</Typography>
                    <Grid container spacing={ 3 }>
                        <Grid item size={ { xs: 12, sm: 6, md: 4, lg: 3 } }>
                            <Grid container spacing={ 1 }>
                                <Grid item size={ { xs: 12 } } sx={ { border: '1px solid ', borderColor: 'primary.main', borderRadius: 2, p: 2 } } >
                                    <Typography variant='h6' component='h3' fontWeight={ 800 } color='text.primary'>{ t('Filter') }</Typography>

                                    <Box sx={ { display: 'flex', flexDirection: 'column', gap: 1 } }>
                                        <Box sx={ { display: 'flex', gap: 1, flexWrap: { xs: 'wrap', sm: 'nowrap' } } }>
                                            <TextField
                                                sx={ { flexGrow: 1 } }
                                                label="MinPrice"
                                                variant="outlined"
                                                value={ minPrice }
                                                onChange={ (e) => setMinPrice(e.target.value) }
                                            />

                                            <TextField
                                                sx={ { flexGrow: 1 } }
                                                label="MaxPrice"
                                                variant="outlined"
                                                value={ maxPrice }
                                                onChange={ (e) => setMaxPrice(e.target.value) }
                                            />
                                        </Box>

                                        <Box>
                                            <Box sx={ { display: 'flex', gap: 1, flexDirection: 'column' } }>
                                                <FormControl sx={ { flexGrow: 1 } } >
                                                    <InputLabel id="SortBy">{ t('Sort By') }</InputLabel>

                                                    <Select
                                                        labelId="SortBy"
                                                        id="SortBy"
                                                        value={ sortBy }
                                                        label="Sort By"
                                                        onChange={ (e) => setSortBy(e.target.value) }
                                                    >
                                                        <MenuItem value={ 'price' }>{ t('price') }</MenuItem>
                                                        <MenuItem value={ 'name' }>{ t('name') }</MenuItem>
                                                        <MenuItem value={ 'rate' }>{ t('rate') }</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <FormControl sx={ { flexGrow: 1 } } >
                                                    <InputLabel id="Order">{ t('Order') }</InputLabel>

                                                    <Select
                                                        labelId="Order"
                                                        id="Order"
                                                        value={ ascending }
                                                        label="Order"
                                                        onChange={ (e) => setAscending(e.target.value) }
                                                    >
                                                        <MenuItem value={ true }>{ t('ascending') }</MenuItem>
                                                        <MenuItem value={ false }>{ t('descending') }</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                        <Button variant='contained' color='primary' sx={ { fontWeight: "600" } } onClick={ handleApplyFilter }>{ t('Apply Filter') }</Button>



                                    </Box>

                                </Grid>
                                <Box sx={ { border: '1px solid ', borderColor: 'primary.main', borderRadius: 2, p: 2, width: '100%', display: 'flex', flexDirection: 'column', gap: 1 } }>
                                    <Typography variant='h6' component='h3' fontWeight={ 800 } color='text.primary'>{ t('Categories') }</Typography>
                                    <Button onClick={ () => { setAllProduct(true); setSelectedCategoryId(null) } } sx={ { fontWeight: "600", width: "100%", textAlign: 'start' } } variant={ 'contained' } color="primary">{ t('All Product') }</Button>
                                    {
                                        data?.response?.data?.map((products) =>
                                            <Grid item size={ { xs: 12 } }>
                                                <Button onClick={ () => handleCategoryClick(products.id) } variant={ `${selectedCategoryId === products.id ? 'contained' : 'outlined'}` } sx={ { fontWeight: "600", width: "100%", textAlign: 'start' } } color="primary">
                                                    { products.name }
                                                </Button>
                                            </Grid>

                                        ) }

                                </Box>
                            </Grid>

                        </Grid>

                        <Grid size={ { xs: 12, sm: 6, md: 8, lg: 9 } }>
                            <Grid container spacing={ 3 }>
                                {
                                    products?.response?.length === 0 ? (
                                        <Grid item size={ { xs: 12 } } sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', width: '100%' } }>
                                            <Typography variant='h5' component='h3' fontWeight={ 800 } color='text.secondary'>No Products Found</Typography>
                                        </Grid>
                                    ) : (
                                        allProduct ? (
                                            allProducts?.response?.data.map((product) => (
                                                <Grid item size={ { xs: 12, sm: 6, md: 4, lg: 3 } }>
                                                    <ProductToShop products={ product } />
                                                </Grid>
                                            ))
                                        ) : (
                                            products?.response?.map((product) => (
                                                <Grid item size={ { xs: 12, sm: 6, md: 4, lg: 3 } }>
                                                    <ProductToShop products={ product } />
                                                </Grid>
                                            ))
                                        )
                                    )
                                }

                            </Grid>

                        </Grid>

                    </Grid>



                </Container>

            </Box>

        </Box>
    )
}
