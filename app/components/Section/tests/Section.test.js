/**
 *
 * Jest Unit Test for
 * Section Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import 'mutationobserver-shim';
import Section from '../Section';

let component;
let baseProps;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<Section {...baseProps} />);
});

describe('<Section />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
  });
});
