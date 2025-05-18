

import axios from 'axios';
import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router';

export default function Add() {
  const navigate=useNavigate();
   const location = useLocation();

    const [inputData,setinputData]=useState({
      title:'',
      rating:'',
      rating_count:'',
     });
    const formData=new FormData();
    formData.append('image',inputData.image);


const handelSubmit=(event)=>{
  event.preventDefault();
  axios.post('https://example-data.draftbit.com/books/',inputData)
          .then(res=>{
              alert("Data Added Succesfully");
               location.reload();

          });
          navigate('/Deals')
}

  return (
    <div classNAme="container-fluid">
      <div className='container'>
        <div className='mx-auto'>
  <form onSubmit={handelSubmit}autocomplete="off">


      <div class="mb-3 w-50">
    <label  class="form-label text-white fw-bold">Title</label>
    <input type="text" name="title" class="form-control shadow-none border-0 text-white" style={{backgroundColor:'#8587A0',outline:'0'}}
    onChange={e=>setinputData({...inputData,title:e.target.value})}/>
  </div>


      <div class="mb-3 w-50">
    <label class="form-label text-white">Rating</label>
    <input type="number" name="rating"  class="form-control shadow-none border-0 text-white" style={{backgroundColor:'#8587A0',outline:'0'}}
    onChange={e=>setinputData({...inputData,rating:e.target.value})}/>
  </div>


  <div class="mb-3 w-50">
    <label  class="form-label text-white">Rating Count</label>
    <input type="number" name="rating_count"  class="form-control shadow-none border-0 text-white" style={{backgroundColor:'#8587A0',outline:'0'}}
     onChange={e=>setinputData({...inputData,rating_count:e.target.value})}/>
  </div>


  <button type="submit" class="btn text-white fw-bold mx-3 me-3 mb-3 shadow-none"
  style={{backgroundColor:'rgb(142, 109, 118)'}}>Submit</button>
  <Link to='/Deals'>
  <button type="button" class="btn bg-white fw-bold mx-3 me-3  mb-3 shadow-none">Back to Deals</button></Link>
</form>
        </div>
      </div>
    
    </div>
  )
}








