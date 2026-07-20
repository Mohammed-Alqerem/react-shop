import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material';

export default function ProductCardSkeleton({ count = 6, gridSize = { xs: 12, sm: 6, lg: 4 } }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Grid item size={gridSize} key={index}>
          <Card
            sx={{
              height: '100%',
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
            }}
          >
            <Skeleton variant="rectangular" height={240} animation="wave" />
            <CardContent sx={{ p: '24px !important' }}>
              <Skeleton variant="rounded" width={100} height={32} sx={{ mb: 2 }} animation="wave" />
              <Skeleton variant="text" height={32} animation="wave" />
              <Skeleton variant="text" width="80%" animation="wave" />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Skeleton variant="text" width={80} height={40} animation="wave" />
                <Skeleton variant="text" width={60} animation="wave" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
