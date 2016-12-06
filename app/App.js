import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

import Display from './components/Display';

const btStyle = {
  color: 'white',
  backgroundColor: 'dodgerblue',
  padding: '.3rem .5rem',
  display: 'inline-block',
  minWidth: '100px',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '1.1rem',
  borderRadius: '3px'
};

const App = ({ changeLanguage, i18n, t }) => {
  const language = i18n.language || 'fr';
  return (
    <div>
      <h1>{t('title')}</h1>
      {language === 'en' ?
        <a href="#" style={btStyle} onClick={(e) => changeLanguage('fr')}>fr</a>
        :
        <a href="#" style={btStyle} onClick={(e) => changeLanguage('en')}>en</a>
      }
      <Display />
    </div>
  );
}


export default translate()(App);
