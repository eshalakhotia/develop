import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
  } from '@mui/material';
import React from 'react'

const Box = ({data, addToCart}) => {
    return (
        <Card sx={{ maxWidth: 400}}>
            <CardMedia
              component="img"
              height="200"
              image ={data.image} class="card-image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
                <Typography variant="h6" color="text.primary">
                ${data.price}
              </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.size}
              </Typography>
            </CardContent>
          <CardActions>
            <button className="add-to" onClick={() => addToCart(data)}>Add to cart</button>
          </CardActions>
        </Card>
      );
}

export default Box;

