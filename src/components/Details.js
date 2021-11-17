import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaMicrophone, FaAngleLeft } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { fetchDetails } from '../redux/details/detailsReducer';

const Details = () => {
  let stock = '';
  stock = useSelector((state) => state.detailsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(stock));
  }, []);

  return (
    <div className="container-fluid details-container">
      <div className="row details-col-header px-0">
        <div className="col d-flex justify-content-around pt-2">
          <div>
            <NavLink className="text-decoration-none details-header-back" to="/">
              <FaAngleLeft />
              Go Back
            </NavLink>
          </div>
          <h2 className="details-header-text">Stock Details</h2>
          <div>
            <FaMicrophone className="me-2" />
            <BsGearFill />
          </div>
        </div>
      </div>
      <div className="row px-0">
        <div className="col home-col-top d-flex align-items-center justify-content-around py-2">
          <h1>
            Details&nbsp;
            <span className="details-symbol">{stock[0].symbol}</span>
          </h1>
        </div>
      </div>
      <div className="row details-separation-row">
        <div className="col">
          <p className="text-center">COMPANY BREAKDOWN</p>
        </div>
      </div>
      <div className="row">
        <div className="col details-col details-ligth-col d-flex justify-content-between  align-items-center">
          Company:&nbsp;
          <span className="ms-2 details-info">
            {stock[0].name}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col details-col details-dark-col d-flex justify-content-between  align-items-center">
          Currency:&nbsp;
          <span className="ms-2 details-info">
            {stock[0].currency}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col details-col details-ligth-col d-flex justify-content-between align-items-center">
          Exchange:&nbsp;
          <span className="ms-2 details-info">
            {stock[0].stockExchange}
          </span>
        </div>
      </div>
    </div>
  );
};

export default (Details);
