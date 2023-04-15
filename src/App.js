import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
// import Cart from './components/Cart';
import Signup from './components/Signup';
import Login from './components/Login';
import Products from './components/Products';
import Carty from './components/Carty'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Main />} />
        {/* <Route path='/cart' element={<Cart />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/carty' element={<Carty />} />
      </Routes>
      <Header />
    </div>
  );
}

export default App;

//Define route in routes, always make component starting from capital letter