/**
 *
 * Jest Unit Test for
 * Work Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Work from '../Work';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
    works: [],
  };
});

beforeEach(() => {
  component = shallow(<Work {...baseProps} />);
});

describe('<Work />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
