import axios from 'axios';

const gainersStocksURL = 'https://financialmodelingprep.com/api/v3/gainers?apikey=7b54dd32bf2f300616a6586f080259e4';
const FETCH_STOCKS = 'metrics/stocks/FETCH_STOCKS';

const initialState = [];

export const fetchStocks = () => async (dispatch) => {
  try {
    const response = await axios.get(gainersStocksURL);
    const stocksList = Object.values(response.data);
    dispatch({
      type: FETCH_STOCKS,
      payload: stocksList,
    });
  } catch (error) {
    console.log(error);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKS:
      return action.payload;
    default:
      return state;
  }
};

export default (reducer);
