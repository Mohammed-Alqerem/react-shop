import { Box, Paper, Skeleton } from '@mui/material';

export default function OrdersTableSkeleton() {
  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', gap: 2, flexDirection: 'column' }}>
        <Skeleton variant="text" width={220} height={48} animation="wave" />
        <Skeleton variant="text" width="70%" animation="wave" />
      </Box>
      <Paper sx={{ width: '100%', p: 2 }}>
        <Skeleton variant="rounded" height={48} sx={{ mb: 1 }} animation="wave" />
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} variant="rounded" height={52} sx={{ mb: 1 }} animation="wave" />
        ))}
        <Skeleton variant="rounded" height={52} sx={{ mt: 2 }} animation="wave" />
      </Paper>
    </Box>
  );
}
