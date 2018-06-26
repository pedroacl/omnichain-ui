import {
  LOAD_PRODUCTS, PRODUCTS_LOADED, ERROR_LOADING_PRODUCTS, LOAD_PRODUCT, PRODUCT_LOADED,
} from './constants';

export function loadProduct(productId) {
  return {
    type: LOAD_PRODUCT,
    payload: productId,
  };
}

export function productLoaded(product) {
  return {
    type: PRODUCT_LOADED,
    payload: product,
  };
}

export function loadProducts(companyAddress) {
  return {
    type: LOAD_PRODUCTS,
    payload: companyAddress,
  };
}

export function errorLoadingProducts(err) {
  return {
    type: ERROR_LOADING_PRODUCTS,
    payload: err,
  };
}

export function productsLoaded(products) {
  return {
    type: PRODUCTS_LOADED,
    payload: products,
  };
}

export function createProduct() {}
