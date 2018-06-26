
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCTS, LOAD_PRODUCT } from './constants';
import { productLoaded, productsLoaded, errorLoadingProducts } from './actions';
import axios from 'axios';

import request from 'utils/request';

/**
 * Worker sagas
 */
export function* loadProducts(action) {
  try {
    const requestURL = 'products';
    // const params = { companyAddress: action.payload };
    // const products = yield call(() => axios.get('products', { params }).then(res => res.data));
    const products = [
      {
        name: 'Test Product 1',
        description: 'Test Product 1 description',
        currentStage: 'Test Product 1 current stage',
      },
      {
        name: 'Test Product 2',
        description: 'Test Product 2 description',
        currentStage: 'Test Product 2 current stage',
      },
    ];

    yield put(productsLoaded(products));
  } catch (err) {
    yield put(errorLoadingProducts(err));
  }
}

// Load a product's details
export function* loadProduct(action) {
  // const product = yield call(() => axios.get('products/' + action.payload).then(res =>
  //   res.data
  // ));
  const product = {
    name: 'Test Product 1',
    description: 'Test Description 1',
  };

  yield put(productLoaded(product));
}

// export function* createProduct(action) {
//   const requestURL = 'products';

//   try {
//     const products = yield call(request(requestURL, action.payload));
//     yield put(productsLoaded(products));
//   } catch (err) {
//     yield put(errorLoadingProducts(err));
//   }
// }

/**
 * Watcher sagas
 */

function* watchLoadProducts() {
  yield takeLatest(LOAD_PRODUCTS, loadProducts);
}

function* watchLoadProduct() {
  yield takeLatest(LOAD_PRODUCT, loadProduct);
}

function* watchCreateProduct() {
  yield takeLatest(CREATE_PRODUCT, createProduct);
}

export default function* rootSaga() {
  yield all([watchLoadProducts(), watchLoadProduct()]);
}
