import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Login from './Pages/Authintications/Login/Login';
import Registar from './Pages/Authintications/Registar';
import RequireAuth from './Pages/Authintications/RequireAuth';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appoinment' element={
          <RequireAuth>
            <Appoinment />
          </RequireAuth>}></Route>
        <Route path='/registar' element={<Registar></Registar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
