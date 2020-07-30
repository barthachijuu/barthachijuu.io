/**
 *
 * Skills Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 17-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const skillsStyle = createUseStyles({

  skills: {
    background: '#ffffff',
    paddingTop: '72px',
    paddingBottom: '40px',
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

  maincol: {
    paddingRight: '10%',
  },

  headercol: {
    paddingTop: '9px',
  },

  inside: {
    padding: '0 20px',
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

  skillsummary: {
    margin: '0 0 10px 0',
  },

  bars: {
    float: 'left', /* stylelint-disable-line */
    width: '95%',
    padding: 0,
    textAlign: 'left',

    '& .skills': {
      marginTop: '36px',
      borderStyle: 'none',
    },

    '& li': {
      position: 'relative',
      marginBottom: '60px',
      background: '#cccccc',
      height: '42px',
      borderRadius: '3px',

      '& em': {
        color: '#ffffff',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 'normal',
        position: 'relative',
        top: '10px',
        left: '10px',
      },
    },
  },

  bulletpoint: {
    fontSize: '140%',
    verticalAlign: 'middle',
  },

  barexpand: {
    position: 'absolute',
    left: 0,
    top: 0,
    margin: 0,
    paddingRight: '24px',
    background: '#313131',
    display: 'inline-block',
    height: '42px',
    lineHeight: '42px',
    borderRadius: '3px 0 0 3px',
  },

  infosummary: {
    fontSize: '16px',
    marginTop: '6px',
    lineHeight: '24px',
    marginLeft: '5px',
    marginRight: '5px',
  },

  bullet: {
    marginLeft: '5px',
    marginRight: '5px',
  },

  chip: {
    display: 'inline-flex',
    flexDirection: 'row',
    backgroundColor: '#8b8b8b',
    border: 'none',
    cursor: 'default',
    height: '35px',
    outline: 'none',
    padding: 0,
    fontSize: '14px',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    borderRadius: '26px',
    verticalAlign: 'middle',
    textDecoration: 'none',
    justifyContent: 'center',
    margin: '6px',
  },

  chiphead: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#32c5d2',
    fontSize: '1.65rem',
    flexShrink: 0,
    alignItems: 'center',
    userSelect: 'none',
    borderRadius: '50%',
    justifyContent: 'center',
    width: '36px',
    color: '#ffffff',
    height: '36px',
    marginRight: '-2px',
  },

  chipcontent: {
    cursor: 'inherit',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    paddingLeft: '12px',
    paddingRight: '12px',
    color: '#ffffff',
    fontSize: '1.5rem',
  },

  /* screenwidth less than 900px  */

  '@media (max-width: 900px)': { /* stylelint-disable-line */

    skills: {
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

    inside: {
      marginLeft: 'auto !important',
      marginRight: 'auto !important',
    },
  },

  /* screenwidth less than 767px  */

  '@media (max-width: 769px)': { /* stylelint-disable-line */

    bars: {
      width: '100%',
    },
  },
});

export default skillsStyle;
