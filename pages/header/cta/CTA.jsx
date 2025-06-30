import { Box, List, ListItem } from '@mui/material'
import React from 'react'

const CTA = () => {
  return (
    <Box bgcolor="#E5EDF1" sx={{ borderRadius: '16px', margin: '21px', marginTop: '35px', padding: '5px' }}>
      <h3 style={{ paddingBottom: "0px", marginBottom: "0px" }}><b>FRESH OFF THE PRESS</b></h3>
      <List>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>June, 2025:</b> <a href='https://arxiv.org/abs/2506.21874' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>Paper</a> on diffusion model poisoning via VLM adversarial examples accepted to CCS '25</ListItem>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>April, 2024:</b> I received the National Science Foundation Graduate Research Fellowship (NSF GRFP) </ListItem>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>April, 2024:</b> <a href='https://arxiv.org/abs/2310.13828' target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black' }}>Nightshade paper</a> accepted to Oakland '24</ListItem>
      </List>
    </Box>
  )
}

export default CTA