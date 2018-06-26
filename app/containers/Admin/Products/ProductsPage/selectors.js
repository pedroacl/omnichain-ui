/**
 * ProductsPage selectors
 */

import { createSelector } from 'reselect';

const selectProducts = state => state.get('productsPage');

const makeSelectProducts = () => createSelector(
  selectProducts,
  productsState => productsState.get('products'),
);

const makeSelectProduct = () => createSelector(
  selectProducts,
  productsState => productsState.get('product'),
);

export {
  selectProducts,
  makeSelectProduct,
  makeSelectProducts,
};
