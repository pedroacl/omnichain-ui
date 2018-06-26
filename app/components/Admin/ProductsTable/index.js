import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TableRow = ({ product }) => (
  <tr>
    <td>#</td>
    <td>{product.name}</td>
    <td>{product.description}</td>
    <td>{product.currentStage}</td>
  </tr>
);

TableRow.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

const renderTable = products => (
  <div>
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Model</th>
            <th>Current Stage</th>
          </tr>
        </thead>
        <tbody>
          { products.map(product => <TableRow key={product} product={product} />) }
        </tbody>
      </table>
    </div>
  </div>
);

const ProductsTable = ({ products }) => {
  if (products.length > 0) {
    return renderTable(products);
  }

  return (
    <div>
      <h5>No Products Found</h5>
    </div>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ProductsTable;
