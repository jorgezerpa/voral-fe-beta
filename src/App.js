import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Store } from './pages/Store';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import theme from './themes/theme';

import { ContextProvider } from './context/context'

const App = () => {
  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Router>
              <Routes>
                <Route path='/store' element={<Store />} />
                {/* <Route path='*' element={<NotFound />} /> */}
              </Routes>
            </Router>
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}

export default App