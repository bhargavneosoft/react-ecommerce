import action from '../store/action';
import products from "../assets/product";

const initialState = {
  products: products,
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
};


const reducer = (state = initialState, actions) => {
  console.info('GET_CART :- ', state.cart);
  switch (actions.type) {
    case action.ADD_CART:
      if (!state.cart.includes(actions.payload)) {
        localStorage.setItem('cart', JSON.stringify([...state.cart, actions.payload]))
      }
      return {
        ...state,
        cart: (!state.cart.includes(actions.payload)) ? [...state.cart, actions.payload] : [...state.cart]
      };
    default:
      return {
        ...state
      }
  }
};

export default reducer;
