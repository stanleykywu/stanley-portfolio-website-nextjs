import { Box, List, ListItem } from '@mui/material'
import React from 'react'

const CTA = () => {
  return (
    <Box bgcolor="#E5EDF1" sx={{ borderRadius: '16px', margin: '21px', marginTop: '35px', padding: '5px' }}>
      <h3 style={{ paddingBottom: "0px", marginBottom: "0px" }}><b>FRESH OFF THE PRESS</b></h3>
      <List>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>Aug, 2023:</b>  Joined SAND Lab</ListItem>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>July, 2023:</b> Webglaze is released! More on the <a href='https://glaze.cs.uchicago.edu/webglaze.html' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Glaze homepage</a></ListItem>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>March, 2023:</b> <a href='https://petsymposium.org/popets/2023/popets-2023-0078.pdf' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}> Paper</a> on Membership Inference and Model Updates accepted to <i>PETS 2023</i></ListItem>
      </List>
    </Box>
  )
}

export default CTA