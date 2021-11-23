import React, {lazy} from 'react';

 const AppLazy = lazy(() => {
  // eslint-disable-next-line no-console
  console.log('<AppLazy />');

  return import(/* webpackChunkName: "AppLoaded" */ './AppLoaded');
});
export default AppLazy;