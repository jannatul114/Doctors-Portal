import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Login from './Pages/Authintications/Login/Login';
import RequireAdmin from './Pages/Authintications/Login/RequireAdmin';
import Registar from './Pages/Authintications/Registar';
import RequireAuth from './Pages/Authintications/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinments from './Pages/Dashboard/MyAppoinments';
import Myhistory from './Pages/Dashboard/MyHistory';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
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
        <Route path='/appoinment' element={<RequireAuth><Appoinment /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard ></Dashboard></RequireAuth>
        }>
          <Route index element={<MyAppoinments></MyAppoinments>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='myhistory' element={<Myhistory></Myhistory>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path='/registar' element={<Registar></Registar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
