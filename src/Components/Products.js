import {React, useEffect,useState } from 'react'
import axios from'axios';
import search from'../Images/search.png';

export default function Products() {
const url="https://example-data.draftbit.com/books?_limit=10";
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
  // settext(e.target.value);
  text.value=e.target.value;
  setDatasource([...datasource]);}
}


  return (
    <div className='mt-4 w-100 px-3' style={{backgroundColor:'#62657E',borderRadius:20}}>
      <div className='d-md-flex pt-4' style={{justifyContent:'space-between'}}>
        <div><h3 className='text-white' style={{fontWeight:'bold'}}>Product Sell</h3></div>
        <p className='text-white'>Items:{items.length}</p>
        <div className='d-flex mb-4'>
        <form className="form-inline mr-auto w-100 navbar-search " >
                      <div className="input-group">
                        <img src={search} className="search"/>
                 
                           <input type="search" className="form-control input-search  border-0  shadow-none w-100"
                           style={{borderRadius:20,backgroundColor:'#787C96',color:'#fff',paddingLeft:40}}
                          placeholder="Search ..."  id="inputsearch"
                         
                          onChange={filterData}/>
                              </div>
                              
                                  </form>
                               
        </div>
      </div>
      <div className='table-responsive'>
      <table class="table table-borderless text-white">
      <thead>
    <tr className='border-bottom'>
      <th scope="col">Product Image</th>
      <th scope="col">Product name</th>
      <th scope="col">In Stock</th>
      <th scope="col">Price</th>
      <th scope="col">Total Sales</th>
    </tr>
  </thead>
        <tbody>
      {text2 !="" ?tableFiltter.map((data, key) => {
        return (
          <tr scope="row" key={key}>
            {/* <td>{key}</td> */}
            <td scope="row" ><img  style={{width:50,borderRadius:15}} src={data.image_url}/></td>
            <td scope="row" >{(data.title).toString().substring(0, 20)}</td>
            <td scope="row" >{data.num_pages}</td>
            <td scope="row" >$ {data.rating}</td>
            <td scope="row" >{data.rating_count}</td>
          </tr>
        );
      })
    :
    datasource.map((data, key) => {
      return (
        <tr scope="row" key={key}>
          {/* <td>{key}</td> */}
          <td scope="row" ><img  style={{width:50,borderRadius:15}} src={data.image_url}/></td>
          <td scope="row" >{(data.title).toString().substring(0, 20)}</td>
          <td scope="row" >{data.num_pages}</td>
          <td scope="row" >$ {data.rating}</td>
          <td scope="row" >{data.rating_count}</td>
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
