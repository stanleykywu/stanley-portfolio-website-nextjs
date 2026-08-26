import { Box, List, ListItem } from '@mui/material'
import React from 'react'

const CTA = () => {
  return (
    <Box bgcolor="#DAEBFE" sx={{ borderRadius: '16px', margin: '21px', marginTop: '35px', padding: '5px' }}>
      <h3 style={{ paddingBottom: "0px", marginBottom: "0px" }}><b>FRESH OFF THE PRESS</b></h3>
      <List>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>Jun. 2026:</b> New <a href="https://arxiv.org/abs/2606.18052" target="_blank" rel="noopener noreferrer">preprint</a> out! Large measurement study on AI music.</ListItem>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>May. 2026:</b> <a href="https://www.etch-humanity.org/etch-lab/quicksilver-plugin" target="_blank" rel="noopener noreferrer">Quicksilver</a> AI music detector released.</ListItem>
      </List>
    </Box>
  )
}

export default CTA