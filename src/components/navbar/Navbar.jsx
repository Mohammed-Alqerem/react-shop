import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent:'space-between'} }>
         
          <Typography variant="h6" component="div">
            SHOPE
          </Typography>
          
          <Box sx={{display:{xs:'none',sm:'flex'}, gap:3}}>
            <Link underline='none' component={RouterLink} to={'/'} color="inherit">Home</Link>
            <Link underline='none' component={RouterLink} to={'cart'} color="inherit">Cart</Link>
            <Link underline='none' component={RouterLink} to={'login'} color="inherit">Login</Link>
            <Link underline='none' component={RouterLink} to={'register'} color="inherit">Register</Link>
          </Box>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display:{xs:'flex',sm:'none'} } }
          >
            <MenuIcon />
          </IconButton>


        </Toolbar>
      </AppBar>
    </Box>
  );

}
