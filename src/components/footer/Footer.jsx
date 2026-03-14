import { Box, Divider, Grid, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
import Logo from '../logo'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { useTranslation } from 'react-i18next';

export default function Footer() {

  const { t } = useTranslation();

  return (
    <Box component={'footer'} py={5}>

      <Grid container spacing={5}>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
              <Logo />
              <Typography component={'p'} color={'textSecondary'}>
                {t('Premium footwear for every step of your journey. From athletic performance to everyday comfort.')}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: .5, flexWrap: 'wrap' }}>

              <IconButton sx={{ ":hover": { color: "primary.main" } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ ":hover": { color: "primary.main" } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ ":hover": { color: "primary.main" } }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton sx={{ ":hover": { color: "primary.main" } }}>
                <XIcon />
              </IconButton>


            </Box>
          </Box>

        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="h6" component="div">
                {t('Shop')}
              </Typography>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Running')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Sneakers')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Basketball')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Returns')}</Link>              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Boots')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Sandals')}</Link>
            </Box>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="h6" component="div">
                {t('Help')}
              </Typography>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('FAQ')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Shipping & Returns')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Size Guide')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Casual')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Contact Us')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Track Order')}</Link>
            </Box>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="h6" component="div">
                {t('About')}
              </Typography>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Our Story')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Sustainability')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Athletes')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Careers')}</Link>
              <Link underline={'none'} color='textSecondary' sx={{ cursor: 'pointer', ":hover": { color: 'primary.main', transition: 'all' } }}>{t('Store Locator')}</Link>
            </Box>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mt: 2, flexWrap: 'wrap' }}>
            <Box>
              <Typography component={'p'} color='textSecondary'>
                {t('© 2026 Stride. All rights reserved.')}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography component={'p'} color='textSecondary'>
                {t('Privacy')}
              </Typography>
              <Typography component={'p'} color='textSecondary'>
                {t('Terms')}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <Typography component="svg" viewBox="0 0 24 24" fill="none" sx={{ width: 50, height: 50, paddingY: .5, paddingX: 1.5, borderRadius: 2 }}> <circle cx="9" cy="12" r="6" fill="#EB001B"></circle> <circle cx="15" cy="12" r="6" fill="#F79E1B"></circle> <path d="M12 7.5a6 6 0 000 9 6 6 0 000-9z" fill="#FF5F00"></path> </Typography>
                <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold', background: '#1a1f71', color: 'white', paddingY: .5, paddingX: 1.5, borderRadius: 2 }}>VISA</Typography>
                <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold', background: '#006fcf', color: 'white', paddingY: .5, paddingX: 1.5, borderRadius: 2 }}>AMEX</Typography>
                <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold', background: 'black', color: 'white', paddingY: .5, paddingX: 1.5, borderRadius: 2 }}>Pay</Typography>
              </Box>

            </Box>
          </Box>

        </Grid>

      </Grid>
    </Box>
  )
}
