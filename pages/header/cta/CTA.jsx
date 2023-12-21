import { Box, List, ListItem } from '@mui/material'
import React from 'react'

const CTA = () => {
  return (
    <Box bgcolor="#E5EDF1" sx={{ borderRadius: '16px', margin: '21px', marginTop: '35px', padding: '5px' }}>
      <h3 style={{ paddingBottom: "0px", marginBottom: "0px" }}><b>FRESH OFF THE PRESS</b></h3>
      <List>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>Dec, 2023:</b> <a href='https://arxiv.org/abs/2312.07731' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>A response</a> to IMPRESS on weakening Glaze is now on arXiv</ListItem>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>Aug, 2023:</b> Joined the SAND Lab as a CS PhD Student</ListItem>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>July, 2023:</b> Webglaze is released! More on the <a href='https://glaze.cs.uchicago.edu/webglaze.html' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Glaze homepage</a></ListItem>
      </List>
    </Box>
  )
}

export default CTA