import { Avatar, Box, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React from 'react'
import useProfile from '../../hooks/useProfile';

export default function ProfileInfo() {

  const { data } = useProfile();
  return (
    <Box>
      <Typography component={ 'h2' } variant='h4'>Personal Information</Typography>
      <Divider sx={{my:2}} />
      <Grid container >
        <Grid item size={ { xs: 12, sm: 12, md: 6, lg: 6 } }>
          <Box sx={ { display: 'flex', flexDirection: 'column', gap: 2, mt: 2 } }>
            <Box sx={ { display: 'flex', gap: 2, flexDirection: 'column' } }>
              <Avatar
                alt={data?.fullName}
                sx={ { width: 96, height: 96 } }
              />
              <Typography component={ 'h4' } sx={ { color: 'secondary.main' } }>Name</Typography>
              <TextField
                disabled
                defaultValue={ data?.fullName }
              />
            </Box>
            <Box sx={ { display: 'flex', gap: 2, flexDirection: 'column' } }>
              <Typography component={ 'h4' } sx={ { color: 'secondary.main' } }>Date Of Birth</Typography>
              <TextField
                disabled
                defaultValue={ new Date(2026, 6, 18).toLocaleDateString("en-US") }
              />
            </Box>
            <Box sx={ { display: 'flex', gap: 2, flexDirection: 'column' } }>
              <FormControl>
                <FormLabel sx={ { color: 'secondary.main' } }>Gender</FormLabel>
                <RadioGroup sx={ { flexDirection: 'row', gap: .5, flexWrap: 'wrap' } }>
                  <FormControlLabel value="female" control={ <Radio /> } label="Female" />
                  <FormControlLabel value="male" control={ <Radio /> } label="Male" />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={ { display: 'flex', gap: 2, flexDirection: 'column' } }>
              <Typography component={ 'h4' } sx={ { color: 'secondary.main' } }>Phone Number</Typography>
              <TextField
                disabled
                defaultValue={ data?.phoneNumber }
              />
            </Box>
            <Box sx={ { display: 'flex', gap: 2, flexDirection: 'column' } }>
              <Typography component={ 'h4' } sx={ { color: 'secondary.main' } }>Email</Typography>
              <TextField
                disabled
                defaultValue={ data?.email }
              />
            </Box>
          </Box>

        </Grid>
      </Grid>
    </Box>
  )
}
