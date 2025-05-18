import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link ,useNavigate,useParams} from 'react-router-dom';

export default function Read() {


const{id}=useParams();
    const navigate=useNavigate()
    const [Data,setdata]=useState([]);
    const url="https://example-data.draftbit.com/users/";
    
    useEffect(()=>{
        axios.get(url+id).then((response) => {
            setdata(response.data)

            console.log(response.data)
          }).catch(err=>console.log(err));

        }, []);

    return (
        <div className='container'>
            <h1>Read Item {Data.id}</h1>
      <div className='container p-5'>
         <p>{Data.id}</p>
        <p>{Data.firstName}</p>
        {/* <button className='btn btn-primary' onClick={navigate('./TestCrud')}>Lista</button> */}
      </div>
       
      

  
        </div>
      )
}
