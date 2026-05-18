import { Box, List, ListItem } from '@mui/material'
import React from 'react'

const CTA = () => {
  return (
    <Box bgcolor="#DAEBFE" sx={{ borderRadius: '16px', margin: '21px', marginTop: '35px', padding: '5px' }}>
      <h3 style={{ paddingBottom: "0px", marginBottom: "0px" }}><b>FRESH OFF THE PRESS</b></h3>
      <List>
        <ListItem sx={{ display: 'list-item', pl: 4 }}><b>Jan, 2026:</b> T2I model provenance paper accepted to USENIX '26!</ListItem>
      </List>
    </Box>
  )
}

export default CTA