import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../redux/stocks/stocksReducer';
import { setStock } from '../redux/details/detailsReducer';

const Home = () => {
  let stocks = [];
  stocks = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stocks.length === 0) dispatch(fetchStocks());
  }, []);

  const setSelectStock = (ticker) => {
    dispatch(setStock(ticker));
  };

  return (
    stocks.map((stock) => (
      <div aria-hidden="true" key={`${stock.ticker}key`} onClick={() => setSelectStock(stock.ticker)}>
        <NavLink className="card" to="/details">
          <div className="card-body">
            <p className="text-danger">{stock.ticker}</p>
            <p>{stock.price}</p>
            <p>{stock.changes}</p>
            <p>{stock.changesPercentage}</p>
          </div>
        </NavLink>
      </div>
    ))
  );
};

export default (Home);
