import React from 'react'
import Header from './header/Header'
import Head from 'next/head';
import Research from './research/Research'
import CssBaseline from "@mui/material/CssBaseline";
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
      fontFamily: 'Montserrat',
      fontWeightLight: 200,
      fontWeightRegular: 300,
      fontWeightMedium: 400,
      fontWeightBold: 500,
    },
  });

function Home () {
    return (
        <>
            <Head>
                <title>Stanley Wu</title>
                <meta name="description" content='I am a 1st-year PhD student at the University of Chicago SAND Lab, co-advised by Professor Ben Y. Zhao and Professor Heather Zheng.'/>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <ThemeProvider theme={theme}>
                <link
                rel="canonical"
                href="https://stanleywu.me"
                key="canonical"
                />
                <CssBaseline />
                <Header />
                <Research />
            </ThemeProvider>
        </>
    )
  }
  
  export default Home