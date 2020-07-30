/**
 *
 * Jest Unit Test for
 * Footer Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<Footer {...baseProps} />);
});

describe('<Footer />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
