import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { alpha } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import TranslateIcon from '@mui/icons-material/Translate';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuthStore } from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';
import useThemeStore from '../../store/useThemeStore';
import i18n from '../../../i18next';
import Logo from './../Logo';

// A quiet gold thread used as the single accent — echoes a receipt/ticket
// stub, tying back to the storefront without leaning on a stock palette.
const ACCENT = '#C9A227';

function NavLink({ to, label, active }) {
  return (
    <Link
      underline="none"
      component={RouterLink}
      to={to}
      color="inherit"
      sx={{
        position: 'relative',
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.2,
        py: 0.5,
        opacity: active ? 1 : 0.75,
        transition: 'opacity 160ms ease',
        '&:hover': { opacity: 1 },
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -4,
          height: 2,
          borderRadius: 1,
          backgroundColor: ACCENT,
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 200ms ease',
        },
        '&:hover::after': { transform: 'scaleX(1)' },
      }}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const { t } = useTranslation();
  const { data } = useCart();
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (value) => () => setDrawerOpen(value);

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });

  const cartCount = data?.items?.length || 0;
  const isActive = (path) => location.pathname === path;

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  const handleLogout = () => {
    setDrawerOpen(false);
    navigate('/login');
    logout();
  };

  const navItems = [
    { to: '/', label: t('Home'), icon: <HomeOutlinedIcon fontSize="small" /> },
    { to: '/profile', label: t('Profile'), icon: <PersonOutlineIcon fontSize="small" /> },
    ...(token ? [{ to: '/cart', label: t('Cart'), icon: <ShoppingBagOutlinedIcon fontSize="small" /> }] : []),
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={(theme) => ({
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha(theme.palette.background.default, scrolled ? 0.85 : 0.6),
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
          transition: 'background-color 220ms ease, box-shadow 220ms ease',
          color: theme.palette.text.primary,
        })}
      >
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2, minHeight: 68 }}>

          {/* Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Logo />
          </Box>

          {/* Primary nav — desktop */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 4,
              mx: 'auto',
            }}
          >
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} label={item.label} active={isActive(item.to)} />
            ))}
          </Box>

          {/* Actions */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>

            <Tooltip title={i18n.language === 'en' ? 'العربية' : 'English'}>
              <IconButton
                size="small"
                onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
                sx={{ border: '1px solid', borderColor: 'divider' }}
              >
                <TranslateIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title={mode === 'light' ? t('Dark mode') : t('Light mode')}>
              <IconButton size="small" onClick={toggleTheme} sx={{ border: '1px solid', borderColor: 'divider' }}>
                {mode === 'light' ? <DarkModeOutlinedIcon fontSize="small" /> : <LightModeOutlinedIcon fontSize="small" />}
              </IconButton>
            </Tooltip>

            <Tooltip title={t('Cart')}>
              <IconButton
                component={RouterLink}
                to="/cart"
                size="small"
                sx={{ ml: 0.5 }}
                aria-label={t('Cart')}
              >
                <Badge
                  badgeContent={cartCount}
                  sx={{ '& .MuiBadge-badge': { backgroundColor: ACCENT, color: '#1B1B1B', fontWeight: 700 } }}
                >
                  <ShoppingBagOutlinedIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Divider orientation="vertical" flexItem sx={{ mx: 1, my: 1 }} />

            {token ? (
              <Chip
                onClick={handleLogout}
                icon={<LogoutIcon fontSize="small" />}
                label={t('Logout')}
                variant="outlined"
                sx={{ borderRadius: 2, fontWeight: 500 }}
              />
            ) : (
              <Chip
                component={RouterLink}
                to="/login"
                clickable
                icon={<LoginIcon fontSize="small" />}
                label={t('Login')}
                sx={{
                  borderRadius: 2,
                  fontWeight: 600,
                  backgroundColor: ACCENT,
                  color: '#1B1B1B',
                  '&:hover': { backgroundColor: alpha(ACCENT, 0.85) },
                }}
              />
            )}
          </Box>

          {/* Mobile trigger */}
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="end"
            color="inherit"
            aria-label={t('Open menu')}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <SwipeableDrawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Logo />
              <IconButton onClick={toggleDrawer(false)} aria-label={t('Close menu')}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider />

            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar sx={{ bgcolor: ACCENT, color: '#1B1B1B', width: 36, height: 36 }}>
                <PersonOutlineIcon fontSize="small" />
              </Avatar>
              <Box sx={{ minWidth: 0 }}>
                <Box sx={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>
                  {token ? t('Welcome back') : t('Guest')}
                </Box>
                <Box sx={{ fontSize: 12, opacity: 0.6 }}>
                  {token ? t('Signed in') : t('Sign in to check out')}
                </Box>
              </Box>
            </Box>

            <Divider />

            <List sx={{ px: 1, py: 1 }} onClick={toggleDrawer(false)}>
              {navItems.map((item) => (
                <ListItemButton
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  selected={isActive(item.to)}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    '&.Mui-selected': { backgroundColor: alpha(ACCENT, 0.14) },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                  />
                </ListItemButton>
              ))}

              {cartCount > 0 && (
                <ListItemButton
                  component={RouterLink}
                  to="/cart"
                  sx={{ borderRadius: 2, mb: 0.5 }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Badge badgeContent={cartCount} sx={{ '& .MuiBadge-badge': { backgroundColor: ACCENT, color: '#1B1B1B' } }}>
                      <ShoppingBagOutlinedIcon fontSize="small" />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary={t('View cart')}
                  />
                </ListItemButton>
              )}
            </List>

            <Divider sx={{ mt: 'auto' }} />

            <Box sx={{ p: 2, display: 'flex', gap: 1 }}>
              <Chip
                size="small"
                icon={<TranslateIcon fontSize="small" />}
                label={i18n.language === 'en' ? 'العربية' : 'English'}
                onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
              <Chip
                size="small"
                icon={mode === 'light' ? <DarkModeOutlinedIcon fontSize="small" /> : <LightModeOutlinedIcon fontSize="small" />}
                label={mode === 'light' ? t('Dark') : t('Light')}
                onClick={toggleTheme}
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
            </Box>

            <Box sx={{ p: 2, pt: 0 }}>
              {token ? (
                <Chip
                  onClick={handleLogout}
                  icon={<LogoutIcon fontSize="small" />}
                  label={t('Logout')}
                  variant="outlined"
                  sx={{ width: '100%', borderRadius: 2, fontWeight: 500 }}
                />
              ) : (
                <Chip
                  component={RouterLink}
                  to="/login"
                  clickable
                  onClick={toggleDrawer(false)}
                  icon={<LoginIcon fontSize="small" />}
                  label={t('Login')}
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    fontWeight: 600,
                    backgroundColor: ACCENT,
                    color: '#1B1B1B',
                    '&:hover': { backgroundColor: alpha(ACCENT, 0.85) },
                  }}
                />
              )}
            </Box>
          </SwipeableDrawer>

        </Toolbar>
      </AppBar>
    </Box>
  );
}