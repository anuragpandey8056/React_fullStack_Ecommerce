import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Display=()=>{
    const navigate=useNavigate();
    const [data, setdata] = useState([]);

    const loaddata = () => {
        let api = "http://localhost:3000/shop";
        axios.get(api).then((resp) => {
            setdata(resp.data);
        });
    };

    useEffect(() => {
        loaddata();
    }, []);

    const Del=(id)=>{
      let url = `http://localhost:3000/shop/${id}`
      axios.delete(url).then((resp)=>{
        console.log(resp)
        message.error("data deleted ")
        loaddata();
      })
    }

    const Editdata=(id)=>{
        navigate(`/dashboard/editrec/${id}`);
    }

    const ans = data.map((key) => {
        return (
            <tr >
                <td style={{ paddingLeft: "60px",paddingRight: "60px" }}>{key.id}</td>
                <td style={{paddingLeft: "60px",paddingRight: "60px" }}><img src={key.image} width={"100px"} alt="" /></td>
                <td style={{ paddingLeft: "60px",paddingRight: "60px" }}>{key.name}</td>
                <td style={{paddingLeft: "60px",paddingRight: "60px" }}>{key.description}</td> 
                <td style={{paddingLeft: "60px",paddingRight: "60px" }}>{key.price}</td> 

                <td style={{paddingLeft: "60px",paddingRight: "60px" }}> <a style={{ cursor: "pointer" }} onClick={()=>{Editdata(key.id)}}><FaUserEdit style={{color:"pink",fontSize:"28px"}} /></a></td>    
                <td style={{paddingLeft: "60px",paddingRight: "60px" }}> <a onClick={()=>{Del(key.id)}} href=""><MdDelete style={{color:"pink",fontSize:"28px"}} /></a></td>    

            </tr>
        );
    });
    return(
        <>
         <Table striped bordered hover variant="dark" responsive style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>NAME</th>
                        <th>Description</th>
                        <th>Price</th>

                        <th>Edit</th>
                        <th>Delete</th>

                      
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </Table>
        
        
        
        </>
    )
}
export default Display;