import { ThemeProvider } from '@mui/material'
import React from 'react'
import Routes from './routes'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
