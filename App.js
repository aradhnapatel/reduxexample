import React from 'react';

import {AppContainer} from './src/navigation/AppContainer';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <StoreProvider store={store}>
        <AppContainer />
      </StoreProvider>
    </>
  );
};
export default App;
