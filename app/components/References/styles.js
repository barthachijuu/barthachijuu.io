/**
 *
 * References Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 27-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const referencesStyle = createUseStyles({

  references: {
    background: '#1f1f1f url(images/refs.jpg) no-repeat center right',
    minHeight: '200px',
    width: '100%',
    overflow: 'hidden',
    textAlign: 'left',

    '& blockquote': {
      margin: '0 0px 30px 0px',
      paddingLeft: 0,
      position: 'relative',
      textShadow: '0px 1px 3px rgba(0, 0, 0, 1)',

      '& ::before, & ::after': {
        content: 'none',
      },

      '& p': {
        padding: 0,
        fontSize: '18px',
        lineHeight: '48px',
        color: '#ffffff',
        fontStyle: 'italic',
      },

      '& cite': {
        display: 'block',
        fontSize: '14px',
        fontStyle: 'normal',
        lineHeight: '18px',
        color: '#ffffff',

        '&::before': {
          content: `'\\2014 \\0020'`,
        },
      },
    },
  },

  textcontainer: {
    paddingTop: '96px',
    paddingBottom: '66px',
  },

  headercol: {
    paddingTop: '9px',

    '& h1': {
      fontSize: '18px',
      lineHeight: '24px',
      textAlign: 'center',
      marginBottom: '30px',
      textShadow: '0px 1px 3px rgba(0, 0, 0, 1)',
      color: '#ffffff',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontWeight: 600,

      '& span': {
        display: 'none',
      },
    },
  },

  citation: {
    paddingRight: '10px',
    fontSize: '72px',
    lineHeight: '72px',
    textAlign: 'left',
    float: 'left', /* stylelint-disable-line */
    color: '#ffffff',
  },

  nukacontainer: {
    zoom: 1,
    position: 'relative',
    width: '82%',
  },

  nukaslider: {
    zoom: 1,
    position: 'relative',
    margin: 0,
    padding: 0,
  },

  /* mobile wide/smaller tablets */
  '@media only screen and (max-width: 769px)': { /* stylelint-disable-line */

    references: {

      '& blockquote': {
        paddingBottom: '24px',

        '& p': {
          fontSize: '20px',
          lineHeight: '42px',
        },
      },
    },

    textcontainer: {
      textAlign: 'center',
    },

    headercol: {

      '& h1': {
        fontSize: '16px',

        '& span': {
          display: 'block',
        },
      },
    },

    citation: {
      display: 'none',
    },
  },
});

export default referencesStyle;
