import moment from 'moment';

/**  @function
 * * Visualize the passed date in format DD-MM-YYY
 *
 * @name getDisplayDate
 * @param {string} from
 * @param {string} to
 * @returns {string} the formatted date
 */

// eslint-disable-next-line import/prefer-default-export
export const getDisplayDate = (from, to) => {
  if (to === 'Present') {
    return `${moment(from).format('DD-MM-YYYY')} - Present`;
  }
  return `${moment(from).format('DD-MM-YYYY')} - ${moment(to).format('DD-MM-YYYY')}`;
};

/**  @function
 * * Generate a random index for map function
 *
 * @name generateRand
 * @returns {int} the random generated
 */
export const generateRand = () => (Math.floor(Math.random() * (128000 - 1) + 1));
