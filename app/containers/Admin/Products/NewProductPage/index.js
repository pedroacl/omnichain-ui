import React from 'react';
import PropTypes from 'prop-types';
import { compose, createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Link } from 'react-router-dom';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import injectReducer from 'utils/injectReducer';
import { makeSelectProduct } from './selectors';

import Wrapper from './Wrapper';

export class NewProductPage extends React.PureComponent {
  render() {
    const { loading, error } = this.props;

    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">New Product</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <Link className="btn btn-danger" to="/admin/products">
                {'Cancel'}
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4 className="mb-3">Details</h4>
            <form className="needs-validation" noValidate="">
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="firstName">Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                  <div className="invalid-feedback">
                  Valid first name is required.
                </div>
                </div>
              </div>

              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="firstName">Details</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                  <div className="invalid-feedback">
                  Valid first name is required.
                </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select className="custom-select d-block w-100" id="country" required="">
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                  Please select a valid country.
                </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select className="custom-select d-block w-100" id="state" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>

              <hr className="mb-4" />

              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="same-address" />
                <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
              </div>

              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="save-info" />
                <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
              </div>

              <hr className="mb-4" />
              <button className="btn btn-primary btn-lg btn-block" type="submit">Create Product</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// NewProductPage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.bool,
//   ]),
//   repos: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.bool,
//   ]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func,
// };

export function mapDispatchToProps(dispatch) {
  return {
  };
}

const mapStateToProps = createStructuredSelector({
  product: makeSelectProduct(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(NewProductPage);
