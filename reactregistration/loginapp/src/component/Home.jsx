import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Home() {
  return (
    <div style={{backgroundColor:'brown', color:'white', fontSize:'40px'}}>Welcome to Student management APP
    <nav>
    <div>
    <ul>
    <li>
        <Link to='/studentadmin'>Admin Console </Link>
    </li>
    </ul>
    </div>
    <ul>
    <li>
        <Link to='/login'>Login </Link>
    </li>

    <li>
        <Link to='/register'>Registration</Link>
    </li>

    </ul>
  
    </nav>
    <Outlet />
    </div>
  )
}

export default Home