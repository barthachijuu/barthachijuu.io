/**
 *
 * Jest Unit Test for
 * Education Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Education from '../Education';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
    edu: [],
  };
});

beforeEach(() => {
  component = shallow(<Education {...baseProps} />);
});

describe('<Education />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
    it('should have only 1 edu id', () => {
      expect(component.find('#edu')).toHaveLength(1);
    });
  });
});
