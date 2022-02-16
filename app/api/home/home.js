import axios from 'axios';
import { handlingResponse } from 'Utility/globalMethods';
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
if (ISMOCK) {
  const mock = require('Mocks/home/home');
}
/* eslint-enable no-unused-vars */
/* eslint-enable global-require */

// eslint-disable-next-line import/prefer-default-export
export async function getInfo(params) {
  let data;

  try {
    data = await axios({
      method: 'get',
      url: 'https://demo6568667.mockable.io/getAboutMe',
      data: { ...params },
    });
    return handlingResponse(data);
  } catch (error) {
    return handlingResponse(error);
  }
}
// @generator api:method
