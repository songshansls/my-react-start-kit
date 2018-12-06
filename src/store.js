import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
    
]
const store = createStore(reducer, /* preloadedState, */ composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
))
