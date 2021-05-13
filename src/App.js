import './App.css';
import {Provider} from "react-redux";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import store from './store';
import Details from './components/Details';
function App() {
  return (
    <Router>
      <Provider store={store}>
      <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" component={Details} />
      </Provider>  
    </Router>
  );
}
export default App;
