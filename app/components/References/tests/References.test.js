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
const references = [{
  name: 'Alberto Pahle',
  position: 'Senior Interface Developer',
  company: 'Fineco Bank',
  reference: 'Lorem Ipsum.',
},
{
  name: 'Vincenzo Bonura',
  position: 'Responsible',
  company: 'Sicilian Tourist Service',
  reference: 'Lorem Ipsum Dolor Sit',
},
{
  name: 'Federico Tremarco',
  position: 'Revenue Management Planning & Forecasting ',
  company: 'Alitalia s.p.a.',
  reference: 'Lorem Ipsum Dolor Sit Cillum',
},
];
beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<References {...baseProps} references={references} />);
});

describe('<References />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
    it('should match the snapshot', () => {
      expect(component.html()).toMatchSnapshot();
    });
  });
});
