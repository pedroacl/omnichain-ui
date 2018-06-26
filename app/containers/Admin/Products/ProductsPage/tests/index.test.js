import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import ProductsTable from 'components/Header';
import ProductsPage from 'containers/Admin/ProductsPage';
import Footer from 'components/Footer';
import App from '../index';

describe('<ProductsPage />', () => {
  it('should render a products table', () => {
    const renderedComponent = shallow(
      <ProductsPage />,
    );
    expect(renderedComponent.find(ProductsTable).length).toBe(1);
  });

  // it('should render the footer', () => {
  //   const renderedComponent = shallow(
  //     <App />
  //   );
  //   expect(renderedComponent.find(Footer).length).toBe(1);
  // });
});
