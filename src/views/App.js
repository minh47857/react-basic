import logo from './logo.svg';
import './App.scss';
// import ListTodo from './ClassComponent/ToDos/ListTodo';
import Home from '../components/Home';
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import MyComponent from './Example/MyComponent.js';
import AddNewProduct from '../components/AddNewProduct';
import Product from '../components/Product/Product';
import "yet-another-react-lightbox/styles.css";
import Nav from '../components/Navigation/nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Weather from '../components/Weather/Weather';
import OTP from '../components/OTP/OTP';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/product">
          <Product/>
        </Route>
        <Route path="/weather">
          <Weather/>
        </Route>
        <Route path="/otp">
          <OTP/>
        </Route>
        <Route path="/about">
          About
        </Route>
        <Route exact path="/">
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }}><img src={logo} className="App-logo" alt="logo" /></div>
              {/* <MyComponent></MyComponent> */}
              <p>Simple TODO Apps with React.js</p>
              {/* <ListTodo /> */}
              <Home />
            </header>
            <div className="content-right">
              <AddNewProduct />
              <hr />
              <Product />
            </div>
                {/* <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />  */}
          </div>
        </Route>
        <Route path="*">
          404 not found 
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
