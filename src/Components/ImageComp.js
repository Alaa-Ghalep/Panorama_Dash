import axios from 'axios';
import React, { useState } from 'react'

export default function ImageComp() {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [image,setImage]=useState('');

const [obj,setObj]=useState([title,author,image]);

    const formData=new FormData();
    formData.append('title',title);
    formData.append('authors',author);
    formData.append('image_url',image);
async function addProduct(e){
    e.preventDefault();

    console.warn(title,author,image);
 await   fetch("https://example-data.draftbit.com/books",
    {
        method:'POST',
            body:obj

    });
    alert("Data Added Succesfully");
}
    function handelSubmit(event){
        event.preventDefault();
                // axios.post('https://example-data.draftbit.com/books',formData)
                // .then(res=>{
                //     alert("Data Added Succesfully");
                // });
              
        console.log("done");
            }
  return (
    <div>
        <form onSubmit={addProduct}>
        <div class="mb-3">
    <label class="form-label">Title</label>
    <input type="text" class="form-control" 
    onChange={e=>setTitle(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Auther</label>
    <input type="text" class="form-control"
     onChange={e=>setAuthor(e.target.value)}/>
  </div>
        <div class="mb-3">
    <label  class="form-label">Upload Image</label>
    <input type="file" class="form-control"
      onChange={e=>setImage(e.target.files[0])}
     />
<button className='btn btn-primary' type='submit'>Submit</button>
  </div>
</form>
    </div>
  )
}
