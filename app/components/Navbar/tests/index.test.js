import React from 'react';
import { shallow } from 'enzyme';
import Navbar from 'components/Navbar';
import { Link } from 'react-router-dom';

describe('<Navbar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it('should render 4 Links', () => {
    expect(wrapper.find(Link).length).toEqual(4);
  });

  describe('Features link', () => {
    it('should render a "Features" link', () => {
      expect(wrapper.find(Link).at(0).prop('children')).toBe('Features');
    });

    it('should have a "to" attribute', () => {
      expect(wrapper.find(Link).at(0).prop('to')).toBeDefined();
    });

    it('should have a "/features" route', () => {
      expect(wrapper.find(Link).at(0).prop('to')).toBe('/features');
    });
  });

  describe('Pricing link', () => {
    it('should render a "Pricing" link', () => {
      expect(wrapper.find(Link).at(1).prop('children')).toBe('Pricing');
    });

    it('should have a "to" attribute', () => {
      expect(wrapper.find(Link).at(1).prop('to')).toBeDefined();
    });

    it('should have a "/pricing" route', () => {
      expect(wrapper.find(Link).at(1).prop('to')).toBe('/pricing');
    });
  });

  describe('Admin link', () => {
    it('should render an "Admin" link', () => {
      expect(wrapper.find(Link).at(2).prop('children')).toBe('Admin');
    });

    it('should have a "to" attribute', () => {
      expect(wrapper.find(Link).at(2).prop('to')).toBeDefined();
    });

    it('should have an "/admin" route', () => {
      expect(wrapper.find(Link).at(2).prop('to')).toBe('/admin');
    });
  });

  describe('Sign up link', () => {
    it('should render a "Sign up" link', () => {
      expect(wrapper.find(Link).at(3).prop('children')).toBe('Sign up');
    });

    it('should have a "to" attribute', () => {
      expect(wrapper.find(Link).at(3).prop('to')).toBeDefined();
    });

    it('should have a "/signup" route', () => {
      expect(wrapper.find(Link).at(3).prop('to')).toBe('/signup');
    });
  });
});
