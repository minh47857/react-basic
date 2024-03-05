import logo from './logo.svg';
import './App.scss';
// import ListTodo from './ClassComponent/ToDos/ListTodo';
import Home from '../components/Home';
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import MyComponent from './Example/MyComponent.js';
import AddNewProduct from '../components/AddNewProduct';


function App() {
  return (
    <div className="App">
      <header className="App-header content-left">
        <div style={{textAlign: "center"}}><img src={logo} className="App-logo" alt="logo" /></div>
        {/* <MyComponent></MyComponent> */}
         <p>Simple TODO Apps with React.js</p>
        {/* <ListTodo /> */}
        <Home />
      </header>
      <div className="content-right">
        <AddNewProduct/>
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
  );
}

export default App;
