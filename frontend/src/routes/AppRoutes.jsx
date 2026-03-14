import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from '../Pages/layout/Home'
const AppRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<h1>Login</h1>} />
    <Route path='/register' element={<h1>Register</h1>} />
   </Routes>
   </>
  )
}

export default AppRoutes