import axios from 'axios';

const wallStreetURL = 'https://dashboard.nbshare.io/api/v1/apps/reddit';
const FETCH_STOCKS = 'metrics/stocks/FETCH_STOCKS';

const initialState = [];

export const fetchStocks = () => async (dispatch) => {
  try {
    const response = await axios.get(wallStreetURL);
    const stocksList = response.data;
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
