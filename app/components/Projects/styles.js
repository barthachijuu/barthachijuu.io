/**
 *
 * Projects Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 21-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const projectsStyle = createUseStyles({

  projects: {
    background: '#ebeeee',
    paddingTop: '50px',
    paddingBottom: '60px',
    overflow: 'hidden',
    textAlign: 'left',

    '& h1': {
      fontSize: '21px',
      lineHeight: '24px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      textAlign: 'center',
      marginBottom: '48px',
      color: '#95a3a3',
    },
  },

  portfoliowrapper: {
    marginBottom: '36px',

    '& .columns': {
      marginBottom: '36px',
    },
  },

  itemwrap: {
    background: '#ffffff',
    overflow: 'hidden',
    position: 'relative',
    '-webkit-transition': 'all .3s ease-in-out',
    '-moz-transition': 'all .3s ease-in-out',
    '-o-transition': 'all .3s ease-in-out',
    '-ms-transition': 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out',

    '& img': {
      verticalAlign: 'middle',
    },
  },

  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    '-moz-opacity': 0,
    filter: 'alpha(opacity=0)',
    '-webkit-transition': 'opacity .3s ease-in-out',
    '-moz-transition': 'opacity .3s ease-in-out',
    '-o-transition': 'opacity .3s ease-in-out',
    transition: 'opacity .3s ease-in-out',
    background: 'url(images/overlay-bg.png) repeat',

    '&:hover': {
      opacity: 1,
      '-moz-opacity': 1,
      filter: 'alpha(opacity = 100)',
      cursor: 'pointer',
    },
  },

  itemmeta: {
    padding: '18px',

    '& h5': {
      fontSize: '15px',
      lineHeight: '24px',
      color: '#ffffff',
    },

    '& p': {
      fontSize: '12px',
      lineHeight: '18px',
      color: '#c6c7c7',
      marginBottom: 0,
    },
  },

  modalcontent: {
    maxWidth: '500px',
    maxHeight: '90%',
    overflow: 'auto',
    background: '#ffffff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  description: {
    padding: '12px 36px 18px 36px',

    '& p': {
      fontSize: '14px',
      lineHeight: '24px',
      color: '#838c95',
      marginBottom: '12px',
    },
  },

  categories: {
    fontSize: '12px',
    lineHeight: '21px',
    color: '#838c95',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'block',
    textAlign: 'left',

    '& i': {
      marginRight: '8px',
    },
  },

  link: {
    padding: '18px 36px',
    background: '#111111',
    textAlign: 'left',

    '& a, & button': {
      color: '#ffffff',
      fontSize: '11px',
      lineHeight: '21px',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      cursor: 'pointer',
      outline: 'none',
      border: 0,
      background: 'transparent',
    },
  },

  popupdismiss: {
    marginLeft: '24px',
  },
});

export default projectsStyle;
