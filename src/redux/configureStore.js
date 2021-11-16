import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stocksReducer from './stocks/stocksReducer';

const reducer = combineReducers({
  stocksReducer,
});

const configureStore = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default configureStore;
