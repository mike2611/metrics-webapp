import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home';
import configureStore from './redux/configureStore';

function App() {
  const store = configureStore;

  return (
    <Provider store={store}>
      <div className="App">
        <p>Test</p>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
