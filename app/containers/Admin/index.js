import React from 'react';
import AdminHomePage from 'containers/Admin/AdminHomePage';
import NewProductPage from 'containers/Admin/Products/NewProductPage';
import ProductsPage from 'containers/Admin/Products/ProductsPage';
import Wrapper from './Wrapper';
import Sidebar from 'components/Admin/Sidebar';
import AdminNavbar from 'components/Admin/AdminNavbar';
import { Route, Switch, Link } from 'react-router-dom';
import web from 'utils/web3';

import { Home } from 'react-feather';
import * as Icon from 'react-feather';

// import 'vendor/bootstrap/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'styles/dashboard.css';

export default function AdminPage(props) {
  return (
    <Wrapper>
      <AdminNavbar />

      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <Sidebar />
          </nav>

          <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
            <Switch>
              <Route path="/admin/products/new" component={NewProductPage} />
              <Route path="/admin/products" component={ProductsPage} />
              <Route path="/admin" component={AdminHomePage} />
            </Switch>
          </main>
        </div>
      </div>
    </Wrapper>
  );
}
