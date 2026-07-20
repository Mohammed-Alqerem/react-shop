import { Avatar, Box, Divider, Grid, Link, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link as ReactRouterLink, Outlet, useLocation } from 'react-router-dom'
import useProfile from '../../hooks/useProfile'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import SyncLockIcon from '@mui/icons-material/SyncLock';

export default function Profile() {
    const { data } = useProfile();
    const location = useLocation();
    const theme = useTheme();
    
    const navItems = [
        { icon: PersonIcon, label: 'My Account', path: '' },
        { icon: ShoppingBasketIcon, label: 'Orders', path: 'orders' },
        { icon: SyncLockIcon, label: 'Change Password', path: 'changePassword' },
    ];

    const isActive = (path) => {
        return location.pathname.endsWith(path);
    };

    return (
        <Box sx={{ 
            minHeight: '100vh',
            background: theme.palette.mode === 'light' 
                ? 'linear-gradient(135deg, rgba(217, 95, 19, 0.04) 0%, rgba(100, 116, 139, 0.03) 100%)'
                : 'linear-gradient(135deg, rgba(217, 95, 19, 0.08) 0%, rgba(100, 116, 139, 0.04) 100%)',
            backgroundColor: theme.palette.background.default,
            py: { xs: 3, sm: 4, md: 6 },
            px: { xs: 2, sm: 3, md: 4 },
            transition: 'background-color 0.3s ease-in-out'
        }}>
            <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} maxWidth="1400px" mx="auto">
                
                {/* Sidebar */}
                <Grid item size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: 3,
                            backgroundColor: theme.palette.background.paper,
                            border: '1px solid',
                            borderColor: theme.palette.divider,
                            borderRadius: '16px',
                            backdropFilter: 'blur(8px)',
                            position: 'sticky',
                            top: 25,
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                borderColor: theme.palette.primary.main,
                                borderWidth: '1px',
                                boxShadow: theme.palette.mode === 'light'
                                    ? '0 8px 24px rgba(217, 95, 19, 0.12)'
                                    : '0 8px 24px rgba(217, 95, 19, 0.2)'
                            }
                        }}
                    >
                        {/* Profile Header */}
                        <Box sx={{ display: 'flex', gap: 2.5, mb: 3 }}>
                            <Avatar 
                                sx={{ 
                                    bgcolor: theme.palette.primary.main,
                                    width: 56,
                                    height: 56,
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    boxShadow: theme.palette.mode === 'light'
                                        ? `0 4px 12px rgba(217, 95, 19, 0.25)`
                                        : `0 4px 12px rgba(217, 95, 19, 0.35)`,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: theme.palette.mode === 'light'
                                            ? `0 6px 16px rgba(217, 95, 19, 0.35)`
                                            : `0 6px 16px rgba(217, 95, 19, 0.45)`
                                    }
                                }}
                            >
                                {data?.fullName?.[0]?.toUpperCase()}
                            </Avatar>
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography 
                                    variant='caption' 
                                    sx={{ 
                                        color: theme.palette.text.secondary,
                                        fontSize: '0.7rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.6px',
                                        fontFamily: '"Outfit", sans-serif'
                                    }}
                                >
                                    Welcome back
                                </Typography>
                                <Typography 
                                    variant='body2' 
                                    sx={{ 
                                        fontWeight: '700',
                                        fontSize: '1.05rem',
                                        color: theme.palette.text.primary,
                                        mt: 0.75,
                                        fontFamily: '"Outfit", sans-serif'
                                    }}
                                >
                                    {data?.fullName || 'User'}
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2.5, opacity: 0.6, borderColor: theme.palette.divider }} />

                        {/* Navigation */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.path);
                                
                                return (
                                    <Link
                                        key={item.path}
                                        component={ReactRouterLink}
                                        to={item.path}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            px: 2,
                                            py: 1.4,
                                            borderRadius: '12px',
                                            color: active ? '#ffffff' : theme.palette.text.secondary,
                                            textDecoration: 'none',
                                            fontSize: '0.95rem',
                                            fontWeight: active ? '700' : '600',
                                            fontFamily: '"Outfit", sans-serif',
                                            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                            background: active 
                                                ? theme.palette.primary.main
                                                : 'transparent',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: '-100%',
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
                                                transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                opacity: active ? 1 : 0,
                                            },
                                            '&:hover': {
                                                background: active 
                                                    ? theme.palette.primary.main
                                                    : theme.palette.mode === 'light'
                                                        ? 'rgba(217, 95, 19, 0.08)'
                                                        : 'rgba(217, 95, 19, 0.12)',
                                                color: active ? '#ffffff' : theme.palette.primary.main,
                                                paddingLeft: '24px',
                                                '&::before': {
                                                    left: '100%',
                                                }
                                            },
                                            '&:active': {
                                                transform: 'scale(0.98)',
                                            }
                                        }}
                                    >
                                        <Icon sx={{ 
                                            fontSize: '1.3rem',
                                            transition: 'all 0.25s ease-in-out',
                                            opacity: active ? 1 : 0.8
                                        }} />
                                        <Typography 
                                            component="span"
                                            sx={{ 
                                                fontSize: '0.95rem',
                                                letterSpacing: '0.2px',
                                                fontFamily: '"Outfit", sans-serif'
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                    </Link>
                                );
                            })}
                        </Box>
                    </Paper>
                </Grid>

                {/* Main Content */}
                <Grid item size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            border: '1px solid',
                            borderColor: theme.palette.divider,
                            borderRadius: '16px',
                            p: { xs: 3, sm: 4, md: 4 },
                            minHeight: '400px',
                            transition: 'all 0.3s ease-in-out',
                           
                        }}
                    >
                        <Outlet />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}