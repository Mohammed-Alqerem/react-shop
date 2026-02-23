import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import Categories from '../../components/categories/Categories'
import Item from '../../components/item'

export default function Home() {
  return (
    <Box>
      <Typography component={'h3'} variant='h3'>
        Home
      </Typography>
      <Categories/>

      <Item age={20}>
         
       <h2>this is hello</h2> 

      </Item>

         
    </Box>
  )
}
