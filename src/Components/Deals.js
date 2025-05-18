import {React, useEffect,useState ,} from 'react'
import axios from'axios';
import { Link ,useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router'
import refresh from '../Images/refresh.png';
export default function Deals() {
 
const url="https://example-data.draftbit.com/books";
const [items,setItems]=useState([]);
 const location = useLocation();
     const navigate=useNavigate()
 
function getAll(){
  axios.get(url).then((response) => {
    setItems(response.data);
    console.log(response.data)
  });
}
function Refresh(){
  getAll();
  alert("Page Refreshed Succesfully..");
}
    useEffect(()=>{
      getAll();
    },[]);
    
    const handleDelete=(id)=>{
const confirm =window.confirm(`Would you like to Delete this item ${id}?`);
if(confirm){
  axios.delete('https://example-data.draftbit.com/books/'+id)
  .then(res=>{
    alert("Data Deleted Succesfully");
    location.reload();
  }).catch(err=>console.log(err));
          navigate('/Deals');

}
    }
  return (
    <div>
      <div className='container-fluid'>
        <div className='container'>
        <div className=' px-3' style={{backgroundColor:'#62657E',borderRadius:20}}>
     <div className='d-md-flex pt-4 mb-4' style={{justifyContent:'space-between'}}>
   <div>
<h3 className='text-white '>Deals</h3>

</div>
      <p className='text-white'>Items:{items.length}</p>

     <div className='d-md-flex'>

          <div className='px-4 d-flex mb-3' 
           style={{backgroundColor:'#787C96',borderRadius:22,marginRight:10}}>
        <div className='my-auto '><img style={{width:25}}  onClick={()=>Refresh()} src={refresh}/></div>
          </div>
          <div>
          <Link className='btn px-4 mb-3' to='/Add'  style={{backgroundColor:'#EAEDFF',borderRadius:19,color:'#62657E'}}>+ Add Deal</Link>
          </div> 
          </div>
     </div>
     <div className='table-responsive'>
        <table class="table table-borderless text-white border-bottom">
      <thead>
    <tr className='border-bottom'>
      <th scope="col">Deal ID</th>
      <th scope="col">Deal Owner</th>
      <th scope="col">Amount</th>
      <th scope="col">Deal Closet At</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
        <tbody>
      {items.map((data, key) => {
        return (
          <tr scope="row" key={key}>
            <td>{data.id}</td>
            <td scope="row" >
                <div className='d-flex'>
                  {/* <img className='pe-5'  style={{width:20,borderRadius:50}} src={data.image_url}/>  */}
                <div className='ps-5'>  {data.title}</div>
                   </div></td>
                  <td scope="row" >$ {data.rating}</td>
                  <td scope="row" >{data.rating_count}</td>
                  <td scope='row'>
                    <Link to={`/Update/${data.id}`}><button className='btn bg-success text-white'>Edit</button></Link></td>
                  <td scope='row'><button onClick={e=>handleDelete(data.id)} className='btn bg-danger text-white'>Delete</button></td>

          </tr>
        );
      })}
</tbody>
</table>
  </div>

            </div>
        </div>
      </div>
    </div>
  )
}
