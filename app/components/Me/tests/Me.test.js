/**
 *
 * Jest Unit Test for
 * Me Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Me from '../Me';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<Me {...baseProps} />);
});

describe('<Me />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
