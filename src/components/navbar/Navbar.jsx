import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';
import { Badge, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslation } from 'react-i18next';
import PersonIcon from '@mui/icons-material/Person';
import i18n from '../../../i18next';
import useThemeStore from '../../store/useThemeStore';
import Logo from '../logo';

export default function Navbar() {

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const { t } = useTranslation();
  const { data } = useCart();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login')
  }

  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar position="static">
        <Toolbar sx={ { justifyContent: 'space-between' } }>

          <Box>
            <Logo />
          </Box>

          <Button variant='contained' onClick={ () => changeLanguage(i18n.language === 'en' ? 'ar' : 'en') }>
            { i18n.language === 'en' ? 'Ar' : 'En' }
          </Button>
          <Button variant='contained' onClick={ toggleTheme }>
            { mode === 'light' ? 'Dark' : 'Light' }
          </Button>

          <Box sx={ { display: { xs: 'none', sm: 'flex' }, gap: 3 } }>

            <Link underline='none' component={ RouterLink } to={ '/' } color="inherit">{ t('Home') }</Link>
            <Link underline='none' component={ RouterLink } to={ '/profile' } color="inherit" aria-label={ t('Profile') }>
              <PersonIcon />
            </Link>
            { token ?
              (
                <>
                  <Link underline='none' component={ RouterLink } to={ '/cart' } color="inherit">
                    <Badge badgeContent={ data?.items?.length || 0 } color="success">
                      <ShoppingCartIcon />
                    </Badge>
                  </Link>
                  <Link underline='none' component={ 'button' } onClick={ handleLogout } color="inherit">{ t('Logout') }</Link>
                </>

              ) :

              (
                <Link underline='none' component={ RouterLink } to={ '/login' } color="inherit">{ t('Login') }</Link>
              )
            }
          </Box>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={ { mr: 2, display: { xs: 'flex', sm: 'none' } } }
          >
            <MenuIcon />
          </IconButton>


        </Toolbar>
      </AppBar>
    </Box>
  );

}
