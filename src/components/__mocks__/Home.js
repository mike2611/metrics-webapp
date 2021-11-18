import { FaCoins, FaMicrophone } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';

const Home = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}`;

  return (
    <div className="container-fluid">
      <div className="row px-0">
        <div className="col home-col-header d-flex justify-content-around pt-2">
          <p>{date}</p>
          <h2 className="home-header-text mt-2">Today Most Gainer Stocks</h2>
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
            stocks
          </h1>
        </div>
      </div>
      <div className="row home-separation-row d-flex">
        <div className="col">
          <p className="mt-1">CLICK A STOCK FOR MORE DETAILS</p>
        </div>
      </div>
    </div>
  );
};

export default (Home);
