import './App.css';
import Header from './Pages/Home/sheared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { Toaster } from 'react-hot-toast';
import ResetPass from './Pages/ResetPass/ResetPass';

function App() {
  return (
    <div>
      <Toaster
        position="bottom-center" />
      <Header></Header>

      <Routes>
        <Route path='/' element={
          <Home></Home>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='/reset-pass' element={<ResetPass></ResetPass>}></Route>
      </Routes>
    </div>
  );
}

export default App;
