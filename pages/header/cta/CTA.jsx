import { Box, List, ListItem } from '@mui/material'
import React from 'react'

const CTA = () => {
  return (
    <Box bgcolor="#E5EDF1" sx={{ borderRadius: '16px', margin: '21px', marginTop: '35px', padding: '5px' }}>
      <h3 style={{ paddingBottom: "0px", marginBottom: "0px" }}><b>FRESH OFF THE PRESS</b></h3>
      <List>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>April, 2024:</b> I received the National Science Foundation Graduate Research Fellowship (NSF GRFP) </ListItem>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>April, 2024:</b> <a href='https://arxiv.org/abs/2312.07731' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Nightshade paper</a> accepted to Oakland '24</ListItem>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>February, 2024:</b> <a href='https://arxiv.org/abs/2306.01181' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>TMI! Paper</a> accepted to PETS '24</ListItem>
      </List>
    </Box>
  )
}

export default CTA