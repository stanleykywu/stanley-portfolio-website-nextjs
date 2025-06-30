import React from 'react'
import CTA from './cta/CTA'
import { Container, Grid, Avatar, ListItem, List } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGoodreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faGraduationCap, faFilePdf } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Container id='home' align='center'>
      <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center" paddingTop={12}>
        <Grid item md={4} paddingTop={2}>
          <Avatar alt='Stanley Wu' src="/static/headshot-2025.webp" variant='circular' sx={{ width: '300px', height: '300px' }} />
          <CTA />
        </Grid>
        <Grid md={1} />
        <Grid item md={7} textAlign="left">
          <h1 style={{ marginTop: 0, marginBottom: 10, fontSize: 40 }}>Stanley Wu</h1>

          <Grid container spacing={0} alignItems="left" justifyContent="left">
            <Grid item xs={4}>
              <List sx={{ paddingLeft: "0px", marginLeft: "0px" }}>
                <ListItem>
                  <i aria-hidden="true" style={{ marginRight: "5px" }}>
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#005587" }}></FontAwesomeIcon>
                  </i>
                  Chicago, IL
                </ListItem>
                <ListItem>
                  <a href='mailto: stanleywu+w@cs.uchicago.edu' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>
                    <i style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faEnvelope} style={{ color: "#005587" }}></FontAwesomeIcon>
                    </i>
                    Email
                  </a>
                </ListItem>
                <ListItem>
                  <a href="/static/cv.pdf" locale={false} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>
                    <i style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faFilePdf} style={{ color: "#005587" }}></FontAwesomeIcon>
                    </i>
                    CV
                  </a>
                </ListItem>
                <ListItem>
                  <a href='https://scholar.google.com/citations?user=wkis3pgAAAAJ&hl=en' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>
                    <i style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faGraduationCap} style={{ color: "#005587" }}></FontAwesomeIcon>
                    </i>
                    Google Scholar
                  </a>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <List>
                <ListItem>
                  <a href='https://linkedin.com/in/stanleykywu' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>
                    <i style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }}></FontAwesomeIcon>
                    </i>
                    LinkedIn
                  </a>
                </ListItem>
                <ListItem>
                  <a href='https://github.com/stanleykywu' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>
                    <i style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faGithub} style={{ color: "black" }}></FontAwesomeIcon>
                    </i>
                    GitHub
                  </a>
                </ListItem>
                <ListItem>
                  <a href='https://twitter.com/the_stanleywu' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>
                    <i style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faXTwitter} style={{ color: "black" }}></FontAwesomeIcon>
                    </i>
                    Twitter
                  </a>
                </ListItem>
                <ListItem>
                  <a href='https://goodreads.com/stanleywu' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>
                    <i style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faGoodreads} style={{ color: "#553b08" }}></FontAwesomeIcon>
                    </i>
                    goodreads
                  </a>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <p align="left" style={{}}>
            I am a 2nd year Ph.D. student at the University of Chicago <a href='https://sandlab.cs.uchicago.edu/' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>SAND Lab</a>, co-advised by <a href='https://people.cs.uchicago.edu/~ravenben/' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>Ben Zhao</a> and <a href='https://people.cs.uchicago.edu/~htzheng/' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>Heather Zheng</a>. My work is supported by the National Science Foundation's Graduate Research Fellowship (GRFP), which I received in 2024.
          </p>
          <p align="left">
            My primary academic interest lie in adversarial machine learning, with a particular focus on security issues with generative AI. Recently, I have been studying the safety limitations of generative models, and developing methods to protect human creatives against intrusive training.
          </p>
          <p>
            I received my bachelors in computer science from Northeastern University in 2023, during which I was very fortunate to work with <a href='https://www.ccs.neu.edu/home/alina/' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>Alina Oprea</a>, and <a href='https://jonathan-ullman.github.io/' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>Jonathan Ullman</a>. Before UChicago, I spent an excellent year working as a data scientist for Klaviyo.
          </p>
          <p><b>Email:</b> stanleywu+w <b>AT</b> cs <b>DOT</b> uchicago <b>DOT</b> edu</p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header