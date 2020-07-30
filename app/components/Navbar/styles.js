/**
 *
 * Navbar Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 14-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const navbarStyle = createUseStyles({

  navigator: {
    width: '100%',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    margin: '0 auto',
    zIndex: 100,
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: '#232222',

    '& .mobilebtn': {
      display: 'none',
    },

    '& ul, li, a': {
      margin: 0,
      padding: 0,
      border: 'none',
      outline: 'none',
    },

    '& ul': {
      minHeight: '48px',
      width: 'auto',
      textAlign: 'center',

      '& li': {
        position: 'relative',
        listStyle: 'none',
        height: '48px',
        display: 'inline-block',
        fontFamily: "'Rokkitt 'sans-serif'",

        '& a': {
          display: 'inline-block',
          padding: '8px 13px',
          lineHeight: '32px',
          textDecoration: 'none',
          textAlign: 'left',
          color: '#ffffff',
          '-webkit-transition': 'color .2s ease-in-out',
          '-moz-transition': 'color .2s ease-in-out',
          '-o-transition': 'color .2s ease-in-out',
          '-ms-transition': 'color .2s ease-in-out',
          transition: 'color .2s ease-in-out',

          '&:hover': {
            textDecoration: 'none',
            outline: 0,
            color: '#00e676',
            '-webkit-transition': 'color .3s ease-in-out',
            '-o-transition': 'color .3s ease-in-out',
            transition: 'color .3s ease-in-out',
          },
        },
      },
    },
  },

  current: {
    color: '#11abb0 !important',
  },

  /* screenwidth less than 900px  */
  '@media only screen and (max-width: 900px)': { /* stylelint-disable-line */

    navigator: {
      letterSpacing: '1.5px',
      fontSize: '11px',
    },
  },

  /* mobile wide/smaller tablets  */
  '@media only screen and (max-width: 769px)': { /* stylelint-disable-line */

    navigator: {
      fontSize: '12px',
      background: 'transparent !important',
      letterSpacing: '1.5px',
      width: 'auto',
      position: 'fixed',
      right: 0,
      top: 0,

      '& > a': {
        float: 'right', /* stylelint-disable-line */
        width: '48px',
        height: '48px',
        textAlign: 'left',
        backgroundColor: '#b94a00',
        position: 'relative',
        border: 'none',
        fontSize: 0,
        lineHeight: 0,
        textShadow: 'none',
        color: 'transparent',
        top: 0,
        right: '30px',
      },
    },
  },
});

export default navbarStyle;
