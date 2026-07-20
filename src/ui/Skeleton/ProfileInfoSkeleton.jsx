import { Box, Divider, Grid, Skeleton } from '@mui/material';

export default function ProfileInfoSkeleton() {
  return (
    <Box>
      <Skeleton variant="text" width={260} height={48} animation="wave" />
      <Divider sx={{ my: 2 }} />
      <Grid container>
        <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
            <Skeleton variant="circular" width={96} height={96} animation="wave" />
            {Array.from({ length: 5 }).map((_, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton variant="text" width={120} animation="wave" />
                <Skeleton variant="rounded" height={56} animation="wave" />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
