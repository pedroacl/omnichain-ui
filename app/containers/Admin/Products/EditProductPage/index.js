import React from "react";
import Form from "./ProductForm";
import PropTypes from "prop-types";
import { compose, createStore, combineReducers } from "redux";
import { connect } from "react-redux";
import { reducer as formReducer } from "redux-form";
import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { createStructuredSelector } from "reselect";
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from "containers/App/selectors";
import { makeSelectProduct } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

export class ProductDetailsPage extends React.PureComponent {
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <div>
        <h1>Edit Product</h1>
        <Form {...this.props} />
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
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    }
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  product: makeSelectProduct(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: "products", saga });
const withReducer = injectReducer({ key: "products", reducer });

export default compose(withReducer, withSaga, withConnect)(ProductDetailsPage);
