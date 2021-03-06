const theme = require('@availity/design-tokens/dist/js/tokens.js')

module.exports = {
  mode: 'light',
  palette: {
    primary: {
      main: theme.colorPrimaryMain,
      light: theme.colorPrimaryLight,
      dark: theme.colorPrimaryDark,
      darker: theme.colorPrimaryDarker
    },
    secondary: {
      main: theme.colorSecondaryMain,
      light: theme.colorSecondaryLight,
      dark: theme.colorSecondaryDark,
      darker: theme.colorSecondaryDarker
    },
    tertiary: {
      main: theme.colorTertiaryMain,
      light: theme.colorTertiaryLight,
      dark: theme.colorTertiaryDark,
      darker: theme.colorTertiaryDarker
    },
    error: {
      main: theme.colorErrorMain,
      light: theme.colorErrorLight,
      dark: theme.colorErrorDark,
      darker: theme.colorErrorDarker
    },
    warning: {
      main: theme.colorWarningMain,
      light: theme.colorWarningLight,
      dark: theme.colorWarningDark,
      darker: theme.colorWarningDarker
    },
    info: {
      main: theme.colorInfoMain,
      light: theme.colorInfoLight,
      dark: theme.colorInfoDark,
      darker: theme.colorInfoDarker
    },
    success: {
      main: theme.colorSuccessMain,
      light: theme.colorSuccessLight,
      dark: theme.colorSuccessDark,
      darker: theme.colorSuccessDarker
    },
    grey: {
      50: theme.colorGrey50,
      100: theme.colorGrey100,
      200: theme.colorGrey200,
      300: theme.colorGrey300,
      400: theme.colorGrey400,
      500: theme.colorGrey500,
      600: theme.colorGrey600,
      700: theme.colorGrey700,
      800: theme.colorGrey800,
      900: theme.colorGrey900,
    },
    indigo: {
      50: theme.colorIndigo50,
      100: theme.colorIndigo100,
      200: theme.colorIndigo200,
      300: theme.colorIndigo300,
      400: theme.colorIndigo400,
      500: theme.colorIndigo500,
      600: theme.colorIndigo600,
      700: theme.colorIndigo700,
      800: theme.colorIndigo800,
      900: theme.colorIndigo900,
    },
    purple: {
      50: theme.colorPurple50,
      100: theme.colorPurple100,
      200: theme.colorPurple200,
      300: theme.colorPurple300,
      400: theme.colorPurple400,
      500: theme.colorPurple500,
      600: theme.colorPurple600,
      700: theme.colorPurple700,
      800: theme.colorPurple800,
      900: theme.colorPurple900,
    },
    blue: {
      50: theme.colorBlue50,
      100: theme.colorBlue100,
      200: theme.colorBlue200,
      300: theme.colorBlue300,
      400: theme.colorBlue400,
      500: theme.colorBlue500,
      600: theme.colorBlue600,
      700: theme.colorBlue700,
      800: theme.colorBlue800,
      900: theme.colorBlue900,
    },
    contrastThreshold: 2,
    contrastText: '#fff',
    tonalOffset: 0.2,
    text: {
      primary: theme.colorTextPrimary,
      secondary: theme.colorTextSecondary,
      disabled: theme.colorTextDisabled,
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      inverse: '#fff',
      inverseSecondary: theme.colorGrey300,
    },
    background: {
      canvas: theme.colorBackgroundCanvas,
      paper: theme.colorBackgroundPaper,
      header: theme.colorBackgroundHeader,
      subnav: theme.colorBackgroundSubnav,
      sidenav: theme.colorBackgroundSidenav,
      accent: theme.colorBackgroundAccent,
      border: theme.colorBackgroundBorder,
      default: theme.colorGrey100
    },
    action: {
      active: theme.colorActionActive,
      hover: theme.colorActionHover,
      hoverOpacity: 0.04,
      selected: theme.colorActionSelected,
      selectedOpacity: 0.08,
      disabled: theme.colorActionDisabled,
      disabledBackground: theme.colorActionDisabledBg,
      disabledOpacity: 0.38,
      focus: theme.colorActionFocus,
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: theme.fontFamiliesBase,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    d1: {
      fontSize: theme.typographyD1FontSize,
      fontWeight: theme.typographyD1FontWeight,
      fontFamily: theme.typographyD1FontFamily,
      letterSpacing: theme.typographyD1LetterSpacing,
      color: theme.colorTextPrimary
    },
    d2: {
      fontSize: theme.typographyD2FontSize,
      fontWeight: theme.typographyD2FontWeight,
      fontFamily: theme.typographyD2FontFamily,
      letterSpacing: theme.typographyD2LetterSpacing,
      color: theme.colorTextPrimary
    },
    h1: {
      fontSize: theme.typographyH1FontSize,
      fontWeight: theme.typographyH1FontWeight,
      fontFamily: theme.typographyH1FontFamily,
      letterSpacing: theme.typographyH1LetterSpacing,
      color: theme.colorTextPrimary
    },
    h2: {
      fontSize: theme.typographyH2FontSize,
      fontWeight: theme.typographyH2FontWeight,
      fontFamily: theme.typographyH2FontFamily,
      letterSpacing: theme.typographyH2LetterSpacing,
      color: theme.colorTextPrimary
    },
    h3: {
      fontSize: theme.typographyH3FontSize,
      fontWeight: theme.typographyH3FontWeight,
      fontFamily: theme.typographyH3FontFamily,
      letterSpacing: theme.typographyH3LetterSpacing,
      color: theme.colorTextPrimary
    },
    h4: {
      fontSize: theme.typographyH4FontSize,
      fontWeight: theme.typographyH4FontWeight,
      fontFamily: theme.typographyH4FontFamily,
      letterSpacing: theme.typographyH4LetterSpacing,
      color: theme.colorTextPrimary
    },
    h5: {
      fontSize: theme.typographyH5FontSize,
      fontWeight: theme.typographyH5FontWeight,
      fontFamily: theme.typographyH5FontFamily,
      letterSpacing: theme.typographyH5LetterSpacing,
      color: theme.colorTextPrimary
    },
    h6: {
      fontSize: theme.typographyH6FontSize,
      fontWeight: theme.typographyH6FontWeight,
      fontFamily: theme.typographyH6FontFamily,
      letterSpacing: theme.typographyH6LetterSpacing,
      color: theme.colorTextPrimary
    },
    subtitle1: {
      fontSize: theme.typographySubtitle1FontSize,
      fontWeight: theme.typographySubtitle1FontWeight,
      fontFamily: theme.typographySubtitle1FontFamily,
      letterSpacing: theme.typographySubtitle1LetterSpacing,
      color: theme.colorTextPrimary
    },
    subtitle2: {
      fontSize: theme.typographySubtitle2FontSize,
      fontWeight: theme.typographySubtitle2FontWeight,
      fontFamily: theme.typographySubtitle2FontFamily,
      letterSpacing: theme.typographySubtitle2LetterSpacing,
      color: theme.colorTextPrimary
    },
    body1: {
      fontSize: theme.typographyBody1FontSize,
      fontWeight: theme.typographyBody1FontWeight,
      fontFamily: theme.typographyBody1FontFamily,
      letterSpacing: theme.typographyBody1LetterSpacing,
      color: theme.colorTextPrimary
    },
    body2: {
      fontSize: theme.typographyBody2FontSize,
      fontWeight: theme.typographyBody2FontWeight,
      fontFamily: theme.typographyBody2FontFamily,
      letterSpacing: theme.typographyBody2LetterSpacing,
      color: theme.colorTextPrimary
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: theme.fontWeightsRegular,
      fontFamily: theme.fontFamiliesBase,
      letterSpacing: 0.2
    },
    caption: {
      fontSize: theme.typographyCaptionFontSize,
      fontWeight: theme.typographyCaptionFontWeight,
      fontFamily: theme.typographyCaptionFontFamily,
      letterSpacing: theme.typographyCaptionLetterSpacing,
      color: theme.colorTextPrimary
    },
    overline: {
      fontSize: theme.typographyOverlineFontSize,
      fontWeight: theme.typographyOverlineFontWeight,
      fontFamily: theme.typographyOverlineFontFamily,
      letterSpacing: theme.typographyOverlineLetterSpacing,
      color: theme.colorTextPrimary
    }
  }
}

