import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" />
      <Route path="/rockets" />
      <Route path="/myProfile" />
    </Routes>
  </Router>
);

export default (Routing);
