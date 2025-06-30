import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Typography } from '@mui/material'
import { SiArxiv } from 'react-icons/si'
import { DiGithubFull } from 'react-icons/di'
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
                <strong>2025</strong>
              </Grid>
              <Grid item xs={10} md={11} style={{ marginBottom: "20px" }}>
                <div>
                  <a href="https://arxiv.org/abs/2506.21874" target="_blank" rel="noopener noreferrer" className="link-no-underline">
                    <strong style={{ color: "#005587", fontWeight: 700 }}>On the Feasibility of Poisoning Text-to-Image AI Models via Adversarial Mislabeling<br /></strong>
                  </a>
                  <b>Stanley Wu</b>, Ronik Bhaskar, Anna Yoo Jeong Ha, Shawn Shan, Haitao Zheng, Ben Y. Zhao<br />
                  <em>ACM Conference on Computer and Communications Security (CCS)</em><br />
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button variant='contained' disableElevation href='https://arxiv.org/pdf/2506.21874' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, textTransform: 'none' }} className='slight__pdfhover'>
                      pdf
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
              <Grid item xs={2} md={1} justifyContent="left">
                <strong>2024</strong>
              </Grid>
              <Grid item xs={10} md={11} style={{ marginBottom: "20px" }}>
                <div>
                  <a href="https://arxiv.org/abs/2405.06865" target="_blank" rel="noopener noreferrer" className="link-no-underline">
                    <strong style={{ color: "#005587", fontWeight: 700 }}>Disrupting Style Mimicry Attacks on Video Imagery<br /></strong>
                  </a>
                  Josephine Passananti<sup>*</sup>, <b>Stanley Wu<sup>*</sup></b>, Shawn Shan, Haitao Zheng, Ben Y. Zhao<br />
                  <em>preprint</em><br />
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button variant='contained' disableElevation href='https://arxiv.org/pdf/2405.06865' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, textTransform: 'none' }} className='slight__pdfhover'>
                      pdf
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2} md={1} justifyContent="left" />
              <Grid item xs={10} md={11} style={{ marginBottom: "20px" }}>
                <div>
                  <a href="https://arxiv.org/abs/2310.13828" target="_blank" rel="noopener noreferrer" className="link-no-underline">
                    <strong style={{ color: "#005587", fontWeight: 700 }}>Nightshade: Prompt-Specific Poisoning Attacks on Text-to-Image Generative Models<br />
                    </strong>
                  </a>
                  Shawn Shan, Wenxin Ding, Josephine Passananti, <b>Stanley Wu</b>, Haitao Zheng, Ben Y. Zhao<br />
                  <em>IEEE Symposium on Security and Privacy (Oakland)</em><br />
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button variant='contained' disableElevation href='https://arxiv.org/pdf/2310.13828' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, textTransform: 'none' }} className='slight__pdfhover'>
                      pdf
                    </Button>
                    <Button variant='contained' disableElevation href='https://github.com/Shawn-Shan/nightshade-release' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F4cBB2', color: '#000', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, textTransform: 'none' }} className='slight__githubhover'>
                      code
                    </Button>
                    <Button variant='contained' disableElevation href='https://nightshade.cs.uchicago.edu/' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#adc3ef', color: '#000', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, whiteSpace: 'nowrap', textTransform: 'none' }} className='slight__webpagehover'>
                      webpage
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2} md={1} justifyContent="left" />
              <Grid item xs={10} md={11} style={{ marginBottom: "20px" }}>
                <div>
                  <a href="https://arxiv.org/abs/2306.01181" target="_blank" rel="noopener noreferrer" className="link-no-underline">
                    <strong style={{ color: "#005587", fontWeight: 700 }}>TMI! Finetuned Models Leak Private Information from their Pretraining Data<br /></strong>
                  </a>
                  John Abascal, <b>Stanley Wu</b>, Alina Oprea, Jonathan Ullman<br />
                  <em>Privacy Enhancing Technologies Symposium (PETS)</em><br />
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button variant='contained' disableElevation href='https://petsymposium.org/popets/2024/popets-2024-0075.pdf' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, textTransform: 'none' }} className='slight__pdfhover'>
                      pdf
                    </Button>
                    <Button variant='contained' disableElevation href='https://github.com/johnmath/tmi-pets24' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F4cBB2', color: '#000', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, textTransform: 'none' }} className='slight__githubhover'>
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
                  <a href="https://arxiv.org/abs/2205.06369" target="_blank" rel="noopener noreferrer" className="link-no-underline">
                    <strong style={{ color: "#005587", fontWeight: 700 }}>How to Combine Membership-Inference Attacks on Multiple Updated Models<br /></strong>
                  </a>
                  Matthew Jagielski<sup>*</sup>, <b>Stanley Wu<sup>*</sup></b>, Alina Oprea, Jonathan Ullman, Roxana Geambasu<br />
                  <em>Privacy Enhancing Technologies Symposium (PETS)</em><br />
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button variant='contained' disableElevation href='https://petsymposium.org/popets/2023/popets-2023-0078.pdf' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, textTransform: 'none' }} className='slight__pdfhover'>
                      pdf
                    </Button>
                    <Button variant='contained' disableElevation href='https://github.com/stanleykywu/model-updates' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F4cBB2', color: '#000', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, textTransform: 'none' }} className='slight__githubhover'>
                      code
                    </Button>
                    <Button variant='contained' disableElevation href='https://www.youtube.com/watch?v=v7owmbTbEvw' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', marginTop: '10px', marginRight: "10px", padding: '0px 5px', minWidth: 0, textTransform: 'none' }} className='slight__videohover'>
                      video
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Research