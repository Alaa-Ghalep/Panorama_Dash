import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link ,useNavigate,useParams} from 'react-router-dom';
import { useLocation } from 'react-router';

export default function Update() {
 const location = useLocation();


const{id}=useParams();
    const navigate=useNavigate()
    const [inputData,setinputData]=useState({
      title:'',
      rating:'',
      rating_count:'',
     });
  

    const url="https://example-data.draftbit.com/books/";
    
    useEffect(()=>{
        axios.get(url+id).then((response) => {
            setinputData(response.data)

            console.log(response.data)
          }).catch(err=>console.log(err));

        }, []);

const handelSubmit=(event)=>{
  event.preventDefault();
  axios.put('https://example-data.draftbit.com/books/'+id,inputData)
          .then(res=>{
              alert("Data Updated Succesfully");
               location.reload();
 
          });
          // navigate('/TestCrud')
          navigate('/Deals')

}














    return (
        <div className="container">
          <form onSubmit={handelSubmit}>
    

    
          <div class="mb-3 w-50">
        <label  class="form-label text-white">ID</label>
        <input type="text" readOnly="true" name="id" class="form-control shadow-none border-0 text-white" value={inputData.id}
       style={{backgroundColor:'#8587A0',outline:'0'}}/>
      </div>
    
          <div class="mb-3 w-50">
        <label  class="form-label text-white">Title</label>
        <input type="text" name="title" class="form-control shadow-none border-0 text-white" value={inputData.title}
        onChange={e=>setinputData({...inputData,title:e.target.value})}
         style={{backgroundColor:'#8587A0',outline:'0'}}/>
      </div>
    
    
          <div class="mb-3 w-50">
        <label class="form-label text-white">Rating</label>
        <input type="number" name="rating" class="form-control shadow-none border-0 text-white" value={inputData.rating}
        onChange={e=>setinputData({...inputData,rating:e.target.value})}
         style={{backgroundColor:'#8587A0',outline:'0'}}/>
      </div>
    
    
    
      <div class="mb-3 w-50">
        <label  class="form-label text-white">rating_count</label>
        <input type="number" name="rating_count" class="form-control shadow-none border-0 text-white" value={inputData.rating_count}
         onChange={e=>setinputData({...inputData,rating_count:e.target.value})}
          style={{backgroundColor:'#8587A0',outline:'0'}}/>
      </div>
    
      <button type="submit" class="btn btn-primary shadow-none">Update</button>
     
    </form>
        </div>
      )
}
