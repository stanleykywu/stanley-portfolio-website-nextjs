import Header from './header/Header'
import Head from 'next/head';
import Research from './research/Research'
import CssBaseline from "@mui/material/CssBaseline";
import InteractiveButton from './components/interactive-button';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff"
    },
    text: {
      primary: "#242526"
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

function Home() {
  return (
    <>
      <Head>
        <title>Stanley Wu</title>
        <meta name="description" content='I am a 2nd-year PhD student at the University of Chicago SAND Lab, co-advised by Professor Ben Y. Zhao and Professor Heather Zheng.' />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <link
          rel="canonical"
          href="https://stanley-wu.com"
          key="canonical"
        />
        <CssBaseline />
        <Header />
        <Research />
        <InteractiveButton />
      </ThemeProvider>
    </>
  )
}

export default Home