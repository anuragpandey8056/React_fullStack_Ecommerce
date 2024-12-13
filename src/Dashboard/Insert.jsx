import { useState, useEffect } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "@material-tailwind/react";
import { message } from 'antd';



const Insert = () => {
    const [input , setinput]=useState({});
    const HandleInput=(e)=>{
      let name = e.target.name;
      let value= e.target.value;
      setinput(values=>({...values,[name]:value}))
      console.log(input);
    }

    const HandleSubmit=()=>{
      let api = "https://react-jsonserver.onrender.com/shop"
      axios.post(api,input).then((resp)=>{
      message.success("Product Succesfully save!!!");
      })
      
    }

    return (
        <>
            <div className="form-container">
               
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={input.name} type="text" onChange={HandleInput} placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" value={input.price} onChange={HandleInput} placeholder="Enter Price" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={input.description}  onChange={HandleInput} placeholder="Enter Description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUrl">
                        <Form.Label>URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                URL
                            </InputGroup.Text>
                            <Form.Control onChange={HandleInput} name="image" value={input.image}  id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHoverUrl">
                        <Form.Label>Hover URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                URL
                            </InputGroup.Text>
                            <Form.Control name="hoverimage" value={input.hoverimage}  onChange={HandleInput} id="hover-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Form.Group>


                    <Button onClick={HandleSubmit} style={{ borderRadius: "40px", padding: "10px 40px", backgroundColor: "limegreen", color: "black", }}>Add data</Button>

          
            </div>
        </>
    );
};

export default Insert;
