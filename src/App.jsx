import React, { useEffect, useState, useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './../i18next';
import { useTranslation } from 'react-i18next';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import getTheme from '../theme';
import useThemeStore from './store/useThemeStore';

export default function App() {
  const [init, setInit] = useState(false);
  const queryClient = useMemo(() => new QueryClient(), []);
  const { i18n } = useTranslation();

  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const dir = i18n.language === 'en' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: 9999 },
    particles: {
      number: {
        value: 100,
        density: { enable: true, area: 800 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: { min: 1, max: 5 }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        outModes: { default: "out" }
      }
    },
    background: {
      color: "transparent"
    }
  };

  return (
    <QueryClientProvider client={queryClient}>

      <ThemeProvider theme={getTheme(mode)}>

        {init && (
          <Particles
            id="tsparticles"
            options={particlesOptions}
          />
        )}

        <RouterProvider router={router} />
        <CssBaseline />
        <ToastContainer />
      </ThemeProvider>

    </QueryClientProvider>
  );
}