import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../redux/stocks/stocksReducer';

const Home = () => {
  let stocks = [];
  stocks = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stocks.length === 0) dispatch(fetchStocks());
  }, []);

  return (
    stocks.map((stock) => (
      <div key={stock.ticker}>
        <p>{stock.ticker}</p>
        <p>{stock.price}</p>
        <p>{stock.changes}</p>
        <p>{stock.changesPercentage}</p>
      </div>
    ))
  );
};

export default (Home);
