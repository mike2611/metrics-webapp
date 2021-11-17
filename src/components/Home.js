import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCoins, FaMicrophone, FaArrowRight } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { fetchStocks } from '../redux/stocks/stocksReducer';
import { setStock } from '../redux/details/detailsReducer';

const Home = () => {
  let stocks = [];
  let aux = true;
  let firstClass = 'col home-col-stock-dark';
  let secondClass = 'col home-col-stock-ligth';
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}`;
  stocks = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stocks.length === 0) dispatch(fetchStocks());
  }, []);

  const setSelectStock = (ticker) => {
    dispatch(setStock(ticker));
  };

  return (
    <div className="container-fluid">
      <div className="row px-0">
        <div className="col home-col-header d-flex justify-content-around pt-2">
          <p>{date}</p>
          <h2 className="home-header-text">Today Most Gainer Stocks</h2>
          <div>
            <FaMicrophone className="me-2" />
            <BsGearFill />
          </div>
        </div>
      </div>
      <div className="row px-0">
        <div className="col home-col-top d-flex align-items-center justify-content-around py-2">
          <FaCoins className="home-icon" />
          <h1 className="home-title">
            Top&nbsp;
            {stocks.length}
            &nbsp;
            stocks
          </h1>
        </div>
      </div>
      <div className="row home-separation-row">
        <div className="col">
          <p>Click a stock for more details.</p>
        </div>
      </div>
      <div>
        <div className="row row-cols-2 row-cols-md-5">
          {stocks.map((stock, index) => {
            if (index % 2 === 0) {
              aux = !aux;
            }
            if (aux) {
              firstClass = 'col home-col-stock-dark';
              secondClass = 'col home-col-stock-ligth';
            } else {
              firstClass = 'col home-col-stock-ligth';
              secondClass = 'col home-col-stock-dark';
            }
            return (
              <div className={index % 2 === 0 ? firstClass : secondClass} aria-hidden="true" key={`${stock.ticker}key`} onClick={() => setSelectStock(stock.ticker)}>
                <NavLink className="text-decoration-none" to="/details">
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="home-symbol">{stock.ticker}</h2>
                      <FaArrowRight className="home-arrow" />
                    </div>
                    <div className="container">
                      <p className="home-info mb-0">
                        Price:&nbsp;
                        <span className="home-info-numbers">{parseFloat(stock.price).toFixed(3)}</span>
                      </p>
                      <p className="home-info mb-0">
                        Change:&nbsp;
                        <span className="home-info-numbers">{parseFloat(stock.changes).toFixed(3)}</span>
                      </p>
                      <p className="home-info">
                        Change:&nbsp;
                        <span className="home-info-numbers">
                          {stock.changesPercentage.slice(0, 4)}
                          %
                        </span>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default (Home);
