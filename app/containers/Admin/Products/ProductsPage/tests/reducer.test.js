import { fromJS } from 'immutable';

import { productsLoaded } from '../actions';
import productsReducer from '../reducer';
import { LOAD_PRODUCT, PRODUCTS_LOADED } from '../constants';

describe('ProductsPage reducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      products: [],
      product: undefined,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(productsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should add the products to the state', () => {
    const products = [{
      name: 'Product',
    }];

    const expectedResponse = fromJS({
      products,
      product: undefined,
    });

    expect(productsReducer(state, productsLoaded(products))).toEqual(expectedResponse);
  });
});
