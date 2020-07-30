import { mock } from 'Api';
import info from './jsonmocks/getInfo';

mock.onGet('http://demo7300324.mockable.io/getAboutMe').reply(200, info);
// @generator mock:method

export default mock;
