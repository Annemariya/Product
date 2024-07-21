import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Addpro = () => {
  return (
    <>
      <Box color={'transparent'}>
    <Card style={{marginTop:'5%',textAlign:'center'}} >
     <CardContent>
      <Typography variant='h5' style={{color:'darkblue'}}>Add new Product</Typography><br/>
      <TextField required id="outlined-basic" label="Product Name" variant="outlined"  
      /><br/>
      <TextField required id="outlined-basic" label="Image" variant="outlined" 
       /><br/>
      <TextField required id="outlined-basic" label="Price" variant="outlined"
        /><br/>
      <TextField  required id="outlined-basic" label="Category" variant="outlined" 
       /><br/><br/>
      <Button variant="contained" ><Link to='/' style={{textDecoration:'none',color:'white'}}>Add Product</Link></Button>
      </CardContent>
      </Card>
      </Box>
    </>
  )
}

export default Addpro
