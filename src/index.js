import React from 'react'
import ReactDOM from 'react-dom'
import { composeWithDevTools } from 'redux-devtools-extension'; //make devtools available
import App from './App'
import transactionReducer from './reducers/transactionReducer'
import categoryReducer from './reducers/categoryReducer'
import 'semantic-ui-css/semantic.min.css'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';

const rootReducer = combineReducers({ transactionReducer, categoryReducer })

const store = createStore(rootReducer, composeWithDevTools()); //2nd argument is making devtools available
console.log("store in index.js", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
