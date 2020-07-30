/**
 *
 * Jest Unit Test for
 * References Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import 'mutationobserver-shim';
import References from '../References';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
    references: [],
  };
});

beforeEach(() => {
  component = shallow(<References {...baseProps} />);
});

describe('<References />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
