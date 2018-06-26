/**
 * Tests for the ProductsPage sagas
 */
import { put } from 'redux-saga/effects';

import {
  loadProduct as loadProductAction,
  loadProducts as loadProductsAction,
  productLoaded as productLoadedAction,
  productsLoaded as productsLoadedAction,
  errorLoadingProducts as errorLoadingProductsAction,
} from 'containers/Admin/ProductsPage/actions';

import { loadProducts as loadProductsSaga, loadProduct as loadProductSaga } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('loadProducts Saga', () => {
  let loadProductsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    loadProductsGenerator = loadProductsSaga(loadProductsAction(1));

    const selectDescriptor = loadProductsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = loadProductsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the productsLoaded action if it requests the data successfully', () => {
    const response = [
      {
        name: 'Test Product 1',
        description: 'Test Product 1 description',
      },
      {
        name: 'Test Product 2',
        description: 'Test Product 2 description',
      },
    ];

    const putDescriptor = loadProductsSaga(loadProductsAction(1));
    expect(putDescriptor.next().value).toEqual(put(productsLoadedAction(response)));
    expect(putDescriptor.next().done).toEqual(true);
  });

  // it('should call the productsLoadingError action if there is a response error', () => {
  //   const errMsg = 'Error loading products';
  //   const putDescriptor = loadProductsSaga(loadProductsAction(1)).throw(errMsg);
  //   expect(putDescriptor).toEqual(put(errorLoadingProductsAction(response)));
  // });
});

describe('loadProduct Saga', () => {
  let loadProductGenerator;

  beforeEach(() => {
    loadProductGenerator = loadProductSaga(loadProductAction(1));

    const selectDescriptor = loadProductGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = loadProductGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loadProduct action if the request is successful', () => {
    const product = {
      name: 'Test Product 1',
      description: 'Test Description 1',
    };

    const putDescriptor = loadProductSaga(loadProductAction(1));
    expect(putDescriptor.next().value).toEqual(put(productLoadedAction(product)));
  });
});
