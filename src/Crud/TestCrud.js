import {React, useEffect,useState } from 'react'
import axios from'axios';
import { Link,useNavigate } from 'react-router-dom';

export default function TestCrud() {

  const navigate=useNavigate()

    const url="https://example-data.draftbit.com/users/";
    const [items,setItems]=useState([]);
    
    useEffect(()=>{
        axios.get(url).then((response) => {
            setItems(response.data);

            console.log(response.data)
          });

        }, []);


function handelDelete(id)
{
 const confirm= window.confirm(`Would You Like Delete This Item ID=${id} ?`)
 if(confirm){ axios.delete(url+id)
  .then((response) => {
    console.log("Recored Dedleted!.");
  });
  navigate('/TestCrud')

}
}




  return (
    <div className='container mt-5'>
       <Link to='./Add'><button className='btn shadow-none px-4' style={{backgroundColor:'#000',color:'#fff'}}>Create</button></Link>
      <div className='row'>
            
            <table class="table table-borderless text-white border-bottom">
      <thead>
    <tr className='border-bottom'>
      {/* <th scope="col">Customer name</th> */}
      <th scope="col">ID</th>
      <th scope="col">First name</th>
      <th scope="col">user name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Country</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>


    </tr>
  </thead>
        <tbody className=''>
       {items.map((data, key) => {
        return (
          <tr scope="row" key={key}>
            {/* <td>{key}</td> */}
            {/* <td scope="row" >{data.fullName}</td> */}
            <td scope="row" >{(data.id)}</td>
            <td scope="row" >{(data.firstName)}</td>

            <td scope="row" >{data.username}</td>
            <td scope="row" >{data.email}</td>
            <td scope="row" >{data.lastName}</td>
            <td><Link to={`/Update/${data.id}`}><button className='btn shadow-none' style={{backgroundColor:'#B8FFC4',color:'#0A851E'}}>Update</button></Link></td>
            <td><Link to={`/Read/${data.id}`}><button className='btn btn-primary shadow-none'>Read</button></Link></td>
            <td><button className='btn shadow-none ' style={{backgroundColor:'red',color:'#fff'}}onClick={e=>handelDelete(data.id)}>Delete</button></td>
          </tr>
        );
      })
    }
    
</tbody>
</table>
            </div>
    </div>
  )
}
