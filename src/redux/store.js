/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '~/redux/reducers';
import mySaga from '~/redux/sagas';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);
