import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

/** TODO: import REDUX **/

/** TODO: Add REDUCERS */
function airlines(state = [], action) {
  if (action.type === 'ADD_AIRLINE') {
    const id = state.length;
    const newAirline = {
      id,
      ...action.payload,
    };
    return [...state, newAirline];
  }
  return state;
}

/** TODO: Create store */
const storeInstance = createStore(
  combineReducers({ airlines }),
  applyMiddleware(logger)
);

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
