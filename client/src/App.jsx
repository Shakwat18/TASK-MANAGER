import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router'
import Header from './layouts/Header';
import DashBoard from './pages/DashBoard';
import CreateNewTask from './pages/CreateNewTask';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/RegisterPage';
import StatusPage from './pages/StatusPage';
import HeaderForR_L from './layouts/HeaderForR&L';
import NotFoundPage from './pages/NotFoundPage';
export default function App() {
  return (
    <BrowserRouter>
      {/* <HeaderForR_L/> */}

    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/addnew' element={<CreateNewTask/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/status' element={<StatusPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
