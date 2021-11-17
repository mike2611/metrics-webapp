import axios from 'axios';

const detailsStockURL = 'https://financialmodelingprep.com/api/v3/search?query=';
const SET_STOCK = 'metrics/details/SET_STOCK';
const FETCH_DETAILS = 'metrics/details/FETCH_DETAILS';
const initialState = [];

export const setStock = (stock) => ({
  type: SET_STOCK,
  payload: stock,
});

export const fetchDetails = (symbol) => async (dispatch) => {
  try {
    const response = await axios.get(`${detailsStockURL}${symbol}&limit=1&exchange=NASDAQ&apikey=7b54dd32bf2f300616a6586f080259e4`);
    const stockDetails = Object.values(response.data);
    dispatch({
      type: FETCH_DETAILS,
      payload: stockDetails,
    });
  } catch (error) {
    console.log(error);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOCK:
      return action.payload;
    case FETCH_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default (reducer);
