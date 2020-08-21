import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Layout from '../src/Layout/Layout';
import Copyrigth from '../src/Copyright';
export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Agostina Castro Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital@0;1&display=swap" rel="stylesheet"></link> */}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <div style={{ minHeight: '89vh' }}>
            <Component {...pageProps} />
            <footer style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
              <Copyrigth />
            </footer>

          </div>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};