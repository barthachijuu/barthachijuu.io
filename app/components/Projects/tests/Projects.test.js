/**
 *
 * Jest Unit Test for
 * Projects Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../Projects';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
    projects: [],
  };
});

beforeEach(() => {
  component = shallow(<Projects {...baseProps} />);
});

describe('<Projects />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
