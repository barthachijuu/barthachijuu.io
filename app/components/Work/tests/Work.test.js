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
  };
});

const works = [
  {
    company: 'Luna Labs',
    position: 'Software Analyst',
    website: 'https://https://www.lunalabs.it/',
    startDate: '2019-10-04',
    endDate: 'Present',
    summary: 'Milan, Italy',
    highlights: [
      'Analysis of the technical specifications of the projects and planning of development flows.',
      'Development of the source code and creation of the architectural structure.',
      'Supervision and maintenance of projects carried out by other teams.',
    ],
  },
  {
    company: 'Reply IrisCube',
    position: 'Senior Software Engineer (Team Lead)',
    website: 'https://www.reply.com/it/',
    startDate: '2015-06-08',
    endDate: 'Present',
    summary: 'Milan, Italy',
    highlights: [
      'He is developing part of the architectural section of an internal Intesa Sanpaolo project.',
      'Creation of the frontend architectural structure for Nexi\'s internal projects',
    ],
  },
];
beforeEach(() => {
  component = shallow(<Work {...baseProps} works={works} />);
});

describe('<Work />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
    it('should match the snapshot', () => {
      expect(component.html()).toMatchSnapshot();
    });
  });
});
