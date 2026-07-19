import { Box, Typography, Button, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@mui/system';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px 10px rgba(211, 47, 47, 0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

export default function Unauthorized() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: 520,
          width: '100%',
          textAlign: 'center',
          p: { xs: 4, sm: 6 },
          borderRadius: 4,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(20,20,20,0.9) 100%)'
              : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.95) 100%)',
          backdropFilter: 'blur(12px)',
          border: (theme) =>
            `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
          animation: `${fadeInUp} 0.6s ease-out`,
        }}
      >
        {/* Lock Icon */}
        <Box
          sx={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
            animation: `${pulse} 2.5s ease-in-out infinite`,
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: 42, color: '#fff' }} />
        </Box>

        {/* Error Code */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', sm: '4rem' },
            fontWeight: 800,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(90deg, #d32f2f, #ff6659, #d32f2f)',
            backgroundSize: '200% auto',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: `${shimmer} 3s linear infinite`,
            mb: 1,
          }}
        >
          403
        </Typography>

        {/* Title */}
        <Typography
          variant="h5"
          component="h1"
          fontWeight={700}
          sx={{ mb: 1.5 }}
        >
          Access Denied
        </Typography>

        {/* Message */}
        <Typography
          color="text.secondary"
          sx={{
            mb: 4,
            maxWidth: 380,
            mx: 'auto',
            lineHeight: 1.7,
            fontSize: '0.95rem',
          }}
        >
          You don't have permission to access this page. Please sign in with an
          authorized account or return to the homepage.
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button
            component={RouterLink}
            to="/login"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
              color: '#fff',
              px: 4,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '0.95rem',
              boxShadow: '0 4px 14px rgba(211, 47, 47, 0.35)',
              transition: 'all 0.25s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #b71c1c 0%, #d32f2f 100%)',
                boxShadow: '0 6px 20px rgba(211, 47, 47, 0.45)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Sign In
          </Button>

          <Button
            component={RouterLink}
            to="/"
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '0.95rem',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
              color: 'text.primary',
              transition: 'all 0.25s ease',
              '&:hover': {
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                transform: 'translateY(-2px)',
                background: (theme) =>
                  theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
              },
            }}
          >
            Go Home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
