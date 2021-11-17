import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails } from '../redux/details/detailsReducer';

const Details = () => {
  let stock = '';
  stock = useSelector((state) => state.detailsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(stock));
  }, []);

  return (
    <div>
      <NavLink className="nav-link" to="/">
        Go Back
      </NavLink>
      <h1>Details</h1>
      <p>{stock[0].symbol}</p>
      <p>{stock[0].name}</p>
      <p>{stock[0].currency}</p>
      <p>{stock[0].stockExchange}</p>
    </div>
  );
};

export default (Details);
