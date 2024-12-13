import Form from 'react-bootstrap/Form';
import { FaLocationDot } from "react-icons/fa6";
import { RiMailOpenFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const Contact = () => {
    return (
        <>
            <section style={{ textAlign: "center", padding: "1rem", backgroundColor: "#1b1b1b" }}>
                <iframe

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.90002902807!2d77.24107900392008!3d23.199323871704177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1732304856791!5m2!1sen!2sin"
                    width="600"
                    height="450"

                    style={{ border: "0", width: "100%" }} // Makes it responsive
                    allowFullScreen=""
                    loading="lazy"

                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>



                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"75px",color:"white"}}>
                    <div>
                        <div><h1>Let's discuss</h1></div>
                        <div style={{marginBottom:"50px"}}>Road: where sustainable driving meets a brighter future! As your trusted <br /> electric vehicle supplier, we're here to revolutionize your journey towards <br /> eco-friendly transportation, leaving pollution behind and welcoming a <br /> cleaner, greener commute. With Crafting Clean Beginnings, you can join <br /> the green movement now and improve the environment.</div>
                        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"40px"}}>
                            <div> <h4>Our Location</h4> <FaLocationDot style={{fontSize:"24px",backgroundColor:"green"}}/>76 Mill Road, Penfield, NY 26</div>
                            <div> <h4> Our Mail Address</h4> <RiMailOpenFill style={{fontSize:"24px",backgroundColor:"green"}}/>supportroad@gmail.com</div>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"40px"}}>
                            <div><h4> Our Phone no</h4>   <FaPhoneAlt style={{fontSize:"24px" ,backgroundColor:"green"}}/>7389834002</div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <Form  >
                            <Form.Group className="mb-3" style={{ width: "400px"}} controlId="exampleForm.ControlInput1">
                                <Form.Control  style={{backgroundColor:"rgb(48, 45, 45) "}}   type="email" placeholder="Name" />
                            </Form.Group>
                            <Form.Group style={{ width: "400px"}} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control  style={{backgroundColor:"rgb(48, 45, 45) "}}   type="email" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group style={{ width: "400px", }} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control  style={{backgroundColor:"rgb(48, 45, 45) "}}   type="email" placeholder="Phone no" />
                            </Form.Group>
                            <Form.Group style={{ width: "400px" }} className="mb-3" controlId="exampleForm.ControlTextarea1">


                                <Form.Control  style={{backgroundColor:"rgb(48, 45, 45) "}}   as="textarea" placeholder='Additonal info' rows={3} />
                            </Form.Group>

                            <Button style={{ borderRadius: "40px", padding: "10px 30px 10px 30px", backgroundColor: "limegreen", color: "black", }}> <center>Send</center>  </Button>

                        </Form>
                    </div>

                </div>











            </section>
        </>
    );
};

export default Contact;
