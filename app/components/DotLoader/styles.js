/**
 *
 * DotLoader Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 16-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const loaderStyle = createUseStyles({

  loadingpage: {
    width: '100vw',
    height: '100vh',
  },

  loadingcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    width: '100%',
  },

  cmspinner: {
    height: '150px',
    width: '150px',
    border: '3px solid transparent',
    borderRadius: '50%',
    borderTop: '4px solid #f15e41',
    '-webkit-animation': 'spin 4s linear infinite',
    animation: 'spin 4s linear infinite',
    position: 'relative',

    '&::before, &::after': { /* stylelint-disable-line selector-list-comma-newline-after */
      content: `''`,
      position: 'absolute',
      top: '6px',
      bottom: '6px',
      left: '6px',
      right: '6px',
      borderRadius: '50%',
      border: '4px solid transparent',
    },

    '&::before': {
      borderTopColor: '#bad375',
      '-webkit-animation': '3s spin linear infinite',
      animation: '3s spin linear infinite',
    },

    '&::after': {
      borderTopColor: '#26a9e0',
      '-webkit-animation': 'spin 1.5s linear infinite',
      animation: 'spin 1.5s linear infinite',
    },
  },

  '@-webkit-keyframes spin': {

    from: {
      '-webkit-transform': 'rotate(0deg)',
      transform: 'rotate(0deg)',
    },

    to: {
      '-webkit-transform': 'rotate(360deg)',
      transform: 'rotate(360deg)',
    },
  },

  '@keyframes spin': {

    from: {
      '-webkit-transform': 'rotate(0deg)',
      transform: 'rotate(0deg)',
    },

    to: {
      '-webkit-transform': 'rotate(360deg)',
      transform: 'rotate(360deg)',
    },
  },
});

export default loaderStyle;
