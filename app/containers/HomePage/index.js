import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Pricing from 'components/Pricing';

import 'bootstrap/dist/css/bootstrap.min.css';

// import 'vendor/bootstrap/js/bootstrap.min.js';
import 'styles/cover.css';

export default function HomePage(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
      }}
    >
      <Navbar />

      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1>A supply chain management platform powered by the Ethereum network.</h1>
      </div>

      <Pricing />
    </div>
  );
}
