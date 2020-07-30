import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import preset from 'jss-preset-default';
import { JssProvider, ThemeProvider, SheetsRegistry } from 'react-jss';
import jssPluginNested from 'jss-plugin-nested';
import { create } from 'jss';
import { ConnectedRouter } from 'connected-react-router';
import itAppStrings from 'Translations/lang-it.json';
import LanguageProvider from 'Utility/LanguageProvider';
import ErrorBoundary from 'Utility/ErrorBoundary';
import history from 'Utility/history';
import BarthachijuuIoContainer from './BarthachijuuIoContainer';
import theme from '../styles/themes/theme';

const translationMessages = {
  it: {
    ...itAppStrings,
  },
};

class MainContainer extends Component {
  static propTypes = {
    authRoutes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool.isRequired,
      component: PropTypes.func.isRequired,
    }))).isRequired,
    noauthRoutes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool.isRequired,
      component: PropTypes.func.isRequired,
    }))).isRequired,
    store: PropTypes.object.isRequired,
  };

  state = {
    language: {
      messages: translationMessages,
      locale: 'it',
    },
  };

  render() {
    const jss = create(preset());
    jss.insertionPoint = 'jss-insertion-point';
    jss.use(jssPluginNested());
    const sheets = new SheetsRegistry();
    const sheet = jss.createStyleSheet();
    sheets.add(sheet);
    sheets.toString();

    const { store } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <JssProvider registry={sheets} classNamePrefix="Cv-">
            <Provider store={store}>
              <LanguageProvider language={this.state.language}>
                <ErrorBoundary>
                  <ConnectedRouter history={history}>
                    <BarthachijuuIoContainer {...this.props} />
                  </ConnectedRouter>
                </ErrorBoundary>
              </LanguageProvider>
            </Provider>
          </JssProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default MainContainer;
