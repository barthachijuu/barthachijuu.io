/**
 *
 * Footer Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 27-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const footerStyle = createUseStyles({

  footer: {
    paddingTop: '48px',
    marginBottom: '48px',
    color: '#303030',
    fontSize: '14px',
    textAlign: 'center',
    position: 'relative',

    '& a, & a:visited': {
      color: '#525252',
    },

    '& a:hover': {
      color: '#11abb0',
    },
  },

  sociallink: {
    margin: '18px 0 30px 0',
    padding: 0,
    fontSize: '24px',

    '& li:first-child': {
      marginLeft: 0,
    },

    '& li': {
      marginLeft: '42px',
      display: 'inline-block',
      padding: 0,
      color: '#f06060',
    },
  },

  copyright: {
    margin: 0,
    padding: 0,

    '& li': {
      display: 'inline-block',
      margin: 0,
      padding: 0,
      lineHeight: '24px',
    },
  },

  gotop: {
    position: 'absolute',
    top: '-24px',
    left: '50%',
    marginLeft: '-30px',

    '& a': {
      textDecoration: 'none',
      border: '0 none',
      display: 'block',
      width: '60px',
      height: '60px',
      backgroundColor: '#525252',
      '-webkit-transition': 'all .2s ease-in-out',
      '-moz-transition': 'all .2s ease-in-out',
      '-o-transition': 'all .2s ease-in-out',
      '-ms-transition': 'all .2s ease-in-out',
      transition: 'all .2s ease-in-out',
      color: '#ffffff !important',
      fontSize: '28px',
      lineHeight: '60px',
      borderRadius: '100%',

      '&:hover': {
        backgroundColor: '#0f9095',
      },
    },
  },
});

export default footerStyle;
