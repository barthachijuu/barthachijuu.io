/*
 *
 * Home Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 13-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const homeStyle = createUseStyles({

  container: {
    position: 'relative',
    height: '950px',
    minHeight: '650px',
    width: '100%',
    background: '#111111 url(images/background.jpg) no-repeat top center',
    textAlign: 'center',
    display: 'block',

    '&::before': {
      content: `''`,
      verticalAlign: 'middle',
      height: '100%',
      display: 'inline-block',
    },
  },

  scrolldown: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    marginLeft: '-29px',
    display: 'block',
    height: '42px',
    width: '42px',
    fontSize: '42px',
    lineHeight: '42px',
    color: '#ffffff',
    borderRadius: '100%',

    '& :hover': {
      '-webkit-transition': 'all .3s ease-in-out',
      '-moz-transition': 'all .3s ease-in-out',
      '-o-transition': 'all .3s ease-in-out',
      transition: 'all .3s ease-in-out',
      color: '#11abb0',
    },
  },

  '@media only screen and (max-width: 1024px)': { /* stylelint-disable-line */

    container: {
      background: '#111111 url(images/background720.jpg) no-repeat center center',
    },

    scrolldown: {
      bottom: '100px',
    },
  },

  /* screenwidth less than  769px  */
  '@media only screen and (max-width: 769px)': { /* stylelint-disable-line */

    container: {
      background: '#111111 url(images/background720.jpg) no-repeat 50px center',
    },

    scrolldown: {
      display: 'none',
    },
  },

  /* screenwidth less than 480px  */
  '@media only screen and (max-width: 480px)': { /* stylelint-disable-line */

    container: {
      background: '#111111 url(images/background480.jpg) no-repeat -20px center',
    },
  },
});

export default homeStyle;
