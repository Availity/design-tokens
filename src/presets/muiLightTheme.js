//  @import '@availity/design-tokens/dist/css/variables.css'; in your main css file

module.exports = {
  mode: 'light',
  palette: {
    primary: {
      main: 'var(--color-primary-main)',
      light: 'var(--color-primary-light)',
      dark: 'var(--color-primary-dark)',
    },
    secondary: {
      main: 'var(--color-secondary-main)',
      light: 'var(--color-secondary-light)',
      dark: 'var(--color-secondary-dark)',
    },
    error: {
      main: 'var(--color-error-main)',
      light: 'var(--color-error-light)',
      dark: 'var(--color-error-dark)',
    },
    warning: {
      main: 'var(--color-warning-main)',
      light: 'var(--color-warning-light)',
      dark: 'var(--color-warning-dark)',
    },
    info: {
      main: 'var(--color-info-main)',
      light: 'var(--color-info-light)',
      dark: 'var(--color-info-dark)',
    },
    success: {
      main: 'var(--color-success-main)',
      light: 'var(--color-success-light)',
      dark: 'var(--color-success-dark)',
    },
    grey: {
      50: 'var(--color-grey-50',
      100: 'var(--color-grey-100',
      200: 'var(--color-grey-200',
      300: 'var(--color-grey-300',
      400: 'var(--color-grey-400',
      500: 'var(--color-grey-500',
      600: 'var(--color-grey-600',
      700: 'var(--color-grey-700',
      800: 'var(--color-grey-800',
      900: 'var(--color-grey-900'
    },
    indigo: {
      50: 'var(--color-indigo-50',
      100: 'var(--color-indigo-100',
      200: 'var(--color-indigo-200',
      300: 'var(--color-indigo-300',
      400: 'var(--color-indigo-400',
      500: 'var(--color-indigo-500',
      600: 'var(--color-indigo-600',
      700: 'var(--color-indigo-700',
      800: 'var(--color-indigo-800',
      900: 'var(--color-indigo-900'
    },
    purple: {
      50: 'var(--color-purple-50',
      100: 'var(--color-purple-100',
      200: 'var(--color-purple-200',
      300: 'var(--color-purple-300',
      400: 'var(--color-purple-400',
      500: 'var(--color-purple-500',
      600: 'var(--color-purple-600',
      700: 'var(--color-purple-700',
      800: 'var(--color-purple-800',
      900: 'var(--color-purple-900'
    },
    contrastThreshold: 2,
    contrastText: '#fff',
    tonalOffset: 0.2,
    text: {
      primary: 'var(--color-grey-900',
      secondary: 'var(--color-grey-600',
      disabled: 'var(--color-grey-300',
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      inverse: '#fff',
      inverseSecondary: 'var(--color-grey-300',
    },
    background: {
      canvas: 'var(--color-grey-50',
      paper: '#fff',
      header: 'var(--color-grey-700',
      subnav: 'var(--color-grey-600',
      sidenav: 'var(--color-grey-500',
      accent: 'rgba(0,0,0,0.12)',
      border: 'var(--color-grey-200',
      default: 'var(--color-grey-100'
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
    htmlFontSize: 'var(--',
    fontFamily: 'var(--fontFamilies.base.value)',
    fontSize: 14,
    d1: {
      fontSize: 'var(var(--typography-d1-font-size)',
      fontWeight: 'var(--typography-d1-font-weight)',
      fontFamily: 'var(--typography-d1-font-family)',
      letterSpacing: 'var(--typography-d1-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    d2: {
      fontSize: 'var(var(--typography-d2-font-size)',
      fontWeight: 'var(--typography-d2-font-weight)',
      fontFamily: 'var(--typography-d2-font-family)',
      letterSpacing: 'var(--typography-d2-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    h1: {
      fontSize: 'var(var(--typography-h1-font-size)',
      fontWeight: 'var(--typography-h1-font-weight)',
      fontFamily: 'var(--typography-h1-font-family)',
      letterSpacing: 'var(--typography-h1-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    h2: {
      fontSize: 'var(var(--typography-h2-font-size)',
      fontWeight: 'var(--typography-h2-font-weight)',
      fontFamily: 'var(--typography-h2-font-family)',
      letterSpacing: 'var(--typography-h2-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    h3: {
      fontSize: 'var(var(--typography-h3-font-size)',
      fontWeight: 'var(--typography-h3-font-weight)',
      fontFamily: 'var(--typography-h3-font-family)',
      letterSpacing: 'var(--typography-h3-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    h4: {
      fontSize: 'var(var(--typography-h4-font-size)',
      fontWeight: 'var(--typography-h4-font-weight)',
      fontFamily: 'var(--typography-h4-font-family)',
      letterSpacing: 'var(--typography-h4-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    h5: {
      fontSize: 'var(var(--typography-h5-font-size)',
      fontWeight: 'var(--typography-h5-font-weight)',
      fontFamily: 'var(--typography-h5-font-family)',
      letterSpacing: 'var(--typography-h5-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    h6: {
      ffontSize: 'var(var(--typography-h6-font-size)',
      fontWeight: 'var(--typography-h6-font-weight)',
      fontFamily: 'var(--typography-h6-font-family)',
      letterSpacing: 'var(--typography-h6-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    subtitle1: {
      fontSize: 'var(var(--typography-subtitle1-font-size)',
      fontWeight: 'var(--typography-subtitle1-font-weight)',
      fontFamily: 'var(--typography-subtitle1-font-family)',
      letterSpacing: 'var(--typography-subtitle1-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    subtitle2: {
      fontSize: 'var(var(--typography-subtitle2-font-size)',
      fontWeight: 'var(--typography-subtitle2-font-weight)',
      fontFamily: 'var(--typography-subtitle2-font-family)',
      letterSpacing: 'var(--typography-subtitle2-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    body1: {
      fontSize: 'var(var(--typography-body1-font-size)',
      fontWeight: 'var(--typography-body1-font-weight)',
      fontFamily: 'var(--typography-body1-font-family)',
      letterSpacing: 'var(--typography-body1-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    body2: {
      fontSize: 'var(var(--typography-body2-font-size)',
      fontWeight: 'var(--typography-body2-font-weight)',
      fontFamily: 'var(--typography-body2-font-family)',
      letterSpacing: 'var(--typography-body2-letter-spacing)',
      color: 'var(--color-text-primary)'
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 'var(--font-weights-regular)',
      fontFamily: 'var(--fontFamilies.base.value)',
      letterSpacing: 0.2,
      textTransform: 'var(--text-transform-uppercase)'
    },
    caption: {
      fontSize: 'var(var(--typography-caption-font-size)',
      fontWeight: 'var(--typography-caption-font-weight)',
      fontFamily: 'var(--typography-caption-font-family)',
      letterSpacing: 'var(--typography-caption-letter-spacing)',
      color: 'var(--color-text-primary)',
      textTransform: 'var(--text-transform-uppercase)'
    },
    overline: {
      fontSize: 'var(var(--typography-overline-font-size)',
      fontWeight: 'var(--typography-overline-font-weight)',
      fontFamily: 'var(--typography-overline-font-family)',
      letterSpacing: 'var(--typography-overline-letter-spacing)',
      color: 'var(--color-text-primary)',
      textTransform: 'var(--text-transform-uppercase)'
    }
  }
}

