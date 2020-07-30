/**
 *
 * Jest Unit Test for
 * ErrorPage Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from '../ErrorPage';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<ErrorPage {...baseProps} />);
});

describe('<ErrorPage />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
