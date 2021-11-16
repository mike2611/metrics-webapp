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
    <>
      <div className="row">
        <div className="col home-col-top">
          <h1>Most Gainer Stock Companies</h1>
        </div>
      </div>
      <div>
        <div className="row row-cols-2">
          {stocks.map((stock) => (
            <div className="col home-col-stock" aria-hidden="true" key={`${stock.ticker}key`} onClick={() => setSelectStock(stock.ticker)}>
              <NavLink className="text-decoration-none" to="/details">
                <div>
                  <h2 className="home-symbol">{stock.ticker}</h2>
                  <p className="home-info">
                    Price:&nbsp;
                    {stock.price}
                  </p>
                  <p className="home-info">
                    Change:&nbsp;
                    {stock.changes}
                  </p>
                  <p className="home-info">
                    Change:&nbsp;
                    {stock.changesPercentage.slice(0, 5)}
                    %
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default (Home);
