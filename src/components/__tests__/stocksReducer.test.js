import stocksReducer from '../../redux/stocks/stocksReducer';

const FETCH_STOCKS = 'metrics/stocks/FETCH_STOCKS';

describe('Testing stocks reducer', () => {
  test('should return correct TEST', () => {
    expect(stocksReducer('TEST', FETCH_STOCKS)).toEqual('TEST');
  });
});
