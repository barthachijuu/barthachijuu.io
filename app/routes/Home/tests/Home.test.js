/**
 *
 * Jest Unit Test for
 * Home Route
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';
import { doGetInfo } from '../modules/HomeActions';

let baseProps;
let render;

beforeAll(() => {
  baseProps = {
    router: {
    },
  };
});

beforeEach(() => {
  render = shallow(<Home {...baseProps} />);
});

describe('<Home /> rendering', () => {
  jest.unmock('react-redux');
  it('should render self', () => {
    expect(render).toHaveLength(1);
  });
});

describe('Home actions', () => {
  it('should dispatch GET_INFO action', () => {
    expect(doGetInfo()).toEqual({ type: 'home/get_info', payload: {} });
  });
});
