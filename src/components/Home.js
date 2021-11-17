import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCoins, FaMicrophone } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { fetchStocks } from '../redux/stocks/stocksReducer';
import { setStock } from '../redux/details/detailsReducer';

const Home = () => {
  let stocks = [];
  let aux = true;
  let firstClass = 'col home-col-stock-dark';
  let secondClass = 'col home-col-stock-ligth';
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
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
        <div className="col home-col-header d-flex">
          <p>{date}</p>
          <h2 className="home-header-text">Today Most Gainer Stocks</h2>
          <FaMicrophone />
          <BsGearFill />
        </div>
      </div>
      <div className="row">
        <div className="col home-col-top d-flex align-items-center">
          <FaCoins className=" ms-2 home-icon" />
          <h1 className="ms-4 home-title">
            Top&nbsp;
            {stocks.length}
            &nbsp;
            stocks
          </h1>
        </div>
      </div>
      <div className="row home-separation-row">
        <div className="col">
          <p>Click a stock to see details.</p>
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default (Home);
