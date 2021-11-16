import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stocksReducer from './stocks/stocksReducer';
import detailsReducer from './details/detailsReducer';

const reducer = combineReducers({
  stocksReducer,
  detailsReducer,
});

const configureStore = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default configureStore;
