import React, { useState } from 'react';
import './Dashboard.css';
import ehab from'./Images/ehab.png';
import dash from'./Images/dash.png';
import manag from'./Images/manag.png';
import deal from'./Images/deal.png';
import activities from'./Images/activities.png';
import analytics from'./Images/analytics.png';
import support from'./Images/support.png';
import settings from'./Images/settings.png';
import search from'./Images/search.png';
import email from'./Images/email.png';
import selectimg from'./Images/selectimg.png';

import Index from './Components/Index';
// import { useNavigate } from 'react-router-dom';
import Managment from './Components/Managment';
import Analystics from './Components/Analystics';
import Add from './Crud/Add';
import Update from './Crud/Update';



import {Link,  NavLink,  Route, Routes, useNavigate} from "react-router-dom";
import Deals from './Components/Deals';


function Dashboard() {

    const [style, setStyle] = useState("navbar-nav   sidebar sidebar-dark accordion ");

    const changeStyle = () => {
        if (style == "navbar-nav   sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav   sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav   sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav   sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav   sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav   sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper" className='mt-4'>
                    {/*  <!-- Sidebar --> */}
               

                    <ul className={style} id="accordionSidebar" style={{backgroundColor:'#62657E',borderRadius:20}}>

{/*  <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
    <div className="sidebar-brand-icon rotate-n-15">
        {/* <i className="fas fa-laugh-wink"></i> */}
    </div>
    <div className="sidebar-brand-text mx-3">Panorama</div>
    <div className="text-center d-none d-md-inline">
    {/* <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button> */}
</div>
</a>

{/*   <!-- Divider --> */}
{/* <hr className="sidebar-divider my-0 mb-2" /> */}

{/*  <!-- Nav Item - Dashboard --> */}

<li className="nav-item active  link-bg-hover mx-lg-3 ">
    <a className="nav-link" href="/">
            <img className='' src={dash} style={{paddingRight:5}}/>
        <span className='' style={{fontSize:13}}>Dashboard</span></a>
</li>
{/*  <!-- Nav Item - Tables --> */}
 <li className="nav-item  link-bg-hover mx-lg-3" >
    <Link className="nav-link" to="/Management" >
       <img src={manag} style={{paddingRight:5}}/>
        <span style={{ fontSize:13}}>Management</span></Link>
</li>
 <li className="nav-item  link-bg-hover mx-lg-3">
    <Link className="nav-link" to='/Deals'>
    <img src={deal} style={{paddingRight:5}}/>                              
    <span style={{ fontSize:13}}>Deals</span></Link>
</li>
<li className="nav-item  link-bg-hover mx-lg-3">
    <a className="nav-link" href="/">
        <img src={activities} style={{paddingRight:5}}/>                             
        <span style={{ fontSize:13}}>Activities</span></a>
</li>
<li className="nav-item  link-bg-hover mx-lg-3 ">
    <Link className="nav-link" to='/Analystics'>
        <img src={analytics} style={{paddingRight:5}}/>
        <span style={{ fontSize:13}}>Analystics</span></Link>
</li>


</ul>



                    {/* /*=========================================================================*/ }
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light  topbar mb-4 static-top shadow mt-1">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>

                                {/*  <!-- Topbar Search --> */}
                                <div className='d-flex '>
                                    <div>
                                    <img className="img-profile rounded-circle"
                                                src={ehab} style={{margin:10,width:70}}/>  </div>
                                                <div  className="d-none d-lg-inline text-white mt-2">
                                                
                                                <p  style={{fontSize:20,fontWeight:'bold'}}>
                                                Hello Ehab
                                                </p>
                                                <p>Welcome to your Dashboard</p>
                                                    </div>                            
                                </div>
                              

                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">


                       
                                    <li className="nav-item  me-3 mx-1 "
                                    style={{width:40,height:40}}>
                                  
                                        <a className="nav-link d-flex justify-content-center rounded-circle " href="#" style={{verticalAlign:'center',width:44,height:44,backgroundColor:'#62657E'}}>
                                            <img src={email}/>
                                           
                                        </a>
                                          </li>
                                    <li className="nav-item dropdown no-arrow  me-3 mx-3">
                                        <a className="nav-link dropdown-toggle  d-flex justify-content-center  rounded-circle " href="#" id="searchDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                            style={{verticalAlign:'center',width:44,height:44,backgroundColor:'#62657E'}}>
                                            {/* <i className="fas fa-search fa-fw"></i> */}
                                            <img src={search}/>
                                        </a>
                                        {/*   <!-- Dropdown - Messages --> */}
                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input type="search" className="form-control   border-0 small shadow-none w-100
                                                    "   style={{backgroundColor:'#787C96',color:'#fff'}}
                                                        placeholder="Search ..." aria-label="Search"
                                                        aria-describedby="basic-addon2" />
                                                   
                                                </div>
                                            </form>
                                        </div>
                                    </li>

                                    {/*  <!-- Nav Item - Alerts --> */}
                                   

                                 <li>
                <div className='d-flex  ' style={{backgroundColor:'#62657E',borderRadius:24,verticalAlign:'center'}}>
                    <div className='d-flex  justify-content-center'
                    style={{marginRight:88,marginLeft:15,verticalAlign:'center',alignItems:'center'}} >
                     <img  src={ehab} style={{width:30,height:30,marginRight:10}}/>
                    <p className='text-white my-auto'>Ehab</p>
                
                    </div>


      <li className="  no-arrow">
     <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <img style={{paddingRight:10}} src={selectimg}/></a>
                                                            
    <div className="dropdown-menu dropdown-menu-right shadow"
                                            aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                              Edit  Profile
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Settings
                                            </a>
                                         
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </a>
     </div>      
                             {/*  <!-- Dropdown - User Information --> */}
                                    
                                    </li>


                                    </div>
                                 </li>


                                </ul>

                            </nav>
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
              <Routes>
                     <Route path="/" exact element={ <Index/>}></Route>
                     <Route path="/Management" exact element={<Managment/>}></Route>
                    <Route path="/Deals" exact element={<Deals/>}></Route>      
                    <Route path="/Analystics" exact element={<Analystics/>}></Route>      
                    <Route path="/Add" element={<Add/>}></Route>
                    <Route path="/Update/:id" element={<Update/>}></Route>


           </Routes>     
          
                            {/*   <!-- /.container-fluid --> */}

                        </div>
                        {/*   <!-- End of Main Content -->*/}

                      

                    </div>
                    {/*  <!-- End of Content Wrapper --> */}

                </div>
                {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
             

            </body>
        </div>
    )
}

export default Dashboard;
