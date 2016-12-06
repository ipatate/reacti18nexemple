import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import initLang from './lib/i18n';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {

  return initLang().then((i18n) => {

    const changeLanguage = (lg) => { i18n.changeLanguage(lg); };

    ReactDOM.render(
      <I18nextProvider t={i18n.t} i18n={i18n}>
        <App i18n={i18n} changeLanguage={changeLanguage} />
      </I18nextProvider>
    , document.getElementById('root'));

  }).catch(e => {
    throw e;
  });

});
