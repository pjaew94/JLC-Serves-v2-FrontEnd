import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";


import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from "./redux/store";
import GlobalStyle from './globalStyles';
import Home from "./pages/Home/Home";
import DonateForm from './pages/DonateForm/DonateForm';
import Success from "./pages/Success/Success";
import Donations from './pages/Donations/Donations';



const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/donate' component={DonateForm} />
          <Route exact path='/donations' component={Donations} />
          <Route exact path='/payment' component={Success} />
        </Switch>
      </Router>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
