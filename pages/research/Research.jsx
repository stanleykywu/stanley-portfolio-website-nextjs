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
        <Grid md={7.5}>
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
                  <strong>Prompt-Specific Poisoning Attacks on Text-to-Image Generative Models<br/>
                  </strong>Shawn Shan, Wenxin Ding, Josephine Passananti, Stanley Wu, Haitao Zheng, Ben Y. Zhao<br/>
                  <em>preprint</em><br/>
                  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <Button variant='contained' disableElevation href='https://arxiv.org/abs/2310.13828' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#B31A1B', maxWidth: '30px', marginTop: '10px' }} className='slight__arxivhover'>
                        <SiArxiv size={30} style={{color: '#fff', maxWidth: '40'}}/>
                      </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2} md={1} justifyContent="left">
                <strong>2023</strong>
              </Grid>
              <Grid item xs={10} md={11} style={{ marginBottom: "20px"}}>
                <div>
                  <strong>TMI! Finetuned Models Leak Private Information from their Pretraining Data<br/>
                  </strong>John Abascal, Stanley Wu, Alina Oprea, Jonathan Ullman<br/>
                  <em>preprint</em><br/>
                  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <Button variant='contained' disableElevation href='https://arxiv.org/abs/2306.01181' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#B31A1B', maxWidth: '30px', marginTop: '10px' }} className='slight__arxivhover'>
                        <SiArxiv size={30} style={{color: '#fff', maxWidth: '40'}}/>
                      </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
              <Grid item xs={2} md={1} justifyContent="left"/>
              <Grid item xs={10} md={11}>
                <div>
                  <strong>How to Combine Membership-Inference Attacks on Multiple Updated Models<br/>
                  </strong>Matthew Jagielski, Stanley Wu, Alina Oprea, Jonathan Ullman, Roxana Geambasu<br/>
                  <em>Privacy Enhancing Technologies Symposium (PETs), 2023</em><br/>
                  <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <Button variant='contained' disableElevation href='https://arxiv.org/abs/2205.06369' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#B31A1B', maxWidth: '30px', marginTop: '10px', marginRight:"10px"}} className='slight__arxivhover'>
                        <SiArxiv size={30} style={{color: '#fff', maxWidth: '40'}}/>
                      </Button>
                      <Button variant='contained' disableElevation href='https://github.com/stanleykywu/model-updates' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F4cBB2', maxWidth: '30px', marginTop: '10px' }} className='slight__githubhover'>
                        <DiGithubFull size={30} style={{color: '#000'}}/>
                      </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid> 
        <Grid md={4}>
          <Contact/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Research