import React, {Component} from 'react';
import Navbar from "../navbar";
import Product from "../products";
import {connect} from 'react-redux';
import action from '../../store/action';

class Dashboard extends Component {

  test = (product) => {
    console.log('product---',product)
  }


  render() {
    const {cart, products, addToCart} = this.props;
    return (
      <div>
        <Navbar cart={cart}/>
        <br/><br/><br/>
        <Product
          products={products}
          addcart={addToCart}
          product={this.test}
          cart={false}
        />
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

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch({
      type: action.ADD_CART,
      payload: product
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
