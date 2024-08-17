import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import { ContextProvider } from './components/context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
