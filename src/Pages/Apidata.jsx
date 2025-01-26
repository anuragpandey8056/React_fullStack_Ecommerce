import axios from "axios";
import { useState,useEffect } from "react";
const Apidata=()=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(res=>setdata(res.data))
    .catch(err=>console.log(err))
    },[])
    return(
        <>
        
        <h1>Api Data</h1>
        
        <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
       
        <tbody>
            {data.map((key) => (
              <tr key={key.id}>
                <td>{key.id}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.body}</td>
              </tr>
            ))}
        </tbody>
       
       
   
      </table>
    </div>
        
        </>
    )
}
export default  Apidata;