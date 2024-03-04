import { Container, Grid } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Head from 'next/head';

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

export default function About() {
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    return <>
        <Head>
            <title>Past News</title>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <ThemeProvider theme={theme}>
        <Container id='research' align='center' sx={{ overflow: 'auto' }}>
        <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
            <Grid md={7.5}>
            <div align="left">
                <h2 style={{ paddingTop: 70, marginBottom: 30 }}>(Not) So Fresh Off the Press</h2>
            </div>
            <Container align="left" style={{ padding: 0 }}>
                <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
                <Grid item xs={2} md={1} justifyContent="left">
                    <strong>2023</strong>
                </Grid>
                <Grid item xs={10} md={11}>
                    <div>
                    <strong>December<br/>
                    </strong><a href='https://arxiv.org/abs/2312.07731' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Response</a> to the IMPRESS paper on weakening Glaze<br/>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    </div>
                    </div>
                </Grid>
                </Grid>
                <br></br>
                <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
                <Grid item xs={2} md={1} justifyContent="left"/>
                <Grid item xs={10} md={11}>
                    <div>
                    <strong>October<br/>
                    </strong>Nightshade project is covered in the <a href='https://www.technologyreview.com/2023/10/23/1082189/data-poisoning-artists-fight-generative-ai/' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>MIT Tech Review</a><br/>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    </div>
                    </div>
                </Grid>
                </Grid>
                <br></br>
                <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
                <Grid item xs={2} md={1} justifyContent="left"/>
                <Grid item xs={10} md={11}>
                    <div>
                    <strong>August<br/>
                    </strong>I joined the University of Chicago as a PhD Student studying Computer Science<br/>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    </div>
                    </div>
                </Grid>
                </Grid>
                <br></br>
                <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
                <Grid item xs={2} md={1} justifyContent="left"/>
                <Grid item xs={10} md={11}>
                    <div>
                    <strong>July<br/>
                    </strong>Calling all artists! Webglaze is now available @ <a href='https://webglaze.cs.uchicago.edu/' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>webglaze.cs.uchicago.edu</a><br/>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    </div>
                    </div>
                </Grid>
                </Grid>
                <br></br>
                <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
                <Grid item xs={2} md={1} justifyContent="left"/>
                <Grid item xs={10} md={11}>
                    <div>
                    <strong>March<br/>
                    </strong>Our <a href='https://petsymposium.org/popets/2023/popets-2023-0078.pdf' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>paper</a> on Membership Inference and Model Updates was accepted to the <i>Privacy Enhancing Technologies Symposium 2023</i><br/>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    </div>
                    </div>
                </Grid>
                </Grid>
                <br></br>
                <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
                <Grid item xs={2} md={1} justifyContent="left">
                    <strong>2022</strong>
                </Grid>
                <Grid item xs={10} md={11} style={{ marginBottom: "20px"}}>
                    <div>
                    <strong>December<br/>
                    </strong>Graduated from Northeastern University<br/>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    </div>
                    </div>
                </Grid>
                </Grid>
            </Container>
            </Grid> 
        </Grid>
        </Container>
        <CssBaseline />
        </ThemeProvider>
    </>
}