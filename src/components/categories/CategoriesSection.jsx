import { Box, Grid, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories'
import Loader from '../../ui/Loader/Loader';
import { Link } from 'react-router-dom';
import Category from '../../ui/Category/Category';
export default function CategoriesSection() {

    const { data, isLoading, isError, error } = useCategories(5);

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <Box color={'red'}>{error.message}</Box>
    }

    return (
        <Box component={'section'} py={3} className='categories'>
            <Typography variant='h4' component='h2' py={3}>Categories</Typography>
            <Link to={'/categories'}>View All</Link>
            <Grid container spacing={3}>
                {
                    data?.response?.data?.map((category) =>
                        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <Category category={category} />
                        </Grid>

                    )}
            </Grid>

        </Box>
    )
}
