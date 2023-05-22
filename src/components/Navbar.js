import React from 'react'
import { AppBar } from '@mui/material'
import { Typography } from '@mui/material'
import { Toolbar, Box, Hidden } from '@mui/material'

const Navbar = () => {
  return (
    <>
      <Box component="main">
        <AppBar component="nav">
          <Toolbar>
            <Hidden xsDown>
              {/* This will be hidden on extra small (xs) screens */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News App
              </Typography>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
