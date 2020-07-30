/**
 *
 * Jest Unit Test for
 * Home Route
 *
 */
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

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
  it('should render self', () => {
    expect(render).toHaveLength(1);
  });
});
