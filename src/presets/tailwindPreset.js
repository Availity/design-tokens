const theme = require('../build/js/tokens')  // replace with availity colors

module.exports = {
  theme: {
    extend: {
      colors: {
        // primary: {
        //   main: theme => theme(colors.blue[500]),
        //   lighter: theme => theme(colors.blue[300]),
        //   darker: theme => theme(colors.blue[700]),
        // },
        // secondary: {
        //   main: theme => theme(colors.green[600]),
        //   lighter: theme => theme(colors.green[400]),
        //   darker: theme => theme(colors.green[800]),
        // },
        // error: theme => theme(colors.red[800]),
        // warning: theme => theme(colors.yellow[600]),
        // info: theme => theme(colors.blue[500]),
        // success: theme => theme(colors.green[600]),
        blue: {
          50:  theme.colors.blue[50].value,
          100: theme.colors.blue[100].value,
          200: theme.colors.blue[200].value,
          300: theme.colors.blue[300].value,
          400: theme.colors.blue[400].value,
          500: theme.colors.blue[500].value,
          600: theme.colors.blue[600].value,
          700: theme.colors.blue[700].value,
          800: theme.colors.blue[800].value,
          900: theme.colors.blue[900].value
        },
        indigo: {
          50:  theme.colors.indigo[50].value,
          100: theme.colors.indigo[100].value,
          200: theme.colors.indigo[200].value,
          300: theme.colors.indigo[300].value,
          400: theme.colors.indigo[400].value,
          500: theme.colors.indigo[500].value,
          600: theme.colors.indigo[600].value,
          700: theme.colors.indigo[700].value,
          800: theme.colors.indigo[800].value,
          900: theme.colors.indigo[900].value
        },
        gray: {
          50:  theme.colors.gray[50].value,
          100: theme.colors.gray[100].value,
          200: theme.colors.gray[200].value,
          300: theme.colors.gray[300].value,
          400: theme.colors.gray[400].value,
          500: theme.colors.gray[500].value,
          600: theme.colors.gray[600].value,
          700: theme.colors.gray[700].value,
          800: theme.colors.gray[800].value,
          900: theme.colors.gray[900].value
        },
        purple: {
          50:  theme.colors.purple[50].value,
          100: theme.colors.purple[100].value,
          200: theme.colors.purple[200].value,
          300: theme.colors.purple[300].value,
          400: theme.colors.purple[400].value,
          500: theme.colors.purple[500].value,
          600: theme.colors.purple[600].value,
          700: theme.colors.purple[700].value,
          800: theme.colors.purple[800].value,
          900: theme.colors.purple[900].value
        },
        red: {
          50:  theme.colors.red[50].value,
          100: theme.colors.red[100].value,
          200: theme.colors.red[200].value,
          300: theme.colors.red[300].value,
          400: theme.colors.red[400].value,
          500: theme.colors.red[500].value,
          600: theme.colors.red[600].value,
          700: theme.colors.red[700].value,
          800: theme.colors.red[800].value,
          900: theme.colors.red[900].value
        },
        yellow: {
          50:  theme.colors.yellow[50].value,
          100: theme.colors.yellow[100].value,
          200: theme.colors.yellow[200].value,
          300: theme.colors.yellow[300].value,
          400: theme.colors.yellow[400].value,
          500: theme.colors.yellow[500].value,
          600: theme.colors.yellow[600].value,
          700: theme.colors.yellow[700].value,
          800: theme.colors.yellow[800].value,
          900: theme.colors.yellow[900].value
        },
        orange: {
          50:  theme.colors.orange[50].value,
          100: theme.colors.orange[100].value,
          200: theme.colors.orange[200].value,
          300: theme.colors.orange[300].value,
          400: theme.colors.orange[400].value,
          500: theme.colors.orange[500].value,
          600: theme.colors.orange[600].value,
          700: theme.colors.orange[700].value,
          800: theme.colors.orange[800].value,
          900: theme.colors.orange[900].value
        },
        green: {
          50:  theme.colors.green[50].value,
          100: theme.colors.green[100].value,
          200: theme.colors.green[200].value,
          300: theme.colors.green[300].value,
          400: theme.colors.green[400].value,
          500: theme.colors.green[500].value,
          600: theme.colors.green[600].value,
          700: theme.colors.green[700].value,
          800: theme.colors.green[800].value,
          900: theme.colors.green[900].value
        }
      }
    }
  }
}
