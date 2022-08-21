import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Editor from './pages/Editor/Editor';
import Inicial from './pages/Inicial/Inicial'

// MUI theme personalization
const theme = createTheme({
  palette: {
    primary: {
      main: '#224d8f',
    },
    secondary: {
      main: '#6029d6',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicial/>} />
            <Route path='/editor/' element={<Editor/>} />            
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
