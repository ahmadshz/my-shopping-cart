import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './4-Pages/Home/Home';
import Navbarr from './2-Components/NavBar/Navbar';
import SingleProduct from './2-Components/SingleProduct/SingleProduct';
import Error404 from './2-Components/Error/Error404';

function App() {
  return (
    <div >
      <Navbarr />
      <div className='landing ' style={{ position:'relative', top: 70 }}>
        <Routes>
          <Route path='/*' element={<Error404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/singleProduct/:id' element={<SingleProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
