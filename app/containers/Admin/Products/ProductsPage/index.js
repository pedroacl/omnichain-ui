import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import saga from "./saga";
import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from "containers/App/selectors";
import { loadProducts } from "./actions";
import { makeSelectProducts } from "./selectors";
import reducer from "./reducer";
import ProductsTable from "components/Admin/ProductsTable";
import { Link } from "react-router-dom";
import { productsListQuery } from "./queries";
import { Query } from "react-apollo";

export class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.loadProducts(this.props.companyAddress);
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Products</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <Link className="btn btn-primary" to="/admin/products/new">
                {"Add Product"}
              </Link>
            </div>
          </div>
        </div>

        <Query query={productsListQuery} variables={{ stageID: 1 }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return <ProductsTable products={[]} />;
          }}
        </Query>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadProducts: companyAddress => dispatch(loadProducts(companyAddress))
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  products: makeSelectProducts(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: "productsPage", saga });
const withReducer = injectReducer({ key: "productsPage", reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ProductsPage);
