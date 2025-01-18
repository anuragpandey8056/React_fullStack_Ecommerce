import { useSelector, useDispatch } from "react-redux";
import { qntyInc, qntyDec,ItemRemove } from "../Slice";
import Table from 'react-bootstrap/Table';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


import { Button } from "@material-tailwind/react";



import Form from 'react-bootstrap/Form';

import { GiNotebook } from "react-icons/gi";


import { FaGooglePay } from "react-icons/fa";
import { useEffect, useState } from "react";



const Mycart = () => {
    
    const dispatch = useDispatch()
    const navigate=useNavigate();
    const mydata = useSelector(state => state.mycart.cart);
    const itemremove = useSelector(state => state.mycart.ItemRemove);

    console.log(mydata);

    const Incre = (id) => {
        dispatch(qntyInc({ id: id }))
    }

    const Decre = (id) => {

        dispatch(qntyDec({ id: id }))
    }
    
    const check=(amt)=>{
        navigate(`/checkout/${amt}`);
    }

    const RemoveItem=(id)=>{
        dispatch(ItemRemove({ id:id }));
    }
    
    
    
    
    
    
    
    
    

    
    
    
    
    let total = 0;

    const data = mydata.map((key) => {
        total = total + key.price * key.qnty;        
        return (
            <>
                <tr id="carttr1"  >

                    <td id="carttd1" >
                        <img src={key.image} width="fit-content"  alt="Energic QuantumGlide Z3" />
                    </td>
                    <td style={{ backgroundColor: "#1b1b1b", color: "white", border: "none" }}>
                        <div>{key.name}</div>
                        <div className="price"></div>
                        <div  className="color">{key.description}</div>
                        <div className="power">Power: 350W</div>
                    </td>
                    
                    <td style={{ backgroundColor: "#1b1b1b", color: "white", border: "none" }}>
                        <div className="quantity-container">
                            <button className="quantity-btn" style={{ marginRight: "10px" }} onClick={() => { Decre(key.id) }} ><FaMinus /></button>
                            <span className="quantity">{key.qnty}</span>
                            <button className="quantity-btn" style={{ marginLeft: "10px" }} onClick={() => { Incre(key.id) }}><FaPlus /></button>
                        </div>
                    </td>
                    <td style={{ backgroundColor: "#1b1b1b", color: "white", border: "none" }}>
                        <button onClick={()=>{RemoveItem(key.id)}} style={{textDecoration:"none",color:"white",cursor:"pointer"}} >Remove</button>
                    </td>
                    <td style={{ backgroundColor: "#1b1b1b", color: "white", border: "none" }}>
                        <p className="total">: Rs. {key.price * key.qnty}</p>

                    </td>
                </tr>


            </>
        );
    });


    return (
        <>

            <div id="carddiv1" >
                <div id="carddiv2">
                    <div id="carddiv3"  >
                        <div id="carddiv4">product</div>
                        <div id="smecardidv" >quantity</div>
                        <div id="smecardidv" >price</div>
                    </div>
                    <Table striped bordered hover className="table" style={{ backgroundColor: "#1b1b1b", border: "none" }}>
                        <tbody >

                            {data}

                        </tbody>
                    </Table>
                    <center>
                        <button className="continue-btn">Continue shopping</button>
                    </center>
                </div>


                <div id="carddiv5" >
                    <div style={{ color: "white" }}>
                        <GiNotebook style={{ color: "green" }} />
                        <Form.Group className="mb-3"   >
                            <Form.Label>Add note</Form.Label>
                            <Form.Control id="cardformcntrl"  placeholder="write note here" disabled />
                        </Form.Group>
                    </div>
                    <div>
                        <div id="carddiv6">
                            <div id="carddiv7" >
                                subtotal:</div>
                            <div>
                                Rs {total}
                            </div>
                        </div>
                        <div id="carddiv8">Tax included and shipping calculated at <br />checkout</div>

                        <div >

                            <div id="carddiv9"  >
                                <Button id="carddivbutton" onClick={()=>{check(total)}} > <center>Checkout</center>  </Button>

                            </div>
                            <div>
                                <Button id="carddivbutton2">< FaGooglePay  style={{ fontSize: "50px", }} /></Button>

                            </div>
                        </div>

                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Mycart;