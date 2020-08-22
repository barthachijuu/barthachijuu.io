import mockAxios from 'axios';
import { getInfo } from '../home';

jest.mock('axios');

describe('getInfo', () => {
  it('fetch data from getInfo', async () => {
    mockAxios.mockResolvedValue({ data: { msg: 'Barthachijuu.io' }, status: 200 });
    const info = await getInfo();
    expect(info).toEqual({ response: { data: { msg: 'Barthachijuu.io' }, status: 200 } });
  });
  it('catch error from getInfo', async () => {
    mockAxios.mockRejectedValue({ data: { error: {} }, status: 500 });
    await getInfo().catch((err) => {
      expect(err).toEqual({ data: { error: {} }, status: 500 });
    });
  });
});
