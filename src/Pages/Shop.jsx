import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Button } from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";
import { addtoCart } from "../Slice";
import { useDispatch, useSelector } from "react-redux";
import { FaFilter } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa6";




import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const Shop = () => {
    const [lowPrice, setLowPrice]=useState("");
    const [highPrice, setHighPrice]=useState("");
    const [showFilter, setShowFilter]=useState(true);
    


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const [mydata, setmydata] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [hoverStates, setHoverStates] = useState({});
    const loaddata = () => {
        let api = "https://react-jsonserver.onrender.com/shop";
        axios.get(api).then((res) => {
            setmydata(res.data)

            const initialHoverStates = res.data.reduce((acc, item) => {
                acc[item.id] = item.image; // Default to original image
                return acc;
            }, {});
            setHoverStates(initialHoverStates);

        })

    }

    const showdata=()=>{
        let api ="http://localhost:3000/shop";
        axios.get(api).then((res)=>{
            setShowFilter(false);
            setmydata(res.data);
           
            

        })
    }

    useEffect(() => {
        loaddata();
    }, [])

    useEffect(()=>{
        if(lowPrice=="" && highPrice==""){
            setShowFilter(true);
        }

    })



    const handleMouseEnter = (id, hoverImage) => {
        setHoverStates((prevStates) => ({
            ...prevStates,
            [id]: hoverImage,
        }));
    };

    const handleMouseLeave = (id, originalImage) => {
        setHoverStates((prevStates) => ({
            ...prevStates,
            [id]: originalImage,
        }));
    };

    const cartdata = (id, myname, price, desc, img) => {
        dispatch(addtoCart({ id: id, name: myname, price: price, description: desc, image: img, qnty: 1 }))

    }



    const ProductDetail = (id) => {
        navigate(`productdetail/${id}`)
    }
    const ans = mydata.map((key) => {

        return (
            <>


                <Card
                    className="shadow-lg"
                    key={key.id}
                    id="shopcard"


                    onMouseEnter={() => handleMouseEnter(key.id, key.hoverimage)}
                    onMouseLeave={() => handleMouseLeave(key.id, key.image)}
                >
                    <Card.Img variant="top" onClick={() => { ProductDetail(key.id) }} src={hoverStates[key.id]} />
                    <Card.Body id="shopidbody" >
                        <Card.Title id="shopcardtitle" >
                            <div> {key.name}</div>
                            <div>
                                <Button onClick={() => { cartdata(key.id, key.name, key.price, key.description, key.image) }} id="btn" style={{ borderRadius: "40px", padding: "10px 40px", border: "1px solid #ccc", backgroundColor: "black" }}>Buy now</Button>

                            </div>
                        </Card.Title>
                        <Card.Text style={{ fontSize: "20px" }}>
                            {key.description}    &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;<FaRupeeSign />{key.price}
                        </Card.Text>

                        <div id="shopicon" >
                            <div>
                                <img
                                    src="https://greenshift-road.myshopify.com/cdn/shop/files/Emission-icon.svg?v=1694095411"
                                    alt="Duration Icon"
                                />
                                <div>
                                    Duration <br />
                                    6 hrs
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://greenshift-road.myshopify.com/cdn/shop/files/Range-icon.svg?v=1694093594"
                                    alt="Range Icon"
                                />
                                <div>
                                    Range <br />
                                    126 km
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://greenshift-road.myshopify.com/cdn/shop/files/Battery-icon.svg?v=1694093243"
                                    alt="Battery Icon"
                                />
                                <div>
                                    Battery <br />
                                    77 kWh
                                </div>
                            </div>
                        </div>


                    </Card.Body>


                </Card>




            </>
        )
    })
    const ans1 = mydata.map((key) => {
        if (key.price>=lowPrice && key.price<=highPrice){
        return (
            <>


                <Card
                    className="shadow-lg"
                    key={key.id}
                    id="shopcard"


                    onMouseEnter={() => handleMouseEnter(key.id, key.hoverimage)}
                    onMouseLeave={() => handleMouseLeave(key.id, key.image)}
                >
                    <Card.Img variant="top" onClick={() => { ProductDetail(key.id) }} src={hoverStates[key.id]} />
                    <Card.Body id="shopidbody" >
                        <Card.Title id="shopcardtitle" >
                            <div> {key.name}</div>
                            <div>
                                <Button onClick={() => { cartdata(key.id, key.name, key.price, key.description, key.image) }} id="btn" style={{ borderRadius: "40px", padding: "10px 40px", border: "1px solid #ccc", backgroundColor: "black" }}>Buy now</Button>

                            </div>
                        </Card.Title>
                        <Card.Text style={{ fontSize: "20px" }}>
                            {key.description} &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;<div>
                            <FaRupeeSign />{key.price}  </div>
                        </Card.Text>

                        <div id="shopicon" >
                            <div>
                                <img
                                    src="https://greenshift-road.myshopify.com/cdn/shop/files/Emission-icon.svg?v=1694095411"
                                    alt="Duration Icon"
                                />
                                <div>
                                    Duration <br />
                                    6 hrs
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://greenshift-road.myshopify.com/cdn/shop/files/Range-icon.svg?v=1694093594"
                                    alt="Range Icon"
                                />
                                <div>
                                    Range <br />
                                    126 km
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://greenshift-road.myshopify.com/cdn/shop/files/Battery-icon.svg?v=1694093243"
                                    alt="Battery Icon"
                                />
                                <div>
                                    Battery <br />
                                    77 kWh
                                </div>
                            </div>
                        </div>


                    </Card.Body>


                </Card>




            </>
        )
    }
    })






    return (
        <>

         
            <div id="filter"   onClick={handleShow}><FaFilter /></div>

           

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter price</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>low price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="00"
                                autoFocus
                                name="low"
                                value={lowPrice}
                                onChange={(e)=>{setLowPrice(e.target.value)}}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>high price</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="99999"
                                autoFocus
                                name="high"
                                value={highPrice}
                                onChange={(e)=>{setHighPrice(e.target.value)}}

                            />
                        </Form.Group>

                        
                       
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button  onDoubleClick={handleClose} variant="primary" onClick={showdata}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            <div id="shopitemshow" >
                {showFilter?ans:ans1}</div>












        </>
    )
}
export default Shop;
