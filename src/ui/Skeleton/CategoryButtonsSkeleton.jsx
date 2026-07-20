import { Grid, Skeleton } from '@mui/material';

export default function CategoryButtonsSkeleton({ count = 5, gridSize = { xs: 12, sm: 6, md: 4, lg: 3 } }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Grid item size={gridSize} key={index}>
          <Skeleton variant="rounded" height={48} animation="wave" />
        </Grid>
      ))}
    </>
  );
}
