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
  };
});

const edu = [{
  institution: 'ANFE Palermo',
  area: 'Certificate of higher qualification',
  studyType: 'Certification',
  startDate: '2010-05-01',
  endDate: '2010-11-30',
  summary: 'Palermo, Italy',
  courses: [
    'User Interface Design and Development',
    'Design Pattern',
    'Web Technologies',
    'Database',
    'Labor law',
    'Web Styling',
  ],
},
{
  institution: 'ITC Vincenzo Almanza',
  area: 'Graduation in Commercial Accounting',
  studyType: 'Graduation',
  startDate: '1994-09-01',
  endDate: '2000-07-07',
  summary: 'Pantelleria, Italy',
  courses: [
    'Commercial accounting',
    'Physics',
    'Chemistry and biology',
    'Financial mathematics',
    'Public and private law',
    'Political Economy',
  ],
}];

beforeEach(() => {
  component = shallow(<Education {...baseProps} edu={edu} />);
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
