/**
 *
 * Social Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 15-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const socialStyle = createUseStyles({

  social: {
    margin: '24px 0',
    padding: 0,
    fontSize: '30px',
    textShadow: '0px 1px 2px rgba(0, 0, 0, .8)',

    '& li': {
      display: 'inline-block',
      margin: '0 15px',
      padding: 0,

      '& a': {
        color: '#ffffff',

        '&:hover': {
          textDecoration: 'none',
          outline: 0,
          color: '#11ABB0',
          '-webkit-transition': 'color .3s ease-in-out',
          '-moz-transition': 'color .3s ease-in-out',
          '-o-transition': 'color .3s ease-in-out',
          transition: 'color .3s ease-in-out',
        },
      },
    },
  },

  /* screenwidth less than 767px  */
  '@media (max-width: 769px)': { /* stylelint-disable-line */

    social: {
      margin: '18px 0 24px 0',
      lineHeight: '36px',
      fontSize: '24px',

      '& li': {
        margin: '0 10px',
      },
    },
  },

  /* screenwidth less than 480px  */
  '@media (max-width: 480px)': { /* stylelint-disable-line */

    social: {
      fontSize: '20px',

      '& li': {
        margin: '0 6px',
      },
    },
  },
});

export default socialStyle;
