import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import * as History from 'history'
import rootReducer from './reducers/rootReducer';

export const history = History.createBrowserHistory()

const initialState = {
  tasks: [
    { id: 1, title: 'title1', description: 'body1', member_id: 1 },
    { id: 2, title: 'title2', description: 'body2', member_id: 2 },
    { id: 3, title: 'title3', description: 'body3', member_id: 1 },
  ],
  members: [
    { id: 1, name: 'Nadim' },
    { id: 2, name: 'Ehtesham' },
  ]
};
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)