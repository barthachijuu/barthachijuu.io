/**
 *
 * Jest Unit Test for
 * Navbar Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<Navbar {...baseProps} />);
});

describe('<Navbar />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
