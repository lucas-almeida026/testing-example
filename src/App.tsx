import { ThemeProvider } from '@mui/material'
import React from 'react'
import { AuthProvider } from './contexts/auth'
import Routes from './routes'
import theme from './theme'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
