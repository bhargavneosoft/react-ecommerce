import React, {Component} from 'react';
import Navbar from "../navbar";
import {connect} from 'react-redux';
import action from '../../store/action';
import Product from "../products";

class Index extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <Navbar cart={cart}/>
        <br/><br/><br/>
        <Product
          products={{ products : cart }}
          cart={true}
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
export default connect(mapStateToProps)(Index);
