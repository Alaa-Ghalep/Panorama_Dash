import {React, useEffect,useState } from 'react'
import person from'../Images/persone.png';
import poeple from'../Images/people.png';
import pc from'../Images/pc.png';
import phone from'../Images/phone.png';
import search from'../Images/search.png';

import axios from'axios';
export default function Managment() {
    const url="https://example-data.draftbit.com/users?_limit=10";
    const [text2,settext2]=useState('');
    const [items,setItems]=useState([]);
    
    var text= document.getElementById('inputsearch');
    const[datasource,setDatasource]=useState([]);
    const[tableFiltter,settableFiltter]=useState([]);

    useEffect(()=>{
        axios.get(url).then((response) => {
            setItems(response.data);
            setDatasource(response.data);

            console.log(response.data)
          });

        }, []);
const filterData=(e)=>{
  var text= document.getElementById('inputsearch');
console.log(text.value);
settext2(text);
if(text.value!=""){
  const filterTable=datasource.filter(o=>Object.keys(o).some(k=>String(o[k]).toLocaleLowerCase().includes(text.value.toLocaleLowerCase())));
  settableFiltter([...filterTable]);
}
else{
  text.value=e.target.value;
  setDatasource([...datasource]);}
}

  return (
    <div>
      <div className='container-fluid'>
        <div className='container'>
            <div className='row p-3' style={{backgroundColor:'#62657E',borderRadius:20}}>

                <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                    <div>
                    <div className='d-flex'>
                                <div className='rounded-circle bg-white d-flex justify-content-center my-auto' style={{width:50,height:50,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:32,height:32}} src={person}/>
                                </div>
                                <div style={{marginLeft:10}}>
                                    <p className=' text-white'>Total Customer</p>
                               <p className='text-white' style={{fontWeight:'bold',fontSize:19}}>3,548</p>
                                <p className='text-white'>14% this month</p>
                                </div>
                            </div>
                    </div>
                </div>

                <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                    <div>
                    <div className='d-flex'>
                                <div className='rounded-circle bg-white d-flex justify-content-center my-auto' style={{width:50,height:50,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:32,height:32}} src={poeple}/>
                                </div>
                                <div style={{marginLeft:10}}>
                                    <p className=' text-white'>Members</p>
                               <p  className='text-white' style={{fontWeight:'bold',fontSize:19}}>1,320</p>
                                <p className='text-white'>1% this month</p>
                                </div>
                            </div>
                    </div>
                </div>


                <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                    <div>
                    <div className='d-flex'>
                                <div className='rounded-circle bg-white d-flex justify-content-center my-auto' style={{width:50,height:50,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:32,height:32}} src={pc}/>
                                </div>
                                <div style={{marginLeft:10}}>
                                    <p className=' text-white'>TActive Now</p>
                               <p   className='text-white' style={{fontWeight:'bold',fontSize:19}}>350</p>
                                <p className='text-white'>14% this month</p>
                                </div>
                            </div>
                    </div>
                </div>


                <div className='col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                    <div>
                    <div className='d-flex'>
                                <div className='rounded-circle bg-white d-flex justify-content-center my-auto' style={{width:50,height:50,verticalAlign:'center'}}>
                                    <img className='my-auto' style={{width:32,height:32}} src={phone}/>
                                </div>
                                <div style={{marginLeft:10}}>
                                    <p className=' text-white'>Inbound Calls</p>
                               <p  className='text-white' style={{fontWeight:'bold',fontSize:19}}>1,847</p>
                                <p className='text-white'>8% this month</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>   
            <div  className='px-3 mt-4' style={{backgroundColor:'#62657E',borderRadius:20}}>
            <div className='d-md-flex pt-4 mb-3' style={{justifyContent:'space-between',}}>
                <div>
                 <h3 className='text-white mb-3'>All Customers</h3>
                <p style={{color:'#D0FCD7'}}>Active members</p>
                </div>
                <div>
                <form className="form-inline mr-auto w-100 navbar-search " >
                      <div className="input-group">
                       
                 
                           <input type="search" className="form-control input-search  border-0  shadow-none w-100"
                           style={{borderRadius:20,backgroundColor:'#787C96',color:'#fff',paddingLeft:40}}
                          placeholder="Search ..." 
                          id="inputsearch"                       
                          onChange={filterData} />
                           <img src={search} className="search"/>
                              </div>
                                  </form>
                </div>
                </div>
         
            <div className='row'>
            <div className='table-responsive'> 
       <table class="table table-borderless text-white border-bottom">
      <thead>
    <tr className='border-bottom'>
      <th scope="col">Customer name</th>
      <th scope="col">Company</th>
      <th scope="col">Phone Number</th>
      <th scope="col">E-mail</th>
      <th scope="col">Country</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
        <tbody className=''>
        {text2 !="" ?tableFiltter.map((data, key) => {
        return (
          <tr scope="row" key={key}>
            {/* <td>{key}</td> */}
            <td scope="row" >{data.fullName}</td>
            <td scope="row" >{(data.firstName).toString().substring(0, 20)}</td>
            <td scope="row" >{data.phone}</td>
            <td scope="row" >{data.email}</td>
            <td scope="row" >{data.lastName}</td>
            <td><button className='btn ' style={{backgroundColor:'#B8FFC4',color:'#0A851E'}}>Active</button></td>
          </tr>
        );
      })
      :
      datasource.map((data, key) => {
        return (
          <tr scope="row" key={key}>
            {/* <td>{key}</td> */}
            <td scope="row" >{data.fullName}</td>
            <td scope="row" >{(data.firstName).toString().substring(0, 20)}</td>
            <td scope="row" >{data.phone}</td>
            <td scope="row" >{data.email}</td>
            <td scope="row" >{data.lastName}</td>
            <td><button className='btn ' style={{backgroundColor:'#B8FFC4',color:'#0A851E'}}>Active</button></td>
          </tr>
        );
      })
    }
</tbody>
</table>
</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
