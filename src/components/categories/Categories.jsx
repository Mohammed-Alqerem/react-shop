import { Box, CircularProgress } from '@mui/material';
import useCategories from './../../hooks/useCategories'
export default function Categories() {

   const { data, isLoading, isError, error} = useCategories();

    if (isLoading) {
      return  <CircularProgress sx={{position:'fixed', top:'50%',left:'50%',transform:'translate(-50%, -50%)'}}/>
    }


    if (isError) {
      return  <Box color={'red'}>{error.message}</Box>
    }

    console.log(data);

    return (
        <Box component={'section'}>

            {

                <Box>
                    {
                        data.response.map((cat) => <Box>{cat.name}</Box>)
                    }
                </Box>

            }

        </Box>
    )
}
