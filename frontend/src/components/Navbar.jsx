import React from 'react'
import {Box, AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { lime } from '@mui/material/colors';

const Navbar = () => {
  return (
    <div>
      <Box sx={{flexGrow:1}}>
        <AppBar className='nav' position='static' style={{ background:lime[900] }}>
            <Toolbar>
              <Typography variant='h4' component="div" sx={{ flexGrow: 1,color:'bisque' }} >
                Online store
              </Typography>
              <Button color='inherit'>
                  <Link to={'/'} style={{textDecoration:'none',color:'bisque'}} >Home</Link></Button>
               <Button color='inherit'>
               <Link to={'/av'} style={{textDecoration:'none',color:'bisque'}} >Add product</Link></Button>
             </Toolbar>
         </AppBar>
       </Box>
    </div>
  )
}

export default Navbar
