/**
 *
 * Jest Unit Test for
 * Social Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Social from '../Social';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<Social {...baseProps} />);
});

describe('<Social />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
