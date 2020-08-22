/**
 *
 * Jest Unit Test for
 * Projects Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../Projects';

let baseProps;
let component;
let mockOpen;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

const projects = [
  {
    name: 'barthachijuu.io',
    publisher: 'barthachijuu',
    category: 'Web',
    releaseDate: '2016-09-01',
    website: 'https://github.com/barthachijuu/barthachijuu.io',
    summary: 'Lorem Ipsum',
    image: {
      modal: '/images/modal/barthachijuu.png',
      thumb: '/images/modal/thumb/barthachijuu_thumb.png',
    },
    keywords: [
      'Node.js',
      'React.js',
    ],
    isOpen: false,
  },
  {
    name: 'FE React Ark',
    publisher: 'barthachijuu',
    category: 'Web',
    releaseDate: '2019-04-14',
    website: 'https://github.com/barthachijuu/FeReactArk',
    summary: 'Lorem Ipsum Dolor Sit',
    image: {
      modal: '/images/modal/fereact.jpg',
      thumb: '/images/modal/thumb/fereact_thumb.jpg',
    },
    keywords: [
      'JavaScript',
      'React',
      'Node',
      'Webpack',
    ],
    isOpen: false,
  },
];

beforeEach(() => {
  mockOpen = jest.fn();
  component = shallow(<Projects {...baseProps} projects={projects} openModal={mockOpen} closeModal={mockOpen} />);
});

describe('<Projects />', () => {
  describe('Rendering', () => {
    it('should render self', () => {
      expect(component).toHaveLength(1);
    });
    it('test div click for openmodal', () => {
      component.find('#project0').simulate('click');
      expect(mockOpen.mock.calls.length).toEqual(1);
    });
    it('test button click for closemodal', () => {
      component.find('#dismiss0').simulate('click');
      expect(mockOpen.mock.calls.length).toEqual(1);
    });
    it('should match the snapshot', () => {
      expect(component.html()).toMatchSnapshot();
    });
  });
});
