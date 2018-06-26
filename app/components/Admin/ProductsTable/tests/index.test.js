import React from 'react';
import { shallow } from 'enzyme';

import ProductsTable from '../ProductsTable';

describe('<ProductsTable />', () => {
  let productsTable;
  let products;

  beforeEach(() => {
    products = [{
      name: 'Test Product',
    }];

    productsTable = shallow(<ProductsTable products={products} />);
  });

  it('should render an <table> tag', () => {
    expect(productsTable.find('table').length).toEqual(1);
  });

  it('should render a <thead> tag', () => {
    expect(productsTable.find('thead').length).toEqual(1);
  });

  it('should render a <tbody> tag', () => {
    expect(productsTable.find('tbody').length).toEqual(1);
  });

  it('should render a .table-responsive class', () => {
    expect(productsTable.find('.table-responsive').length).toEqual(1);
  });

  describe('Table columns', () => {
    let tableColumns;

    beforeEach(() => {
      tableColumns = productsTable.find('th');
    });

    it('should render five columns', () => {
      expect(tableColumns.length).toEqual(4);
    });

    it('should render a "#" header', () => {
      expect(tableColumns.first().text()).toEqual('#');
    });

    it('should render a "Name" header', () => {
      expect(tableColumns.at(1).text()).toEqual('Name');
    });

    it('should render a "Model" header', () => {
      expect(tableColumns.at(2).text()).toEqual('Model');
    });

    it('should render a "Current Stage" header', () => {
      expect(tableColumns.at(3).text()).toEqual('Current Stage');
    });
  });


  // it('should have a className attribute', () => {
  //   const renderedComponent = shallow(<A />);
  //   expect(renderedComponent.prop('className')).toBeDefined();
  // });

//   it('should adopt a valid attribute', () => {
//     const id = 'test';
//     const renderedComponent = shallow(<A id={id} />);
//     expect(renderedComponent.prop('id')).toEqual(id);
//   });

//   it('should not adopt an invalid attribute', () => {
//     const renderedComponent = shallow(<A attribute={'test'} />);
//     expect(renderedComponent.prop('attribute')).toBeUndefined();
//   });
});
