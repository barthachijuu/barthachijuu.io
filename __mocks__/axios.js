const axios = {
  __esModule: true,
  default: jest.fn(() => Promise.resolve({ data: {} })),
  get: jest.fn(),
};
module.exports = axios;
