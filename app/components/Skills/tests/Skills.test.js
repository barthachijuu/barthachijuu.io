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
let mockEnter;
let mockLeave;

const enterTarget = {
  target: {
    style: {
      background: '#11ABB0',
      transition: 'all .3s ease-in-out',
    },
  },
};
const leaveTarget = {
  target: {
    style: {
      background: '#313131',
    },
  },
};
const skills = [
  {
    title: 'Programming Languages',
    description: [
      'Worked primarily with JavaScript, with frameworks such as Express.js,React.js, Angular and Vue.',
      'Interested in serverless architectures and frontend aechitecture.',
    ],
    skillDetails: [
      {
        name: 'JavaScript',
        level: '90',
        keywords: [
          'programming',
          'expressjs',
          'react',
        ],
      },
      {
        name: 'CSS',
        level: '80',
        keywords: [
          'styling',
        ],
      },
      {
        name: 'HTML',
        level: '80',
        keywords: [
          'programming',
          'formatting',
        ],
      },
      {
        name: 'PHP',
        level: '50',
        keywords: [
          'programming',
        ],
      },
    ],
  },
  {
    title: 'Database Systems',
    description: [
      'Experienced in both SQL and NoSQL, having worked in companies making use of MongoDB and MySQL.',
    ],
    skillDetails: [
      {
        name: 'MySQL',
        level: '80',
        keywords: [
          'database',
          'sql',
        ],
      },
      {
        name: 'MongoDB',
        level: '50',
        keywords: [
          'database',
          'nosql',
        ],
      },
      {
        name: 'PostgreSQL',
        level: '40',
        keywords: [
          'database',
          'sql',
        ],
      },
      {
        name: 'OrientDB',
        level: '30',
        keywords: [
          'database',
          'nosql',
        ],
      },
    ],
  },
];

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  component = shallow(<Skills {...baseProps} skills={skills} />);
  mockEnter = jest.fn();
  mockLeave = jest.fn();
});

describe('<Skills />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
    it('test mouse enter', () => {
      mockEnter();
      component.find('#JavaScript').simulate('mouseenter', leaveTarget);
      expect(mockEnter).toHaveBeenCalled();
    });
    it('test mouse leave', () => {
      mockLeave();
      component.find('#JavaScript').simulate('mouseleave', enterTarget);
      expect(mockLeave).toHaveBeenCalled();
    });
  });
});
