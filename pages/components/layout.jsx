import { Button, Toolbar, Box, AppBar } from "@mui/material";

import React, { Component } from 'react';


const Header = () => {
  return (
    <>
      <AppBar position="fixed" elevation={0} style={{ background: "#E5EDF1" }}>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
              {/* whatever is on the left side */}
          </Box>
          <Button href="." style={{ color:"black" }}>Home</Button>
          <Button href=".#contact" style={{ color:"black" }}>Contact</Button>
          {/* <Button href=".#research">Papers</Button> */}
          <Button href="/static/resume.pdf" locale={false}  target="_blank" style={{ color:"black" }}>CV</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Header />
        {children}
      </div>
    );
  }
}

export default Layout;