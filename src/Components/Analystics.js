import React from 'react'
import sales from'../Images/sales.png';
import view from'../Images/view.png';
import streamline from'../Images/streamline.png';
import seam from'../Images/seam.png';
import vector from'../Images/Vector.png';
import map from'../Images/Map.png';
import ChartrBar2 from '../Charts/ChartBar2';
import ChartGeo from '../Charts/ChartGeo';


export default function Analystics() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='container'style={{backgroundColor:'#62657E',borderRadius:20}}>
        <div className='p-3'>
           <h3 className='text-white'>Sales Estimation</h3>

           </div>
            <div className='row pt-2' >
         
            <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                    <div>
                                <div className='rounded-circle bg-white d-flex justify-content-center my-auto ' style={{width:42,height:42,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:24,height:24}} src={sales}/>
                                </div>
                                <div className='mt-2'>
                                    <p className=' text-white'>Net Income</p>
                               <p className='text-white' style={{fontWeight:'bold',fontSize:19}}>$325,648</p>
         <p className='text-white'><span className=''><i class='bx bx-up-arrow-alt'></i></span> 6.22% from last week</p>
                                </div>
                            </div>
                </div>

                <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                    <div>
                    <div className='rounded-circle bg-white d-flex justify-content-center my-auto ' style={{width:42,height:42,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:24,height:24}} src={view}/>
                                </div>
                                <div className='mt-2'>
                                    <p className=' text-white'>Net Income</p>
                               <p className='text-white' style={{fontWeight:'bold',fontSize:19}}>$325,648</p>
         <p className='text-white'><span className=''><i class='bx bx-up-arrow-alt'></i></span> 6.22% from last week</p>
                                </div>
                            </div>
                </div>

                <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                    <div>
                    <div className='rounded-circle bg-white d-flex justify-content-center my-auto ' style={{width:42,height:42,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:24,height:24}} src={streamline}/>
                                </div>
                                <div className='mt-2'>
                                    <p className=' text-white'>Net Income</p>
                               <p className='text-white' style={{fontWeight:'bold',fontSize:19}}>$325,648</p>
         <p className='text-white'><span className=''><i class='bx bx-up-arrow-alt'></i></span> 6.22% from last week</p>
                                </div>
                            </div>
                </div>

                <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                    <div>
                    <div className='rounded-circle bg-white d-flex justify-content-center my-auto ' style={{width:42,height:42,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:24,height:24}} src={seam}/>
                                </div>
                                <div className='mt-2'>
                                    <p className=' text-white'>Net Income</p>
                               <p className='text-white' style={{fontWeight:'bold',fontSize:19}}>$325,648</p>
         <p className='text-white'><span className=''><i class='bx bx-up-arrow-alt'></i></span> 6.22% from last week</p>
                                </div>
                            </div>
                </div>
            </div>
          
        </div>


        <div className='container mt-4'style={{backgroundColor:'#62657E',borderRadius:20}}>
        <div className='p-3'>
           <h3 className='text-white'>Audience Summary</h3>

           </div>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                    <div className='h-100'>
                        {/* <img src={map}/> */}
                        <ChartGeo/>
                    </div>
        
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                    <div>
                        <ChartrBar2/>
                    </div>
                </div>
            </div>
            </div>

      </div>
    </div>
  )
}
