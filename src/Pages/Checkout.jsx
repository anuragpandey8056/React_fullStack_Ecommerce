
import {
   
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    MDBCardHeader,
    MDBTextArea,
    MDBCheckbox,
} from "mdb-react-ui-kit";
import React from "react";
import { Button } from "@material-tailwind/react";

import { FcAnswers } from "react-icons/fc";

import { useSelector } from "react-redux";
import { useState } from "react";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import Cod from "./Cod";
import InernetBanking from "./InternetBanking";
import CreditDebit from "./creditDebit";
import Upi from "./Upi";






const Checkout = () => {
    const navigate=useNavigate()
    const data = useSelector(state => state.mycart.cart);
    const [productbuy, setproductbuy] = useState("")
    const [paymethod, setpaymethod] = useState("")
    const { amt } = useParams()
    let img;
    let name, qnty;
    
  
    const handlepay = (e) => {
        setpaymethod(e.target.value);

    }
    let ans1;
    if (paymethod == "cash") {
        ans1 = <Cod />
    }
    else if (paymethod == "internet") {
        ans1 = <InernetBanking />
    }
    else if (paymethod == "debit") {
        ans1 = <CreditDebit />
    }
    else if (paymethod == "upi") {
        ans1 = <Upi />
    }




    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setproductbuy((values) => ({ ...values, [name]: value, }))
        console.log(productbuy)

    }

    const HandleSubmit = () => {
        const finalFormData = {
            ...productbuy,
            amount: amt,
            image: img,
            productname: name,
            qnty: quantity,
            ModofPayment:paymethod
        };


        let url = "https://react-jsonserver.onrender.com/OrderPlaced";
        axios.post(url, finalFormData).then((resp) => {
            console.log(resp)
            



        })

        navigate("/paymentdone")

        

    }

    const cartlen = data.length;
    let quantity;

    const ans = data.map((key) => {
        quantity = key.qnty;
        img = key.image;
        name = key.name
        return (
            <>



                <MDBCardBody style={{ backgroundColor: "#1b1b1b", color: "white", }} >
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div>
                                <MDBCardImage
                                    src={key.image}
                                    fluid className="rounded-3" style={{ width: "65px" }}
                                    alt="Shopping item" />
                            </div>
                            <div className="ms-3">
                                <MDBTypography tag="h5">
                                    {key.name}
                                </MDBTypography>
                                <p className="small mb-0">{key.description}</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                                <MDBTypography tag="h5" className="fw-normal mb-0">
                                    {key.qnty}
                                </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                    {key.price}
                                </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                                <MDBIcon fas icon="trash-alt" />
                            </a>
                        </div>
                    </div>
                </MDBCardBody>









            </>
        )
    })

    return (
        <>

            <section className="h-100 h-custom" style={{ backgroundColor: "#1b1b1b", minHeight: "100vh" }}>
                <MDBContainer className="py-5 " style={{
                    backgroundColor: "#1b1b1b",
                    minHeight: "100vh",
                }} >
                    <MDBRow style={{ backgroundColor: "#1b1b1b" }} className="justify-content-center align-items-center h-100">
                        <MDBCol >
                            <MDBCard style={{ backgroundColor: "#1b1b1b", color: "white" }}>
                                <MDBCardBody className="p-4">
                                    <MDBRow>
                                        <MDBCol lg="7">
                                            <MDBTypography tag="h5">
                                                <a href="#!" className="text-body">
                                                    <MDBIcon fas icon="long-arrow-alt-left me-2" />

                                                </a>
                                            </MDBTypography>



                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>


                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have {cartlen} items in your cart</p>
                                                </div>
                                                <div>
                                                    <p >
                                                        <span className="text-muted">Sort by:</span>
                                                        <a href="#!" className="text-body">
                                                            price
                                                            <MDBIcon fas icon="angle-down mt-1" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>

                                            <MDBCard style={{ border: "none" }} className="mb-3">
                                                {ans}
                                            </MDBCard>




                                            <MDBCard className="mb-4" style={{ backgroundColor: "#1b1b1b", color: "white" }}  >
                                                <MDBCardHeader className="py-3">
                                                    <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">Delivery address</MDBTypography>
                                                </MDBCardHeader>
                                                <MDBCardBody>
                                                    <form>
                                                        <MDBRow className="mb-4">
                                                            <MDBCol>
                                                                <MDBInput label='First name' type='text' name="first_name" onChange={handleInput} />
                                                            </MDBCol>
                                                            <MDBCol>
                                                                <MDBInput label='Last name' type='text' name="Last_name" onChange={handleInput} />
                                                            </MDBCol>
                                                        </MDBRow>


                                                        <MDBInput label='Address' type='text' className="mb-4" name="address" onChange={handleInput} />
                                                        <MDBInput label='Email' type='text' className="mb-4" name='email' onChange={handleInput} />
                                                        <MDBInput label='Phone' type='text' className="mb-4" name='Phone' onChange={handleInput} />
                                                        <MDBTextArea label='Additional information' rows={4} className="mb-4" name="additional_info" onChange={handleInput} />

                                                        <div className="d-flex justify-content-center">
                                                            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                                                        </div>
                                                    </form>
                                                </MDBCardBody>
                                            </MDBCard>
                                            
                                


                                        </MDBCol>
                                      



                                        <MDBCol lg="3" className="d-flex flex-column align-items-center">
                                            <MDBCard className="text-black rounded-3 p-3" style={{ border: "none", width: "100%", backgroundColor: "#1b1b1b", color: "white" }}>
                                                <h5 style={{ color: "white" }} className="mb-3 text-uppercase text-center">Payment Method</h5>
                                                <div style={{ backgroundColor: "#1b1b1b", color: "white" }} id="radioStyle" className="d-flex flex-column gap-3">
                                                    <label className="d-flex align-items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="paymethod"
                                                            value="cash"
                                                            onChange={handlepay}
                                                            className="form-check-input"
                                                        />
                                                        Cash on Delivery
                                                    </label>
                                                    <label className="d-flex align-items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="paymethod"
                                                            value="internet"
                                                            onChange={handlepay}
                                                            className="form-check-input"
                                                        />
                                                        Internet Banking
                                                    </label>
                                                    <label className="d-flex align-items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="paymethod"
                                                            value="debit"
                                                            onChange={handlepay}
                                                            className="form-check-input"
                                                        />
                                                        Debit/Credit Card
                                                    </label>
                                                    <label className="d-flex align-items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="paymethod"
                                                            value="upi"
                                                            onChange={handlepay}
                                                            className="form-check-input"
                                                        />
                                                        UPI/Phone Pay
                                                    </label>
                                                </div>
                                                

                                                <div className="mt-4">
                                                    {ans1}



                                                </div>
                                                <div className="text-center">
                                                <Button onClick={HandleSubmit} style={{  backgroundColor: "limegreen", color: "black",margin:"15px" }}> <center>Place order</center>  </Button>

                                                </div>

                                                <div style={{display:"flex",justifyContent:"space-around",marginTop:"70px",color:"white"}}>
                                                    <h5>SubTotal(Incl. taxes):</h5>
                                                    <h5>Rs{amt}</h5>
                                                </div>
                                                
                                            </MDBCard>
                                        </MDBCol>

                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>





        </>
    )
}
export default Checkout;
