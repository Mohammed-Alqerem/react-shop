import { Box, Button, Card, CardMedia, Container, Divider, Grid, Link, Typography, keyframes, InputBase, Chip, Rating, CardContent, Avatar } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GradeIcon from '@mui/icons-material/Grade';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import heroImage from './../../assets/shopping-hero.jpg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link as ReactRouterLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Products from '../../components/product/Products';

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
    <Box component={ 'main' }>
   

        <Box component={'section'} sx={ { backgroundColor: '#100c12', color: '#fff', py: 6 } }>
          <Box>
            <Container>
              <Grid container spacing={ 3 }>


                <Grid item size={ { xs: 12, sm: 12, md: 6 } } >
                  <Box sx={ { display: 'flex', flexDirection: 'column', gap: 3 } }>
                    <Typography variant='h3' component={ 'h3' } sx={ { fontWeight: '900', fontSize: { xs: '30px', sm: '40px', md: '60px', textTransform: 'capitalize' } } }>{ t('Step Into') }<Typography sx={ { fontWeight: '900', fontSize: { xs: '30px', sm: '40px', md: '60px', textTransform: 'capitalize' } } } variant='h3' component={ 'h3' } color={ 'primary' }>{ t('Your Best') }</Typography></Typography>
                    <Typography color='#aea6a6ff'>{ t('Premium footwear for every step of your journey. From athletic performance to everyday comfort.') }</Typography>
                    <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap' } }>
                      <Button variant='contained' color='primary' sx={ { py: 1.5, px: 5, borderRadius: 6 } }>{ t('Shop Now') } <ArrowRightAltIcon /></Button>
                      <Button variant='outlined' color='warning' sx={ { py: 1.5, px: 5, borderRadius: 6 } }>{ t('Browse Categories') }</Button>
                    </Box>
                    <Divider variant='fullWidth' sx={ { my: 2 } } />
                  </Box>
                  <Box sx={ { display: 'flex', gap: 5, flexWrap: 'wrap' } }>

                    <Box sx={ { display: 'flex', flexDirection: 'column', gap: 1 } }>
                      <Typography sx={ { fontWeight: '900', fontSize: '30px' } }>50K+</Typography>
                      <Typography sx={ { color: '#fff' } }>{ t('Happy Customers') }</Typography>
                    </Box>
                    <Box sx={ { display: 'flex', flexDirection: 'column', gap: 1 } }>
                      <Typography sx={ { fontWeight: '900', fontSize: '30px' } }>4.9<GradeIcon color='warning' /></Typography>
                      <Typography sx={ { color: '#fff' } }>{ t('Average Rating') }</Typography>
                    </Box >
                    <Box sx={ { display: 'flex', flexDirection: 'column', gap: 1 } }>
                      <Typography sx={ { fontWeight: '900', fontSize: '30px' } }>300+</Typography>
                      <Typography sx={ { color: '#fff' } }>{ t('Styles Available') }</Typography>
                    </Box>

                  </Box>
                </Grid>


                <Grid item size={ { xs: 12, sm: 12, md: 6 } } sx={ { mt: 5 } }>
                  <Card sx={ {
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 3,
                    animation: `${floatAnimation} 4s ease-in-out infinite`,
                    transform: 'skew(-2deg, -2deg)'
                  } }>
                    <CardMedia component="img" image={ heroImage } alt="Neon Shopping Cart" sx={ { objectFit: 'cover', width: '100%', height: 'auto' } } />
                  </Card>
                </Grid>
                <Grid item size={ { xs: 12 } } sx={ { textAlign: 'center', mt: 3 } }>
                  <Typography variant='caption' sx={ { fontWeight: 'bold' } }>{ t('Explore') }</Typography>
                </Grid>
                <Grid item size={ { xs: 12 } } sx={ { textAlign: 'center' } }>

                  <ArrowDownwardIcon
                    sx={ {
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: 3,
                      animation: `${floatingArrow} 5s ease-in-out infinite`,
                    } }
                  />
                </Grid>

              </Grid>



            </Container>
          </Box>
        </Box>

        <Box component={ 'section' } py={ 10 }>
          <Container>
            <Box>
              <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
                <Box sx={ { display: 'flex', flexDirection: 'column', gap: 1 } }>
                  <Typography variant='h3' component={ 'h2' } sx={ { fontWeight: '800' } }>Shop By Product Category</Typography>
                  <Typography variant='body1' component={ 'p' } color='textSecondary'>Find the perfect pair for every occasion</Typography>
                </Box>
                <Link to={ '/categories' } component={ ReactRouterLink } sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>{ t('Shop All') } <ArrowForwardIosIcon fontSize='small' /></Link>

              </Box>
              <Box py={ 5 }>
                <Products limit={ 6 } />
              </Box>

            </Box>
          </Container>


        </Box>



        {/* here we will add  new section for our customer reviews */ }




        <Box component={ 'section' } sx={ { backgroundColor: '#000', py: 7 } }>
          <Container>
            <Box sx={ { display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' } }>
              <Chip label={ t('Customer Reviews') } variant='outlined' color='primary' />
              <Typography variant='h3' component={ 'h2' } sx={ { fontWeight: '800' } } color='white'>{ t('What Our Customers Say') }</Typography>
              <Typography variant='body1' component={ 'p' } sx={ { color: 'gray' } }>{ t('Join thousands of happy customers who have made Stride their go-to footwear brand') }</Typography>
            </Box>
            <Grid container spacing={ 3 } sx={ { pt: 7 ,pb:5} }>
              <Grid item size={ { xs: 12, sm: 6, md: 4 } }>
                <Card sx={ { backgroundColor: '#101828',borderRadius:3 }  }>
                  <CardContent sx={ { display: 'flex', flexDirection: 'column', gap: 3 } }>
                    <Rating value={ 5 } readOnly />
                    <Typography color='white'>{ t('"Stride has completely transformed my running experience. The Velocity Runner Pro helped me PR at my last marathon by 8 minutes."') }</Typography>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
                      <Avatar src="" alt="" />
                      <Box sx={ { display: 'flex', flexDirection: 'column' ,flexWrap:'wrap' } }>
                        <Typography color='white'>John Doe</Typography>
                        <Typography variant='caption' color='gray'>Verified Buyer</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

              </Grid>
              <Grid item size={ { xs: 12, sm: 6, md: 4 } }>
                <Card sx={ { backgroundColor: '#101828' ,borderRadius:3 } }>
                  <CardContent sx={ { display: 'flex', flexDirection: 'column', gap: 3 } }>
                    <Rating value={ 5 } readOnly />
                    <Typography color='white'>{ t('"Stride has completely transformed my running experience. The Velocity Runner Pro helped me PR at my last marathon by 8 minutes."') }</Typography>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
                      <Avatar src="" alt="" />
                      <Box sx={ { display: 'flex', flexDirection: 'column' ,flexWrap:'wrap' } }>
                        <Typography color='white'>David Kim</Typography>
                        <Typography variant='caption' color='gray'>Verified Buyer</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

              </Grid>
              <Grid item size={ { xs: 12, sm: 6, md: 4 } }>
                <Card sx={ { backgroundColor: '#101828',borderRadius:3 } }>
                  <CardContent sx={ { display: 'flex', flexDirection: 'column', gap: 3 } }>
                    <Rating value={ 5 } readOnly />
                    <Typography color='white'>{ t('"Stride has completely transformed my running experience. The Velocity Runner Pro helped me PR at my last marathon by 8 minutes."') }</Typography>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
                      <Avatar src="" alt="" />
                      <Box sx={ { display: 'flex', flexDirection: 'column' ,flexWrap:'wrap' } }>
                        <Typography color='white'>Emily Rodriguez</Typography>
                        <Typography variant='caption' color='gray'>Verified Buyer</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

              </Grid>

            </Grid>
            <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', mb: 2, gap: { xs: 4, md: 8 } }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: '900', fontSize: { xs: '2rem', md: '2.5rem' }, color: 'white', lineHeight: 1, mb: 1 }}>50K+</Typography>
                <Typography sx={{ color: 'gray' }}>{ t('Happy Customers') }</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', display: { xs: 'none', md: 'block' } }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: '900', fontSize: { xs: '2rem', md: '2.5rem' }, color: 'white', lineHeight: 1, mb: 1 }}>4.9/5</Typography>
                <Typography sx={{ color: 'gray' }}>{ t('Average Rating') }</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', display: { xs: 'none', md: 'block' } }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: '900', fontSize: { xs: '2rem', md: '2.5rem' }, color: 'white', lineHeight: 1, mb: 1 }}>15K+</Typography>
                <Typography sx={{ color: 'gray' }}>{ t('5-Star Reviews') }</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', display: { xs: 'none', md: 'block' } }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: '900', fontSize: { xs: '2rem', md: '2.5rem' }, color: 'white', lineHeight: 1, mb: 1 }}>98%</Typography>
                <Typography sx={{ color: 'gray' }}>{ t('Would Recommend') }</Typography>
              </Box>
            </Box>
            
          </Container>

        </Box>


        <Box component={ 'section' } sx={ {
          backgroundColor: '#ff5f00',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          py: 10,
          px: 2
        } } >

          <Container maxWidth="md">
            <Typography variant='h2' component={ 'h2' } sx={ { fontWeight: '900', textAlign: 'center', color: '#fff', mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } } }>{ t('Ready to Step Up Your Game?') }</Typography>
            <Typography variant='body1' component={ 'p' } sx={ { textAlign: 'center', color: '#fff', fontSize: '1.2rem', mb: 5, px: { xs: 0, md: 4 } } }>{ t('Join the Stride community and get 15% off your first order. Plus, early access to new releases and exclusive member-only deals.') }</Typography>

            <Box sx={ { display: 'flex', justifyContent: 'center', width: '100%', mb: 2 } }>
              <Box sx={ {
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '50px',
                pl: 3,
                pr: 0.5,
                py: 0.5,
                width: '100%',
                maxWidth: '550px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              } }>
                <InputBase
                  placeholder={ t("Enter your email") }
                  sx={ {
                    ml: 1,
                    flex: 1,
                    color: '#fff',
                    fontSize: '1.1rem',
                    '& .MuiInputBase-input::placeholder': {
                      color: 'rgba(255,255,255,0.7)',
                      opacity: 1
                    }
                  } }
                />
                <Button
                  variant="contained"
                  sx={ {
                    bgcolor: '#fff',
                    color: '#ff5f00',
                    borderRadius: '50px',
                    px: { xs: 3, md: 4 },
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    whiteSpace: 'nowrap',
                    boxShadow: 'none',
                    '&:hover': {
                      bgcolor: '#f5f5f5',
                      boxShadow: 'none',
                    }
                  } }
                >
                  { t('Get 15% Off') }
                </Button>
              </Box>
            </Box>

            <Typography variant="body2" sx={ { textAlign: 'center', color: 'rgba(255, 255, 255, 0.8)', mb: 6 } }>
              { t('No spam, ever. Unsubscribe anytime.') }
            </Typography>

            <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 } }>
              <Typography variant="body1" sx={ { color: '#fff', fontWeight: 'bold' } }>
                { t('Download Our App') }
              </Typography>
              <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' } }>
                <Button
                  variant="contained"
                  startIcon={ <AppleIcon fontSize={ 'large' } /> }
                  sx={ {
                    bgcolor: 'rgba(0,0,0,0.25)',
                    color: '#fff',
                    borderRadius: '12px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    justifyContent: 'flex-start',
                    boxShadow: 'none',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.4)',
                      boxShadow: 'none',
                    }
                  } }
                >
                  <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } }>
                    <Typography variant="caption" sx={ { fontSize: '0.65rem', lineHeight: 1, mb: 0.5 } }>{ t('Download on the') }</Typography>
                    <Typography variant="body1" sx={ { fontWeight: 'bold', lineHeight: 1 } }>App Store</Typography>
                  </Box>
                </Button>

                <Button
                  variant="contained"
                  startIcon={ <PlayArrowIcon fontSize={ 'large' } /> }
                  sx={ {
                    bgcolor: 'rgba(0,0,0,0.25)',
                    color: '#fff',
                    borderRadius: '12px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    justifyContent: 'flex-start',
                    boxShadow: 'none',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.4)',
                      boxShadow: 'none',
                    }
                  } }
                >
                  <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } }>
                    <Typography variant="caption" sx={ { fontSize: '0.65rem', lineHeight: 1, mb: 0.5 } }>{ t('Get it on') }</Typography>
                    <Typography variant="body1" sx={ { fontWeight: 'bold', lineHeight: 1 } }>Google Play</Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>



     




    </Box>
  )
}
