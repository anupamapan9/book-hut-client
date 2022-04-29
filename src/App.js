import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { Toaster } from 'react-hot-toast';
import ResetPass from './Pages/ResetPass/ResetPass';
import Header from './Pages/Sheared/Header/Header';
import AddItems from './Pages/AddItems/AddItems';
import RequireAuth from './Pages/Sheared/RequireAuth/RequireAuth';
import Inventory from './Pages/Inventory/Inventory';

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
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }>
        </Route>
        <Route path='/add-items' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
