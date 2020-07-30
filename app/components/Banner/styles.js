/**
 *
 * Banner Styles
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 14-Jul-2020
 */

import { createUseStyles } from 'react-jss';

const bannerStyle = createUseStyles({

  banner: {
    display: 'inline-block',
    margin: '0 auto',
    width: '85%',
    paddingBottom: '30px',
    textAlign: 'center',
    overflow: 'hidden',
  },

  bannertext: {
    width: '100%',
    /* stylelint-disable */
    '& h1': {
      fontSize: '90px',
      fontFamily: 'Roboto Condensed',
      color: '#ffffff',
      letterSpacing: '-2px',
      margin: '0 auto 18px auto',
      textShadow: '0px 1px 3px rgba(0, 0, 0, .8)',
      lineHeight: '1.1em',
    },

    '& h3': {
      fontSize: '26px',
      fontFamily: 'Rokkitt',
      width: '70%',
      margin: '0 auto 18px auto',
      textShadow: '0px 1px 2px rgba(0, 0, 0, .5)',
      lineHeight: '1.6em',

      '& span.role, a.smoothscroll': {
        color: '#ffffff',
      },
    },
    /* stylelint-enable */

    '& hr': {
      width: '90%',
      borderColor: 'rgba(156, 156, 156, .2)',
      border: 'solid #E3E3E3',
      borderWidth: '3px 0 0',
    },
  },

  /* screenwidth less than 1024px  */

  '@media (min-width: 901px) and (max-width: 1024px)': { /* stylelint-disable-line */

    bannertext: {

      '& h1': {
        fontSize: '80px',
        lineHeight: '1.1em',
        letterSpacing: '-1px',
        margin: '0 auto 12px auto',
      },
    },
  },

  /* screenwidth less than 900px  */
  '@media (max-width: 900px)': { /* stylelint-disable-line */

    banner: {
      paddingBottom: '12px',
    },

    bannertext: {
      /* stylelint-disable */
      '& h1': {
        fontSize: '78px',
        letterSpacing: '-1px',
        lineHeight: '1.1em',
      },

      '& h3': {
        fontSize: '17px',
        lineHeight: '1.9em',
        width: '80%',
      },
      /* stylelint-enable */
    },
  },

  /* screenwidth less than 767px  */
  '@media (max-width: 769px)': { /* stylelint-disable-line */

    banner: {
      paddingBottom: '12px',
      paddingTop: '6px',
    },

    bannertext: {
      /* stylelint-disable */
      '& h1': {
        fontSize: '68px',
        lineHeight: '1.1em',
      },

      '& h3': {
        fontSize: '16px',
        lineHeight: '1.9em',
        width: '85%',
      },
      /* stylelint-enable */
    },

    '& hr': {
      width: '80%',
      margin: '18px auto',
    },
  },

  /* screenwidth less than 480px  */
  '@media (max-width: 480px)': { /* stylelint-disable-line */

    banner: {
      paddingTop: '24px',
    },

    bannertext: {
      /* stylelint-disable */
      '& h1': {
        fontSize: '40px',
        lineHeight: '1.1em',
        margin: '0 auto 24px auto',
      },

      '& h3': {
        fontSize: '16px',
        lineHeight: '1.9em',
        width: '85%',
      },
      /* stylelint-enable */
    },

    '& hr': {
      width: '80%',
      margin: '18px auto',
    },
  },
});

export default bannerStyle;
