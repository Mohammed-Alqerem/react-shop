import { Box, Button, Card, CardMedia, Container, Divider, Grid, Typography, keyframes } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GradeIcon from '@mui/icons-material/Grade';
import heroImage from './../../assets/shopping-hero.jpg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px) skew(-2deg, -2deg);
  }
  50% {
    transform: translateY(-20px) skew(-2deg, -2deg);
  }
  100% {
    transform: translateY(0px) skew(-2deg, -2deg);
  }
`;
const floatingArrow = keyframes`
  0% {
    transform: translateY(0px) ;
  }
  50% {
    transform: translateY(-15px) ;
  }
  100% {
    transform: translateY(0px) ;
  }
`;


export default function Home() {

  const { t } = useTranslation();
  return (
    <Box component={'section'}>
      <Box sx={{ background: '#100c12', color: 'white', py: 6 }}>
        <Box>
          <Container>
            <Grid container spacing={3}>


              <Grid size={{ xs: 12, sm: 12, md: 6 }} item>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Typography variant='h3' component={'h3'} sx={{ fontWeight: '900', fontSize: { xs: '30px', sm: '40px', md: '60px', textTransform: 'capitalize' } }}>Step Into <Typography sx={{ fontWeight: '900', fontSize: { xs: '30px', sm: '40px', md: '60px', textTransform: 'capitalize' } }} variant='h3' component={'h3'} color={'primary'}>Your Best</Typography></Typography>
                  <Typography color='#aea6a6ff'>{t('Premium footwear for every step of your journey. From athletic performance to everyday comfort.')}</Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button variant='contained' color='primary' sx={{ py: 1.5, px: 5, borderRadius: 6 }}>{t('Shop Now')} <ArrowRightAltIcon /></Button>
                    <Button variant='outlined' color='warning' sx={{ py: 1.5, px: 5, borderRadius: 6 }}>{t('Browse Categories')}</Button>
                  </Box>
                  <Divider variant='fullWidth' sx={{ my: 2 }} />
                </Box>
                <Box sx={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography sx={{ fontWeight: '900', fontSize: '30px' }}>50K+</Typography>
                    <Typography color='white'>Happy Customers</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography sx={{ fontWeight: '900', fontSize: '30px' }}>4.9<GradeIcon color='warning' /></Typography>
                    <Typography color='white'>Average Rating</Typography>
                  </Box >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography sx={{ fontWeight: '900', fontSize: '30px' }}>300+</Typography>
                    <Typography color='white'>Styles Available</Typography>
                  </Box>

                </Box>
              </Grid>


              <Grid item size={{ xs: 12, sm: 12, md: 6 }} sx={{ mt: 5 }}>
                <Card sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: 3,
                  animation: `${floatAnimation} 4s ease-in-out infinite`,
                  transform: 'skew(-2deg, -2deg)'
                }}>
                  <CardMedia component="img" image={heroImage} alt="Neon Shopping Cart" sx={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                </Card>
              </Grid>
              <Grid item size={{ xs: 12 }} sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant='caption' sx={{ fontWeight: 'bold' }}>Explore</Typography>
              </Grid>
              <Grid item size={{ xs: 12 }} sx={{ textAlign: 'center' }}>

                <ArrowDownwardIcon
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 3,
                    animation: `${floatingArrow} 4s ease-in-out infinite`,
                  }}
                />
              </Grid>

            </Grid>

          </Container>
        </Box>
      </Box>
        

    
         
    </Box>
  )
}
