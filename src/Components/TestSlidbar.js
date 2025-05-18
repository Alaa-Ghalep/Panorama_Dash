
import React, { useEffect, useState } from 'react'
import '../Style/TestStyle.css';
import dash from '../Images/dash.png';
import ehab from '../Images/ehab.png';
import {Link,  NavLink,  Route, Routes, useNavigate} from "react-router-dom";
import Managment from './Managment';
import Analystics from './Analystics';

export default function TestSlidbar() {
  const [open,setopen]=useState(true);
  return (
   <div className='container-fluid'>
 <div className='container'>
<div className=' d-flex'>
    <div className=' w-25 min-vh-100 bg-dark'>
            <ul>
                <li>
                    <a className='nav-link px-2 '>

<i> <img src={dash}/><span className='ms-1 d-none d-sm-inline'> Dashboard</span></i>
                    </a>
                </li>
                <li>
                    <Link className='nav-link px-2 ' to='/Management'>

<i> <img src={dash}/><span className='ms-1 d-none d-sm-inline'> Management</span></i>
                    </Link>
                </li>   <li>
                    <a className='nav-link px-2 '>

<i> <img src={dash}/><span className='ms-1 d-none d-sm-inline'> Dashboard</span></i>
                    </a>
                </li>   <li>
                    <a className='nav-link px-2 '>

<i> <img src={dash}/><span className='ms-1 d-none d-sm-inline'> Dashboard</span></i>
                    </a>
                </li>
            </ul>
    </div>
    <div className=''>
    <Routes>
               
                     <Route path="/Management" exact element={<Analystics/>}></Route>
                

           </Routes>    
    </div>
</div>
 </div>
   </div>
  )
}
