/**
 *
 * Jest Unit Test for
 * Section Component
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import 'mutationobserver-shim';
import { scrollView } from 'Utility/utils';
import Section from '../Section';

let component;
let baseProps;

beforeAll(() => {
  delete global.window.location;
  global.window = Object.create(window);
  global.window.location = {
    href: 'https: //barthachijuu.dev/#work',
    ancestorOrigins: {},
    origin: 'https://barthachijuu.dev',
    protocol: 'https:',
    host: 'barthachijuu.dev',
    hostname: 'barthachijuu.dev',
    port: '',
    pathname: '/',
    search: '',
    hash: '#work',
  };

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
  describe('Check the DOM tag', () => {
    it('should contain at least one section ', () => {
      expect(component.find('#edu')).toHaveLength(1);
    });
  });

  it('mock setTimeout test', () => {
    jest.useFakeTimers();
    scrollView();
    jest.runAllTimers();
  });
});
