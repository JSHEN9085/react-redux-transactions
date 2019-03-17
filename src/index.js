import React from 'react'
import ReactDOM from 'react-dom'
import { composeWithDevTools } from 'redux-devtools-extension'; //make devtools available
import App from './components/App'
import transactionReducer from './reducers/transactionReducer'
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const store = createStore(transactionReducer, composeWithDevTools()); //2nd argument is making devtools available

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
