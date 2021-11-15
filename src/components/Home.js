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
      <p key={stock}>{stock}</p>
    ))
  );
};

export default (Home);
