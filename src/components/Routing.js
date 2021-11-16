import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Home';
import Details from './Details';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </Router>
);

export default (Routing);
