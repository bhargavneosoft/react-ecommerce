import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../assets/app.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import moment from "moment";

function Product(props) {
  return (
    <div>
      <Grid container className="grid_container" spacing={1}>
        {props.products.products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index} className="grid_item">
            <Card className="card">
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className="avatar">
                    {product.name.substring(0, 1)}
                  </Avatar>
                }
                title={product.name}
                subheader={moment(product.date).format('MMMM Do, YYYY')}/>
              <CardMedia
                onClick={() => props.product(product)}
                className="card_media"
                image={product.url}
                title={product.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description.substring(0, 200)}
                </Typography>
              </CardContent>
              {
                !props.cart ?
                  <CardActions disableSpacing className="card_action">
                    <IconButton aria-label="Add to cart" onClick={() => props.addcart(product)}>
                      <ShoppingCart aria-label="Add to cart"/>
                    </IconButton>
                  </CardActions>
                  : ''
              }
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Product;
