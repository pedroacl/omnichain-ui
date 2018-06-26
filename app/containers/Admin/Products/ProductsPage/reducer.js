import { fromJS } from 'immutable';
import { PRODUCTS_LOADED, PRODUCT_LOADED } from './constants';

const initialState = fromJS({
  products: [],
});

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return state.set('products', fromJS(action.payload));
    case PRODUCT_LOADED:
      return state.set('product', fromJS(action.payload));
    default:
      return state;
  }
}

export default productsReducer;
