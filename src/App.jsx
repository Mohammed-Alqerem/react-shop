import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './../i18next'
import { useTranslation } from 'react-i18next'
export default function App() {

  const queryClient = new QueryClient();

  const { i18n } = useTranslation();

  useEffect(() => {
      const dir = i18n.language === 'en' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', dir);
      document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language])

  return (
    <>
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router}/>
      </QueryClientProvider>
      
    </>
  )
}
