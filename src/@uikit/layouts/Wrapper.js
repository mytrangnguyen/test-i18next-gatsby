import AntOverwriteStyle from 'configs/AntOverwriteStyle';
import PropTypes from 'prop-types';
import GlobalStyle from 'configs/globalStyle';
import theme from 'configs/theme.json';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

const Wrapper = ({ children }) => (
  <I18nextProvider>
    <ThemeProvider theme={theme}>
      <AntOverwriteStyle />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </I18nextProvider>
);

Wrapper.propTypes = {
  children: PropTypes.any,
};

export default Wrapper;
