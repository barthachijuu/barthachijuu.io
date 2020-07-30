/**
 *
 * Jest Unit Test for
 * Banner Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Banner from '../Banner';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<Banner {...baseProps} />);
});

describe('<Banner />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
    it('should has a class attribute', () => {
      expect(component.find('div').first().hasClass('row')).toBe(true);
    });
    it('should render an <h1> tag', () => {
      expect(component.find('h1')).toHaveLength(1);
    });
  });
});
