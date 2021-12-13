const theme = require('../../dist/json/tokens.json')

module.exports = {
  mode: 'light',
  palette: {
    primary: {
      main: theme.color.primary.main,
      light: theme.color.primary.light,
      dark: theme.color.primary.dark,
    },
    secondary: {
      main: theme.color.secondary.main,
      light: theme.color.secondary.light,
      dark: theme.color.secondary.dark,
    },
    error: {
      main: theme.color.error.main,
      light: theme.color.error.light,
      dark: theme.color.error.dark,
    },
    warning: {
      main: theme.color.warning.main,
      light: theme.color.warning.light,
      dark: theme.color.warning.dark,
    },
    info: {
      main: theme.color.info.main,
      light: theme.color.info.light,
      dark: theme.color.info.dark,
    },
    success: {
      main: theme.color.success.main,
      light: theme.color.success.light,
      dark: theme.color.success.dark,
    },
    grey: {
      50: theme.color.grey[50],
      100: theme.color.grey[100],
      200: theme.color.grey[200],
      300: theme.color.grey[300],
      400: theme.color.grey[400],
      500: theme.color.grey[500],
      600: theme.color.grey[600],
      700: theme.color.grey[700],
      800: theme.color.grey[800],
      900: theme.color.grey[900],
    },
    indigo: {
      50: theme.color.indigo[50],
      100: theme.color.indigo[100],
      200: theme.color.indigo[200],
      300: theme.color.indigo[300],
      400: theme.color.indigo[400],
      500: theme.color.indigo[500],
      600: theme.color.indigo[600],
      700: theme.color.indigo[700],
      800: theme.color.indigo[800],
      900: theme.color.indigo[900],
    },
    purple: {
      50: theme.color.purple[50],
      100: theme.color.purple[100],
      200: theme.color.purple[200],
      300: theme.color.purple[300],
      400: theme.color.purple[400],
      500: theme.color.purple[500],
      600: theme.color.purple[600],
      700: theme.color.purple[700],
      800: theme.color.purple[800],
      900: theme.color.purple[900],
    },
    contrastThreshold: 2,
    contrastText: '#fff',
    tonalOffset: 0.2,
    text: {
      primary: theme.color.text.primary,
      secondary: theme.color.text.secondary,
      disabled: theme.color.text.disabled,
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      inverse: '#fff',
      inverseSecondary: theme.color.grey[300],
    },
    background: {
      canvas: theme.color.grey[50],
      paper: '#fff',
      header: theme.color.grey[700],
      subnav: theme.color.grey[600],
      sidenav: theme.color.grey[500],
      accent: 'rgba(0,0,0,0.12)',
      border: theme.color.grey[200],
      default: theme.color.grey[100]
    },
    action: {
      active: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0,0,0,.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0,0,0,0.26)',
      disabledBackground: 'rgba(0,0,0,0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0,0,0,0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: theme.fontFamilies.base,
    fontSize: 14,
    d1: {
      fontSize: theme.typography.d1.fontSize,
      fontWeight: theme.typography.d1.fontWeight,
      fontFamily: theme.typography.d1.fontFamily,
      letterSpacing: theme.typography.d1.letterSpacing,
      color: theme.color.text.primary
    },
    d2: {
      fontSize: theme.typography.d2.fontSize,
      fontWeight: theme.typography.d2.fontWeight,
      fontFamily: theme.typography.d2.fontFamily,
      letterSpacing: theme.typography.d2.letterSpacing,
      color: theme.color.text.primary
    },
    h1: {
      fontSize: theme.typography.h1.fontSize,
      fontWeight: theme.typography.h1.fontWeight,
      fontFamily: theme.typography.h1.fontFamily,
      letterSpacing: theme.typography.h1.letterSpacing,
      color: theme.color.text.primary
    },
    h2: {
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
      fontFamily: theme.typography.h2.fontFamily,
      letterSpacing: theme.typography.h2.letterSpacing,
      color: theme.color.text.primary
    },
    h3: {
      fontSize: theme.typography.h3.fontSize,
      fontWeight: theme.typography.h3.fontWeight,
      fontFamily: theme.typography.h3.fontFamily,
      letterSpacing: theme.typography.h3.letterSpacing,
      color: theme.color.text.primary
    },
    h4: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      fontFamily: theme.typography.h4.fontFamily,
      letterSpacing: theme.typography.h4.letterSpacing,
      color: theme.color.text.primary
    },
    h5: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h5.fontWeight,
      fontFamily: theme.typography.h5.fontFamily,
      letterSpacing: theme.typography.h5.letterSpacing,
      color: theme.color.text.primary
    },
    h6: {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
      fontFamily: theme.typography.h6.fontFamily,
      letterSpacing: theme.typography.h6.letterSpacing,
      color: theme.color.text.primary
    },
    subtitle1: {
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.subtitle1.fontWeight,
      fontFamily: theme.typography.subtitle1.fontFamily,
      letterSpacing: theme.typography.subtitle1.letterSpacing,
      color: theme.color.text.primary
    },
    subtitle2: {
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
      fontFamily: theme.typography.subtitle2.fontFamily,
      letterSpacing: theme.typography.subtitle2.letterSpacing,
      color: theme.color.text.primary
    },
    body1: {
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      fontFamily: theme.typography.body1.fontFamily,
      letterSpacing: theme.typography.body1.letterSpacing,
      color: theme.color.text.primary
    },
    body2: {
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.body2.fontWeight,
      fontFamily: theme.typography.body2.fontFamily,
      letterSpacing: theme.typography.body2.letterSpacing,
      color: theme.color.text.primary
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: theme.fontWeights.regular,
      fontFamily: theme.fontFamilies.base,
      letterSpacing: 0.2,
      textTransform: theme.textTransform.uppercase
    },
    caption: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.caption.fontWeight,
      fontFamily: theme.typography.caption.fontFamily,
      letterSpacing: theme.typography.caption.letterSpacing,
      color: theme.color.text.primary,
      textTransform: theme.textTransform.uppercase
    },
    overline: {
      fontSize: theme.typography.overline.fontSize,
      fontWeight: theme.typography.overline.fontWeight,
      fontFamily: theme.typography.overline.fontFamily,
      letterSpacing: theme.typography.overline.letterSpacing,
      color: theme.color.text.primary,
      textTransform: theme.textTransform.uppercase
    }
  }
}

