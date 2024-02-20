import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import { Provider } from 'react-redux';
import store from "./store"
function App() {
  return (
    <Provider store={store}>
      <CustomerAdd />
      <CustomerView />
    </Provider>
  );
}

export default App;