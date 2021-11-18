import { Provider } from 'react-redux';
import './App.css';
import Routing from './components/Routing';
import configureStore from './redux/configureStore';

function App() {
  const store = configureStore;

  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
