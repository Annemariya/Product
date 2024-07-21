import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
const Cardco = () => {
    var [output,setOutput]=useState([])
    useEffect(()=>{
    //    URL of API of jsonplaceholders
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            console.log(response.data)
            setOutput(response.data)
        })
        .catch(()=>{console.log(error)})   
     },[])
    
  return (
    <>
      <Grid container spacing={2}>
          {output.map((val,i)=>{
            return(
              <>
              <Grid item xs={12} md={4}>
              <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={val.image}
          alt='book'
           />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title:{val.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Category:{val.category}
          </Typography>
            <Typography variant="body2" color="text.secondary">
            Price:{val.price}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
            </Grid>
    </>
)
})}


</Grid>
</>
  )
}

export default Cardco
