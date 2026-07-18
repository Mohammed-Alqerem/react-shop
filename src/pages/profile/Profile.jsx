import { Avatar, Box, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { Link as ReactRouterLink, Outlet } from 'react-router-dom'
import useProfile from '../../hooks/useProfile'
import { deepOrange } from '@mui/material/colors';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import SyncLockIcon from '@mui/icons-material/SyncLock';
export default function Profile() {

    const { data } = useProfile();
    console.log(data);
    return (

        <Box p={ 10 }>
            <Grid container spacing={ 6 }>
                <Grid  item size={ { xs: 12, sm: 12, md: 3, lg: 3 } }>

                    <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap' } }>
                        <Avatar sx={ { bgcolor: deepOrange[500] } }>{ data?.fullName[0] }</Avatar>
                        <Box>
                            <Typography component={ 'h6' } variant='caption' sx={ { color: 'secondary.main' } }>Hello</Typography>
                            <Typography component={ 'h6' } variant='body2' sx={ { textTransform: 'capitalize', fontWeight: '500' } }>{ data?.fullName }</Typography>
                        </Box>

                    </Box>

                    <Divider sx={ { my: 3 } } />
                    <Box sx={ { display: 'flex', flexDirection: 'column', flexWrap: 'wrap' } }>
                        <Link sx={ {
                            display: 'flex', alignItems: 'center', gap: 3, flexGrow: 1, color: 'primary.main', textDecoration: 'none', py: 1.8, px: 2, transition: "all 0.2s ease-in-out", "&:hover": {
                                backgroundColor: 'primary.main',
                                color: 'white'
                            }
                        } } component={ ReactRouterLink } to={ '' }>
                            <PersonIcon />
                            My Account</Link>
                        <Divider />
                        <Link sx={ {
                            display: 'flex', alignItems: 'center', gap: 3, flexGrow: 1, color: 'primary.main', textDecoration: 'none', py: 1.8, px: 2, transition: "all 0.2s ease-in-out", "&:hover": {
                                backgroundColor: 'primary.main',
                                color: 'white'

                            }
                        } } component={ ReactRouterLink } to={ 'orders' }>
                            <ShoppingBasketIcon />
                            Orders</Link>
                        <Divider />
                        <Link sx={ {
                            display: 'flex', alignItems: 'center', gap: 3, flexGrow: 1, color: 'primary.main', textDecoration: 'none', py: 1.8, px: 2, transition: "all 0.2s ease-in-out", "&:hover": {
                                backgroundColor: 'primary.main',
                                color: 'white'

                            }
                        } } component={ ReactRouterLink } to={ 'changePassword' }>
                            <SyncLockIcon/>
                            Change Password</Link>
                    </Box>

                </Grid>


                <Grid item size={ { xs: 12, sm: 12, md: 9, lg: 9 } }>
                    <Outlet />
                </Grid>
            </Grid>



        </Box>


    )
}
