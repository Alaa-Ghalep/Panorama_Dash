import React from 'react'
import money from'../Images/money.png';
import hand from'../Images/hand.png';
import wallet from'../Images/wallet.png';
import ChartrDoughnut from '../Charts/ChartrDoughnut';
import ChartLine from '../Charts/ChartLine';
import ChartrBar from '../Charts/ChartrBar';
import Products from './Products';

export default function Index() {
  return (
    <div>
      <div className='container-fluid'>
            <div className='row g-5'>
                <div className=' col-lg-9 col-xl-9 col-xxl-9'>
                    <div className='row g-5 py-4' style={{backgroundColor:'#8E6D76',borderRadius:20}}>
                        <div className='col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='d-flex'>
                                <div className='rounded-circle bg-white d-flex justify-content-center my-auto' style={{width:50,height:50,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:32,height:32}} src={money}/>
                                </div>
                                <div style={{marginLeft:10}}>
                                    <p className=' text-white'>Monthly Reveue</p>
                                    <div className='d-flex'>
                                    <p   style={{fontWeight:'bold',color:'#fff',marginRight:10}}>$4.200</p>
                                    <p className='bg-white text-black rounded-pill px-2'>+2.2%</p>
                                </div>
                                <p className='text-white'>Previous month $2.1K</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='d-flex'>
                                <div className='rounded-circle bg-white d-flex justify-content-center my-auto' style={{width:50,height:50,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:32,height:32}} src={hand}/>
                                </div>
                                <div style={{marginLeft:10}}>
                                    <p className=' text-white'>Monthly Sales</p>
                                    <div className='d-flex'>
                                    <p style={{fontWeight:'bold',color:'#fff',marginRight:10}}>$2.100</p>
                                    <p className='bg-white text-black rounded-pill px-2'>+1.2%</p>
                                </div>
                                <p className='text-white'>Previous month $3.1K</p>
                                </div>
                            </div>
                        </div>



                        <div className='col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='d-flex'>
                                <div className='rounded-circle bg-white d-flex justify-content-center my-auto' style={{width:50,height:50,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:32,height:32}} src={wallet}/>
                                </div>
                                <div style={{marginLeft:10}}>
                                    <p className=' text-white'>Total Profit</p>
                                    <div className='d-flex'>
                                    <p style={{fontWeight:'bold',color:'#fff',marginRight:10}}>$10.200</p>
                                    <p className='bg-white text-black rounded-pill px-2'>+2.2%</p>
                                </div>
                                <p className='text-white'>Previous month $2.1K</p>
                                </div>
                            </div>
                        </div>
                    </div>

{/* //////////////////// */}

                        <div className='row mt-4 g-5 py-4 px-2'
                        style={{backgroundColor:'#62657E',borderRadius:20}}>
<div className='col-lg-5'>
    <div className='text-white '>
<h5>Total Sales & Cost</h5>
<p style={{fontSize:15}}>Last 60 days</p>
<div className='d-flex'>
                  <p className='my-auto' style={{fontWeight:'bold',color:'#fff',marginRight:10,fontSize:27}}>
                    $547.53K</p>
                  <p className=' text-black rounded-pill px-2 my-auto' style={{color:'#000',height:22,backgroundColor:'#D0FCD7'}}>+2.2%</p>                  
                                </div>
                                <p>+5.12K vs prev. 60 days</p>
    </div>
    </div>      
    <div className='col-lg-7'>
    <div>
       <ChartrBar/> 
    </div>
    </div>                
      </div>

      <div className='row g-5 mb-4'>


<Products/>
      </div>
                </div>
               
               
               
               
                <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
                    <div>
                    <ChartrDoughnut/>
                    <ChartLine/>

                    </div>
                </div>
            </div>

        
      </div>
    </div>
  )
}
