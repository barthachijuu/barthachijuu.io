/**
 *
 * Jest Unit Test for
 * DotLoader Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import DotLoader from '../DotLoader';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<DotLoader {...baseProps} />);
});

describe('<DotLoader />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
