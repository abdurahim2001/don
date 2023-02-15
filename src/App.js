
import './App.css';
import Header from './components/Header.jsx';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Machen from './components/Machen.jsx';
import Menu from './components/Menu.jsx';
import Glavnay from './components/Glavnay';
import Comer from './components/Comer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Machen/>
      <Routes>
      <Route  path='/' element={<Header/>} />
      <Route  path='/menu' element={<Menu/>} />
      <Route  path='/glavnay' element={<Glavnay/>} />
      <Route  path='/comer' element={<Comer/>} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
