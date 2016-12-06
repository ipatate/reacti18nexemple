import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

const Display = ({ t }) => {
  return (
    <div>
      <p>
      {t('hello')}
      </p>
    </div>
  );
};

export default translate()(Display);
