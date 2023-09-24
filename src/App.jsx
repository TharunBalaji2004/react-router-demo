import './App.css'
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import NoMatch from './components/NoMatch';
import NewProduct from './components/NewProduct';
import Featured from "./components/Featured";
import Products from './components/Products';
import User from './components/User';
import UserDetail from './components/UserDetail';
import Admin from './components/Admin';
import Profile from './components/Profile';
import Login from './components/Login';

const LazyAbout = React.lazy(() => import("./components/About"))

function App() {

  const navigate = useNavigate();

  return(
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element={
          <React.Suspense fallback="Loading...">
            <LazyAbout />
          </React.Suspense>
          } />
        <Route path="summary" element={<Summary />} />
        <Route path='products' element={<Products />}>
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<NewProduct />} />
        </Route>
        <Route path='user' element={<User />} />
        <Route path='user/:userId' element={<UserDetail />} />
        <Route path='user/admin' element={<Admin />} />
        <Route path='profile' element={<Profile />} />
        <Route path='login' element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App
