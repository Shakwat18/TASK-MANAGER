import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, RouterContextProvider, Routes} from 'react-router'
import Header from './layouts/Header';
import DashBoard from './pages/DashBoard';
import CreateNewTask from './pages/CreateNewTask';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/RegisterPage';
import StatusPage from './pages/StatusPage';
import HeaderForR_L from './layouts/HeaderForR&L';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import OtpPage from './pages/OtpPage';
import ResetPassword from './pages/ResetPassword';
export default function App() {
  return (
    <BrowserRouter>
      {/* <HeaderForR_L/> */}

    <Routes>
      <Route element={<ProtectedRoutes/>}>
      <Route path='/' element={<DashBoard/>} exact/>
      <Route path='/addnew' element={<CreateNewTask/>} exact/>
      <Route path='/status' element={<StatusPage/>} exact/>
      </Route>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>} exact/>
      <Route path='/otp' element={<OtpPage/>} exact/>
      <Route path='/resetPassword' element={<ResetPassword/>} exact/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
