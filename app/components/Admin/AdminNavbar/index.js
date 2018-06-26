import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

function AdminNavbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark p-0 shadow">
      <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
        OmniChain
      </Link>

      <button className="navbar-toggler m-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse pl-1" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminNavbar;
