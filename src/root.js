import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import AppLazy from './AppLazy';
import ErrorBoundary from './ErrorBoundary';
import Loading from './Loading';

ReactDOM.render(
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <AppLazy />
    </Suspense>
  </ErrorBoundary>,
  document.getElementById('root')
);
