import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Typography } from '@mui/material'
import {SiArxiv} from 'react-icons/si'
import {DiGithubFull} from 'react-icons/di'
import Contact from './contact/Contact'

const Research = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Container id='research' align='center' sx={{ overflow: 'auto' }}>
      <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
        <Grid md={11}>
          <div align="left">
            <h2 style={{ paddingTop: 50, marginBottom: 30 }}>Papers</h2>
          </div>
          <Container align="left" style={{ padding: 0, marginBottom: 50 }}>
            <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
              <Grid item xs={2} md={1} justifyContent="left">
                <strong>2024</strong>
              </Grid>
              <Grid item xs={10} md={11} style={{ marginBottom: "20px"}}>
                <div>
                  <strong>Disrupting Style Mimicry Attacks on Video Imagery<br/>
                  </strong>Josephine Passananti<sup>*</sup>, <b>Stanley Wu<sup>*</sup></b>, Shawn Shan, Haitao Zheng, Ben Y. Zhao<br/>
                  <em>preprint</em><br/>
                  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Button variant='contained' disableElevation href='https://arxiv.org/abs/2405.06865' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', marginTop: '10px', marginRight:"10px", padding: '0px 5px', minWidth: 0, textTransform: 'none'}} className='slight__pdfhover'>
                      pdf
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2} md={1} justifyContent="left"/>
              <Grid item xs={10} md={11} style={{ marginBottom: "20px"}}>
                <div>
                  <strong>Nightshade: Prompt-Specific Poisoning Attacks on Text-to-Image Generative Models<br/>
                  </strong>Shawn Shan, Wenxin Ding, Josephine Passananti, <b>Stanley Wu</b>, Haitao Zheng, Ben Y. Zhao<br/>
                  <em>IEEE Symposium on Security and Privacy (Oakland)</em><br/>
                  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Button variant='contained' disableElevation href='https://arxiv.org/abs/2310.13828' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', marginTop: '10px', marginRight:"10px", padding: '0px 5px', minWidth: 0, textTransform: 'none'}} className='slight__pdfhover'>
                      pdf
                    </Button>
                    <Button variant='contained' disableElevation href='https://nightshade.cs.uchicago.edu/' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#adc3ef', color: '#000', marginTop: '10px', marginRight:"10px", padding: '0px 5px', minWidth: 0, whiteSpace: 'nowrap', textTransform: 'none'}} className='slight__webpagehover'>
                      webpage
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2} md={1} justifyContent="left"/>
              <Grid item xs={10} md={11} style={{ marginBottom: "20px"}}>
                <div>
                  <strong>TMI! Finetuned Models Leak Private Information from their Pretraining Data<br/>
                  </strong>John Abascal, <b>Stanley Wu</b>, Alina Oprea, Jonathan Ullman<br/>
                  <em>Privacy Enhancing Technologies Symposium (PETS)</em><br/>
                  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Button variant='contained' disableElevation href='https://arxiv.org/abs/2306.01181' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', marginTop: '10px', marginRight:"10px", padding: '0px 5px', minWidth: 0, textTransform: 'none'}} className='slight__pdfhover'>
                      pdf
                    </Button>
                    <Button variant='contained' disableElevation href='https://github.com/johnmath/tmi-pets24' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F4cBB2', color: '#000', marginTop: '10px', marginRight:"10px", padding: '0px 5px', minWidth: 0, textTransform: 'none'}} className='slight__githubhover'>
                      code
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
              <Grid item xs={2} md={1} justifyContent="left">
                <strong>2023</strong>
              </Grid>
              <Grid item xs={10} md={11}>
                <div>
                  <strong>How to Combine Membership-Inference Attacks on Multiple Updated Models<br/>
                  </strong>Matthew Jagielski<sup>*</sup>, <b>Stanley Wu<sup>*</sup></b>, Alina Oprea, Jonathan Ullman, Roxana Geambasu<br/>
                  <em>Privacy Enhancing Technologies Symposium (PETS)</em><br/>
                  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Button variant='contained' disableElevation href='https://petsymposium.org/popets/2023/popets-2023-0078.pdf' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', marginTop: '10px', marginRight:"10px", padding: '0px 5px', minWidth: 0,textTransform: 'none'}} className='slight__pdfhover'>
                      pdf
                    </Button>
                    <Button variant='contained' disableElevation href='https://github.com/stanleykywu/model-updates' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F4cBB2', color: '#000', marginTop: '10px', marginRight:"10px", padding: '0px 5px', minWidth: 0, textTransform: 'none'}} className='slight__githubhover'>
                      code
                    </Button>
                    <Button variant='contained' disableElevation href='https://www.youtube.com/watch?v=v7owmbTbEvw' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', marginTop: '10px', marginRight:"10px", padding: '0px 5px', minWidth: 0, textTransform: 'none'}} className='slight__videohover'>
                      video
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid> 
        {/* <Grid md={3}>
          <Contact/>
        </Grid> */}
      </Grid>
    </Container>
  )
}

export default Research