import { NavLink } from 'react-router-dom';
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
      <NavLink key={stock.ticker} className="card" to="/details">
        <div className="card-body">
          <p className="text-danger">{stock.ticker}</p>
          <p>{stock.price}</p>
          <p>{stock.changes}</p>
          <p>{stock.changesPercentage}</p>
        </div>
      </NavLink>
    ))
  );
};

export default (Home);
