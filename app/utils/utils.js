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

/**  @function
 * * Scroll into view with settimeout method
 *
 * @name scrollView
 * @returns {function} the required component
 */
export const scrollView = () => {
  setTimeout(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, 0);
};
