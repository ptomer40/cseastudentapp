import { useState } from 'react'

import './App.css'
import Login from './component/Login'
import Registration from './component/Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import StudentAdmin from './component/StudentAdmin'

function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />
    </Route>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/studentadmin' element= { <StudentAdmin />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
