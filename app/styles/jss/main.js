export default {
  '@global': {
    '@import': [
      'url(https://fonts.googleapis.com/css?family=Roboto+Condensed)',
      'url(https://fonts.googleapis.com/css?family=Rokkitt)',
      'url(https://fonts.googleapis.com/css?family=Josefin+Sans)',
      'url(https://fonts.googleapis.com/css?family=Poppins)',
    ],

    /* ------------------------------------------------------------------
/* b. Reset
      Adapted from:
      Normalize.css - https://github.com/necolas/normalize.css/
      HTML5 Doctor Reset - html5doctor.com/html-5-reset-stylesheet/
/* ------------------------------------------------------------------ */

    'html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video': { /* eslint-disable-line */
      margin: 0,
      padding: 0,
      border: 0,
      outline: 0,
      fontSize: '100%',
      verticalAlign: 'baseline',
      background: 'transparent',
    },
    'article,aside,details,figcaption,figure, footer,header,hgroup,menu,nav,section': {
      display: 'block',
    },
    'audio, canvas, video': {
      display: 'inline-block',
    },
    'code, kbd, pre, samp': {
      fontFamily: 'monospace, serif',
      fontSize: '1em',
    },
    pre: {
      whiteSpace: 'pre',
      wordWrap: 'break-word',
    },
    'blockquote, q': {
      quotes: '&#8220 &#8220',
      '&:after, &:before': {
        content: `''`,
      },
    },
    ins: {
      backgroundColor: '#ff9ff9',
      color: '#000000',
      textDecoration: 'none',
    },
    mark: {
      backgroundColor: '#A7F4F6',
      color: '#555555',
    },
    del: { textDecoration: 'line-through' },

    'abbr[title], dfn[title]': {
      borderBottom: '1px dotted',
      cursor: 'help',
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
    /*  1. Basic Style   */
    '*, *:before, *:after': {
      '-moz-box-sizing': 'border-box',
      '-webkit-box-sizing': 'border-box',
      boxSizing: 'border-box',
    },
    html: {
      fontSize: '62.5%',
      '-webkit-font-smoothing': 'antialiased',
    },
    body: {
      fontFamily: 'Roboto Condensed',
      fontWeight: 'normal',
      fontSize: '15px',
      margin: 0,
      background: '#111111',
      '-webkit-font-smoothing': 'antialiased', /* Fix for webkit rendering */
      '-webkit-text-size-adjust': '100%',
      lineHeight: '30px',
      color: '#838c95',
    },
    /*  2. Typography  */

    'h1, h2, h3, h4, h5, h6': {
      color: '#565656',
      fontFamily: 'opensans-bold, sans-serif',
      fontWeight: 'normal',
    },
    'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': { fontWeight: 'inherit' },
    h1: { fontSize: '38px', lineHeight: '42px', marginBottom: '12px', letterSpacing: '-1px' },
    h2: { fontSize: '28px', lineHeight: '36px', marginBottom: '6px' },
    h3: { fontSize: '22px', lineHeight: '30px', marginBottom: '12px' },
    h4: { fontSize: '20px', lineHeight: '30px', marginBottom: '6px' },
    h5: { fontSize: '18px', lineHeight: '30px' },
    h6: { fontSize: '14px', lineHeight: '30px' },
    p: { margin: '0 0 30px 0' },
    'p img': { margin: 0 },
    em: {
      fontSize: '15px',
      lineHeight: '30px',
      fontStyle: 'normal',
    },

    /*  3. Links  */

    'a, a:visited': {
      textDecoration: 'none',
      outline: 0,
      '-webkit-transition': 'color .3s ease-in-out',
      '-moz-transition': 'color .3s ease-in-out',
      '-o-transition': 'color .3s ease-in-out',
      transition: 'color .3s ease-in-out',
    },

    /*  4. List  */
    'ul, ol': {
      marginBottom: '24px',
      marginTop: '12px',
    },
    ul: {
      listStyle: 'none outside',
    },
    'ul ul, ul ol, ol ol, ol ul': {
      margin: '6px 0 6px 30px',
    },
    'ul ul li, ul ol li, ol ol li, ol ul li': {
      marginBottom: '6px',
    },
    li: {
      lineHeight: '18px',
      marginBottom: '12px',
    },
    /*  5. Images  */
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    'img.pull-right': {
      margin: '12px 0px 0px 18px',
    },
    'img.pull-left': {
      margin: '12px 18px 0px 0px',
    },
    /* 6. Grid */

    '.row': {
      width: '96%',
      maxWidth: '1020px',
      margin: '0 auto',
      '& .row': {
        width: 'auto',
        maxWidth: 'none',
        margin: 0,
      },
      '& .two': {
        width: '16.66667%',
      },
      '& .three': {
        width: '25%',
      },
      '& .four': {
        width: '33.33333%',
      },
      '& .five': {
        width: '41.66667%',
      },
      '& .six': {
        width: '50%',
      },
      '& .seven': {
        width: '58.33333%',
      },
      '& .eight': {
        width: '66.66667%',
      },
      '& .nine': {
        width: '75%',
      },
      '& .ten': {
        width: '83.33333%',
      },
      '& .eleven': {
        width: '91.66667%',
      },
      '& .twelve': {
        width: '100%',
      },
      '&::after': {
        clear: 'both',
      },
      '&::before, &::after': {
        display: 'table',
        content: `" "`,
      },
      '& .offset-1': { marginLeft: '8.33333%' },
      '& .offset-2': { marginLeft: '16.66667%' },
      '& .offset-3': { marginLeft: '25%' },
      '& .offset-4': { marginLeft: '33.33333%' },
      '& .offset-5': { marginLeft: '41.66667%' },
      '& .offset-6': { marginLeft: '50%' },
      '& .offset-7': { marginLeft: '58.33333%' },
      '& .offset-8': { marginLeft: '66.66667%' },
      '& .offset-9': { marginLeft: '75%' },
      '& .offset-10': { marginLeft: '83.33333%' },
      '& .offset-11': { marginLeft: '91.66667%' },
    },
    '.columns': {
      position: 'relative',
      padding: '0 20px',
      minHeight: '1px',
      float: 'left',
      '&.collapsed': {
        padding: 0,
      },
    },
    '.bgrid-sixths > .columns': {
      width: '16.66667%',
    },
    '.bgrid-quarters > .columns': {
      width: '25%',
    },
    '.bgrid-thirds > .columns': {
      width: '33.33333%',
    },
    '.bgrid-halves > .columns': {
      width: '50%',
    },
    '[class *="bgrid"][class*="column"] + [class*="column"]:last-child': {
      float: 'left',
    },
    '.cf:before, .cf:after': {
      content: `" "`,
      display: 'table',
    },
    '.cf:after': {
      clear: 'both',
    },
    '.percentage30': {
      width: '30%',
      '-moz-animation': 'percentage30 2s ease',
      '-webkit-animation': 'percentage30 2s ease',
    },
    '.percentage35': {
      width: '35%',
      '-moz-animation': 'percentage35 2s ease',
      '-webkit-animation': 'percentage35 2s ease',
    },
    '.percentage40': {
      width: '40%',
      '-moz-animation': 'percentage40 2s ease',
      '-webkit-animation': 'percentage40 2s ease',
    },
    '.percentage45': {
      width: '45%',
      '-moz-animation': 'percentage45 2s ease',
      '-webkit-animation': 'percentage45 2s ease',
    },
    '.percentage50': {
      width: '50%',
      '-moz-animation': 'percentage50 2s ease',
      '-webkit-animation': 'percentage50 2s ease',
    },
    '.percentage55': {
      width: '55%',
      '-moz-animation': 'percentage55 2s ease',
      '-webkit-animation': 'percentage55 2s ease',
    },
    '.percentage60': {
      width: '60%',
      '-moz-animation': 'percentage60 2s ease',
      '-webkit-animation': 'percentage60 2s ease',
    },
    '.percentage65': {
      width: '65%',
      '-moz-animation': 'percentage65 2s ease',
      '-webkit-animation': 'percentage65 2s ease',
    },
    '.percentage70': {
      width: '75%',
      '-moz-animation': 'percentage70 2s ease',
      '-webkit-animation': 'percentage70 2s ease',
    },
    '.percentage75': {
      width: '75%',
      '-moz-animation': 'percentage75 2s ease',
      '-webkit-animation': 'percentage75 2s ease',
    },
    '.percentage80': {
      width: '80%',
      '-moz-animation': 'percentage80 2s ease',
      '-webkit-animation': 'percentage80 2s ease',
    },
    '.percentage85': {
      width: '85%',
      '-moz-animation': 'percentage85 2s ease',
      '-webkit-animation': 'percentage85 2s ease',
    },
    '.percentage90': {
      width: '90%',
      '-moz-animation': 'percentage90 2s ease',
      '-webkit-animation': 'percentage90 2s ease',
    },
    '.percentage95': {
      width: '95%',
      '-moz-animation': 'percentage95 2s ease',
      '-webkit-animation': 'percentage95 2s ease',
    },
    '.percentage100': {
      width: '100%',
      '-moz-animation': 'percentage100 2s ease',
      '-webkit-animation': 'percentage100 2s ease',
    },
    '@-moz-keyframes percentage30': {
      '0%': { width: '0px' },
      '100%': { width: '30%' },
    },
    '@-moz-keyframes percentage35': {
      '0%': { width: '0px' },
      '100%': { width: '35%' },
    },
    '@-moz-keyframes percentage40': {
      '0%': { width: '0px' },
      '100%': { width: '40%' },
    },
    '@-moz-keyframes percentage45': {
      '0%': { width: '0px' },
      '100%': { width: '45%' },
    },
    '@-moz-keyframes percentage50': {
      '0%': { width: '0px' },
      '100%': { width: '50%' },
    },
    '@-moz-keyframes percentage55': {
      '0%': { width: '0px' },
      '100%': { width: '55%' },
    },
    '@-moz-keyframes percentage60': {
      '0%': { width: '0px' },
      '100%': { width: '60%' },
    },
    '@-moz-keyframes percentage65': {
      '0%': { width: '0px' },
      '100%': { width: '65%' },
    },
    '@-moz-keyframes percentage70': {
      '0%': { width: '0px' },
      '100%': { width: '70%' },
    },
    '@-moz-keyframes percentage75': {
      '0%': { width: '0px' },
      '100%': { width: '75%' },
    },
    '@-moz-keyframes percentage80': {
      '0%': { width: '0px' },
      '100%': { width: '80%' },
    },
    '@-moz-keyframes percentage85': {
      '0%': { width: '0px' },
      '100%': { width: '85%' },
    },
    '@-moz-keyframes percentage90': {
      '0%': { width: '0px' },
      '100%': { width: '90%' },
    },
    '@-moz-keyframes percentage95': {
      '0%': { width: '0px' },
      '100%': { width: '95%' },
    },
    '@-moz-keyframes percentage100': {
      '0%': { width: '0px' },
      '100%': { width: '100%' },
    },
    '@-webkit-keyframes percentage30': {
      '0%': { width: '0px' },
      '100%': { width: '30%' },
    },
    '@-webkit-keyframes percentage35': {
      '0%': { width: '0px' },
      '100%': { width: '35%' },
    },
    '@-webkit-keyframes percentage40': {
      '0%': { width: '0px' },
      '100%': { width: '40%' },
    },
    '@-webkit-keyframes percentage45': {
      '0%': { width: '0px' },
      '100%': { width: '45%' },
    },
    '@-webkit-keyframes percentage50': {
      '0%': { width: '0px' },
      '100%': { width: '50%' },
    },
    '@-webkit-keyframes percentage55': {
      '0%': { width: '0px' },
      '100%': { width: '55%' },
    },
    '@-webkit-keyframes percentage60': {
      '0%': { width: '0px' },
      '100%': { width: '60%' },
    },
    '@-webkit-keyframes percentage65': {
      '0%': { width: '0px' },
      '100%': { width: '65%' },
    },
    '@-webkit-keyframes percentage70': {
      '0%': { width: '0px' },
      '100%': { width: '70%' },
    },
    '@-webkit-keyframes percentage75': {
      '0%': { width: '0px' },
      '100%': { width: '75%' },
    },
    '@-webkit-keyframes percentage80': {
      '0%': { width: '0px' },
      '100%': { width: '80%' },
    },
    '@-webkit-keyframes percentage85': {
      '0%': { width: '0px' },
      '100%': { width: '85%' },
    },
    '@-webkit-keyframes percentage90': {
      '0%': { width: '0px' },
      '100%': { width: '90%' },
    },
    '@-webkit-keyframes percentage95': {
      '0%': { width: '0px' },
      '100%': { width: '95%' },
    },
    '@-webkit-keyframes percentage100': {
      '0%': { width: '0px' },
      '100%': { width: '100%' },
    },
    '.react-responsive-modal-overlay': {
      background: 'rgba(0, 0, 0, .25)',
      display: 'flex',
      alignItems: 'flex-start',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'auto',
      overflowX: 'hidden',
      zIndex: 1000,
      padding: '1.2rem',
    },
    '.react-responsive-modal-modal': {
      maxWidth: '500px',
      position: 'relative',
      padding: '1.2rem',
      background: '#ffffff',
      backgroundClip: 'padding-box',
      boxShadow: '0 12px 15px 0 rgba(0, 0, 0, .25)',
      margin: '0 auto',
    },

    '.react-responsive-modal-modalCenter': {
      margin: 'auto',
    },

    '.react-responsive-modal-closeButton': {
      position: 'absolute',
      top: '14px',
      right: '14px',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      display: 'flex',
      '& svg': {
        fill: '#ffffff',
      },
    },

    '@keyframes customEnterAnimation': {
      '0%': {
        transform: 'scale(0)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },

    '@keyframes customLeaveAnimation': {
      '0%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(0)',
      },
    },
    /* mobile wide/smaller tablets
    --------------------------------------------------------------- */
    '@media only screen and (max-width: 769px)': {
      /* nav menù */
      nav: {
        '& > a:before, & > a:after': {
          position: 'absolute',
          border: '2px solid #ffffff',
          top: '35%',
          left: '25%',
          right: '25%',
          content: `''`,
        },
        '& > a:after': {
          top: '60%',
        },
      },
      '#nav-wrap:not(:target) > a:first-of-type, #nav-wrap:target > a:last-of-type': {
        display: 'block',
      },
      '#nav-wrap:target > ul#nav': {
        display: 'block',
        padding: '30px 20px 48px 20px',
        background: '#1f2024',
        margin: '0 30px',
        clear: 'both',
      },
      '#nav-wrap:not(:target) > ul#nav': {
        display: 'none',
      },
      '#nav-wrap > ul#nav': {
        height: 'auto',
        display: 'none',
        clear: 'both',
        width: 'auto',
        float: 'right',
        position: 'relative',
        top: '12px',
        right: 0,
      },
      'ul#nav li': {
        display: 'block',
        height: 'auto',
        margin: '0 auto',
        padding: '0 4%',
        textAlign: 'left',
        borderBottom: '1px solid #2d2e34',
        borderBottomStyle: 'dotted',
      },
      'ul#nav li a': {
        display: 'block',
        padding: 0,
        margin: '12px 0',
        lineHeight: '16px',
        border: 'none',
      },
      '.row': {
        width: '460px',
        margin: '0 auto',
        padding: '8px 0',
      },
      '.columns': {
        width: 'auto !important',
        float: 'none',
        marginLeft: 0,
        marginRight: 0,
        padding: '0 30px',
      },
      '.row .row': {
        width: 'auto',
        maxWidth: 'none',
        margin: '0 -30px',
      },
      '[class*="column"] + [class*="columns"]:last-child': {
        float: 'none',
      },
      '[class *="bgrid"][class*="column"] + [class*="column"]:last-child': {
        float: 'none',
      },
    },

    /* mobile narrow */

    '@media only screen and (max-width: 480px)': {
      '#nav-wrap ul#nav': {
        width: 'auto',
        float: 'none',
      },
      '.row': {
        width: 'auto',
        /* Offsets */
        '& .offset-1': { marginLeft: '0%' },
        '& .offset-2': { marginLeft: '0%' },
        '& .offset-3': { marginLeft: '0%' },
        '& .offset-4': { marginLeft: '0%' },
        '& .offset-5': { marginLeft: '0%' },
        '& .offset-6': { marginLeft: '0%' },
        '& .offset-7': { marginLeft: '0%' },
        '& .offset-8': { marginLeft: '0%' },
        '& .offset-9': { marginLeft: '0%' },
        '& .offset-10': { marginLeft: '0%' },
        '& .offset-11': { marginLeft: '0%' },
      },
    },
  },
};
