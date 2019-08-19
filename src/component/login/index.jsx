import React, {Component} from 'react';
import Navbar from "../navbar";
import {connect} from "react-redux";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class Login extends Component {
  render() {
    const {cart} = this.props;
    return (
      <div>
        <Navbar cart={cart}/>
        <br/>
        <br/>
        <br/>
        <Box component="span" m={1}>
          <Button />
        </Box>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Login);

