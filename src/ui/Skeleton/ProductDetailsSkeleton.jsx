import { Box, Container, Divider, Grid, Skeleton } from '@mui/material';

export default function ProductDetailsSkeleton() {
  return (
    <Box component="section" className="productDetails">
      <Box sx={{ py: 5 }}>
        <Container>
          <Skeleton variant="text" width={280} height={24} animation="wave" />
        </Container>
      </Box>

      <Container>
        <Divider />

        <Grid container spacing={{ xs: 4, md: 8 }} py={9}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: '100%', minHeight: 400, borderRadius: 6 }}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Skeleton variant="text" width="40%" animation="wave" />
            <Skeleton variant="text" width="70%" height={48} animation="wave" />
            <Skeleton variant="text" width="50%" height={40} animation="wave" />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" width="90%" animation="wave" />
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Skeleton variant="rounded" height={56} sx={{ flexGrow: 1, borderRadius: 8 }} animation="wave" />
              <Skeleton variant="circular" width={56} height={56} animation="wave" />
            </Box>
            <Skeleton variant="rounded" height={80} sx={{ borderRadius: 3 }} animation="wave" />
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        <Skeleton variant="text" width={220} height={40} sx={{ mb: 5 }} animation="wave" />
        <Grid container spacing={3}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Grid item size={{ xs: 12, md: 4 }} key={index}>
              <Skeleton variant="rounded" height={160} animation="wave" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
