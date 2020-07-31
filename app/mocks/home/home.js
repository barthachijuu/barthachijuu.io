import { mock } from 'Api';
import info from './jsonmocks/getInfo';

mock.onGet('https://demo7300324.mockable.io/getAboutMe').reply(200, info);
// @generator mock:method

export default mock;
