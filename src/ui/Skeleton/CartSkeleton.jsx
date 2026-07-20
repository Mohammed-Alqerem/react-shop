import { Box, Container, Divider, Grid, Skeleton } from '@mui/material';

export default function CartSkeleton() {
  return (
    <Box component="section" className="cartItem" py={5}>
      <Box sx={{ py: 5, backgroundColor: 'background.default' }}>
        <Container>
          <Skeleton variant="text" width={200} animation="wave" />
          <Skeleton variant="text" width={280} height={48} sx={{ mt: 2 }} animation="wave" />
        </Container>
      </Box>

      <Container>
        <Divider sx={{ mb: 5 }} />

        <Grid container spacing={3}>
          <Grid item size={{ xs: 12, md: 8 }}>
            <Skeleton variant="rounded" height={56} sx={{ mb: 2 }} animation="wave" />
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} variant="rounded" height={64} sx={{ mb: 1 }} animation="wave" />
            ))}
          </Grid>

          <Grid item size={{ xs: 12, md: 4 }}>
            <Box sx={{ backgroundColor: 'background.paper', p: 3, borderRadius: 2 }}>
              <Skeleton variant="text" width="60%" height={32} animation="wave" />
              <Skeleton variant="rounded" height={40} sx={{ mt: 3 }} animation="wave" />
              <Skeleton variant="rounded" height={40} sx={{ mt: 2 }} animation="wave" />
              <Divider sx={{ my: 2 }} />
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} variant="text" sx={{ mb: 1.5 }} animation="wave" />
              ))}
              <Skeleton variant="rounded" height={48} sx={{ mt: 2 }} animation="wave" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
