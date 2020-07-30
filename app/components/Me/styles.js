/**
 *
 * Me Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 16-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const meStyle = createUseStyles({

  me: {
    background: '#292929',
    paddingTop: '96px',
    paddingBottom: '66px',
    overflow: 'hidden',

    '& h2': {
      fontSize: '22px',
      lineHeight: '30px',
      color: '#fff',
      marginBottom: '12px',
      textAlign: 'left',
    },

    '& p': {
      lineHeight: '30px',
      color: '#7a7a7a',
      textAlign: 'justify',

      '& .title': {
        fontWeight: 800,
        color: '#ffffff',
      },
    },
  },

  maincol: {
    paddingRight: '5%',
  },

  profilepic: {
    position: 'relative',
    width: '120px',
    height: '120px',
    borderRadius: '100%',
  },

  contactdetails: {
    width: '41.66667%',
    padding: 0,

    '& a': {
      color: '#ffffff',
      textDecoration: 'none',

      '&:hover': {
        color: '#11abb0',
      },
    },
  },

  /* screenwidth less than 900px  */

  '@media (max-width: 900px)': { /* stylelint-disable-line */

    profilepic: {
      marginLeft: '12px',
      width: '114px',
      height: '114px',
    },

    contactdetails: {
      width: '50%',
    },
  },

  /* screenwidth less than 767px  */

  '@media (max-width:  769px)': { /* stylelint-disable-line */

    profilepic: {
      display: 'none',
    },

    maincol: {
      paddingRight: '30px',
    },

    contactdetails: {
      width: 'auto !important',
      float: 'none', /* stylelint-disable-line */
      marginLeft: 0,
      marginRight: 0,
      padding: '0 30px',
    },
  },
});

export default meStyle;
