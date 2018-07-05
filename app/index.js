import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import accountingApp from './reducers'
import App from './components/app'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(
  accountingApp,
  compose(applyMiddleware(thunk, logger))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main')
)
