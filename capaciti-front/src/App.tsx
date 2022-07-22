import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navigation } from './routes/Navigation';
import { LoginScreen } from './components/login/LoginScreen';

function App() {
  return (
    <div className="App bg-darkBg1 max-w-screen-xl m-auto">
      <Provider store={store}>
        <Navigation/>
        <LoginScreen/>
      </Provider>
    </div>
  );
}

export default App;
