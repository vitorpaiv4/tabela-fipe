import ResultProvider from '@/context/ResultProvider';
import '../styles/globals.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    background: {
      default: '#fff'  
    }
  }
});

function MyApp({ Component, pageProps }:any) {
  return (
    <ResultProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />  // Reset CSS e define o fundo padrão
        <Component {...pageProps} />
      </ThemeProvider>
    </ResultProvider>
  );
}

export default MyApp;
