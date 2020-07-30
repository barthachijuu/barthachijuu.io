/**
 *
 * ErrorPage Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 28-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const errorPageStyle = createUseStyles({

  errorcontainer: {
    position: 'relative',
    height: '950px',
    minHeight: '650px',
    width: '100%',
    background: 'linear-gradient(#111111, #333333, #111111)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    display: 'block',

    '&::before': {
      content: `''`,
      verticalAlign: 'middle',
      height: '30%',
      display: 'inline-block',
    },
  },

  notfound: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',

    '& h1, & h2, & h3': {
      margin: 0,
      lineHeight: '.8',
    },

    '& h2, & h3': {
      fontWeight: 300,
      color: '#c8fff4',
      fontFamily: "'Josefin Sans 'sans-serif'",
    },

    '& h1': {
      fontWeight: 700,
      color: '#03dac6',
      fontSize: '8em',
      marginBottom: '20px',
      fontFamily: "'Poppins 'sans-serif'",
    },

    '& h2': {
      margin: '30px 0',
      lineHeight: '40px',
      fontSize: '26px',
    },

    '& h3': {
      fontSize: '2.5em',
    },

    '& a': {
      background: 'transparent',
      border: '2px solid #c8fff4',
      color: '#c8fff4',
      padding: '5px 15px',
      fontSize: '1.25em',
      transition: 'all .15s ease',
      borderRadius: '3px',

      '&:hover': {
        background: '#03dac6',
        border: '2px solid #03dac6',
        color: '#111111',
        cursor: 'pointer',
        transform: 'scale(1.05)',
      },
    },
  },
});

export default errorPageStyle;
