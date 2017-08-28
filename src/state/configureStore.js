import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// TODO: cleanup
const composeMiddleWare = () => (window.devToolsExtension ?
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : undefined,
  ) :
  compose(applyMiddleware(thunk))
);

export default () => {
  const store = createStore(rootReducer, {}, composeMiddleWare());

  window.store = store;

  return store;
};
