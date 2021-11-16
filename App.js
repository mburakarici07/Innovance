import React from 'react';
import NavigationPage from './src/Navigations/NavigationPage';
import {Provider} from 'react-redux';
import combineReducers from './src/Redux/reducers/combineReducers';
import {createStore} from 'redux';

const store = createStore(combineReducers);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationPage />
    </Provider>
  );
};

export default App;
