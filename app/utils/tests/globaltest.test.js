import 'regenerator-runtime/runtime';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const { nullSafe, handlingResponse } = require('../globalMethods/');
const { getDisplayDate, generateRand } = require('../utils/');

describe('nullSafe', () => {
  test('Return the passing value', () => {
    const resp = nullSafe(() => 10, 1);
    expect(resp).toBe(10);
  });
  test('Return a safe value', () => {
    const resp = nullSafe(null, 1);
    expect(resp).toBe(1);
  });
});

describe('handlingResponse', () => {
  test('Handling the 401 status', () => {
    const result = handlingResponse({ statusText: 'ko', status: 401 });
    expect(result).toHaveProperty(['error', 'type']);
  });
  test('Handling the 404 status', () => {
    const result = handlingResponse({ statusText: 'ko', status: 404 });
    expect(result).toHaveProperty(['error', 'type']);
  });
  test('Handling the 500 status', () => {
    const result = handlingResponse({ statusText: 'ko', status: 500 });
    expect(result).toHaveProperty(['error', 'type']);
  });
  test('Handling the defult status', () => {
    const result = handlingResponse({ statusText: 'ko', status: 505 });
    expect(result).toHaveProperty(['error', 'type']);
  });
  test('Handling the 200 status', () => {
    const result = handlingResponse({ statusText: 'ok', status: 200 });
    expect(result).toHaveProperty('response');
  });
});

describe('getDisplayDate', () => {
  test('Return the formatted date when Present string is passed', () => {
    const resp = getDisplayDate('2020-01-01', 'Present');
    expect(resp).toBe('01-01-2020 - Present');
  });
  test('Return the formatted date when Present string is not passed', () => {
    const resp = getDisplayDate('2015-01-01', '2019-12-31');
    expect(resp).toBe('01-01-2015 - 31-12-2019');
  });
});

describe('generateRand', () => {
  test('Return a random number', () => {
    const resp = generateRand();
    expect(resp).toBeGreaterThan(10);
  });
});
