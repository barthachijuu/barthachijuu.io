/**
 *
 * Education Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 17-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const educationStyle = createUseStyles({

  edu: {
    background: '#ffffff',
    paddingTop: '90px',
    paddingBottom: '0px',
    overflow: 'hidden',
    textAlign: 'left',

    '& h1': {
      fontSize: '18px',
      lineHeight: '24px',
      textTransform: 'uppercase',
      letterSpacing: '1px',

      '& span': {
        borderBottom: '3px solid #11abb0',
        paddingBottom: '6px',
      },
    },

    '& h3': {
      fontSize: '25px',
      lineHeight: '30px',

      '& a': {
        color: '#313131',
        textDecoration: 'none',

        '&:hover': {
          color: '#11abb0',
          '-webkit-transition': 'color .3s ease-in-out',
          '-moz-transition': 'color .3s ease-in-out',
          '-o-transition': 'color .3s ease-in-out',
          transition: 'color .3s ease-in-out',
        },
      },
    },

    '& hr': {
      border: 'solid #e3e3e3',
      borderWidth: '1px 0 0',
      clear: 'both',
      margin: '11px 0 30px',
      height: 0,
    },
  },

  courses: {
    lineHeight: '30px',
    color: '#7a7a7a',
    textAlign: 'justify',
    fontWeight: 800,
    margin: '0 0 10px 0',
    fontSize: '18px',
  },

  maincol: {
    paddingRight: '10%',
  },

  headercol: {
    paddingTop: '9px',
  },

  info: {
    color: '#6E7881',
    marginBottom: '18px',
    marginTop: '9px',
    fontSize: '18px',
    lineHeight: '24px',

    '& span': {
      marginRight: '5px',
      marginLeft: '5px',
    },
  },

  infosummary: {
    marginTop: '6px',
    fontSize: '16px',
    lineHeight: '24px',
  },

  point: {
    margin: '0 0 10px 0',
  },

  bulletpoint: {
    fontSize: '140%',
    verticalAlign: 'middle',
  },

  /* screenwidth less than 900px  */

  '@media (max-width: 900px)': { /* stylelint-disable-line */

    edu: {
      paddingTop: '10%',

      '& h1': {
        fontSize: '16px',
        lineHeight: '24px',
      },
    },

    maincol: {
      paddingRight: '5%',
      paddingTop: '10%',
    },
  },
});

export default educationStyle;
