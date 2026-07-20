import { Box, Grid, Skeleton } from '@mui/material';

export default function ShopProductSkeleton({ count = 8, gridSize = { xs: 12, sm: 6, md: 4, lg: 3 } }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Grid item size={gridSize} key={index}>
          <Box>
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: '100%', aspectRatio: '1 / 1', borderRadius: '15px' }}
            />
            <Skeleton variant="text" width="60%" sx={{ mt: 2 }} animation="wave" />
            <Skeleton variant="text" width="90%" height={32} animation="wave" />
            <Skeleton variant="text" width="40%" animation="wave" />
          </Box>
        </Grid>
      ))}
    </>
  );
}
