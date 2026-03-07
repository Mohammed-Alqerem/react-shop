import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader() {
  return <CircularProgress sx={ { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } } />
}
