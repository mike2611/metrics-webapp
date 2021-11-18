import detailsReducer from '../../redux/details/detailsReducer';

const SET_STOCK = 'metrics/details/SET_STOCK';

describe('Testing details reducer', () => {
  test('should return correct symbol', () => {
    expect(detailsReducer('TEST', SET_STOCK)).toEqual('TEST');
  });
});
