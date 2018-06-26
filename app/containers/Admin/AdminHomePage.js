import React from 'react';
import NewProductPage from 'containers/Admin/Products/NewProductPage';
import AdminNavbar from 'components/Admin/AdminNavbar';
import { Route, Switch, Link } from 'react-router-dom';
import web from 'utils/web3';

// Styles
import 'vendor/bootstrap/css/bootstrap.min.css';

// Scripts
import 'vendor/bootstrap/js/bootstrap.min.js';

export default function AdminHomePage(props) {
  return (
    <div className="col">
      <div className="row pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>

      <div className="row">
        <div className="col md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">10 New Products</h5>
              <p className="card-text">These are the newly added products.</p>
              <a href="#" className="btn btn-primary">See Products</a>
            </div>
          </div>
        </div>

        <div className="col md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
