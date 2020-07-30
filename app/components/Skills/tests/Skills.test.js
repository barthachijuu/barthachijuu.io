/**
 *
 * Jest Unit Test for
 * Skills Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../Skills';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
    skills: [],
  };
});

beforeEach(() => {
  component = shallow(<Skills {...baseProps} />);
});

describe('<Skills />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
