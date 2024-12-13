import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { addtoCart } from "../Slice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
    let { id } = useParams();
    const [key, setmydata] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hoverStates, setHoverStates] = useState({});

    const loaddata = () => {
        let api = `https://react-jsonserver.onrender.com/data/${id}`;
        axios.get(api).then((res) => {
            setmydata(res.data);

            const initialHoverStates = res.data.reduce((acc, item) => {
                acc[item.id] = item.image; // Default to original image
                return acc;
            }, {});
            setHoverStates(initialHoverStates);
        });
    };

    useEffect(() => {
        loaddata();
    }, [id]);

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
        dispatch(addtoCart({ id: id, name: myname, price: price, description: desc, image: img, qnty: 1 }));
    };

    return (
        <>
           
            <div className="product-detail-container" style={{   display: "flex",
        justifyContent: "center",backgroundColor:"#1b1b1b"  }}>
                <Card
                    className="shadow-lg"
                    key={key.id}
                    style={{
                        width: '60%', 
                        border: "1px solid black", 
                        margin: "10px", 
                        transition: "0.3s", 
                        backgroundColor: '#1b1b1b', // Set the card background color
                    }}
                    onMouseEnter={() => handleMouseEnter(key.id, key.hoverimage)}
                    onMouseLeave={() => handleMouseLeave(key.id, key.image)}
                >
                    <Card.Img variant="top" src={hoverStates[key.id]} />
                    <Card.Body style={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                        <Card.Title style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>{key.name}</div>
                            <div>
                                <Button
                                    onClick={() => { cartdata(key.id, key.name, key.price, key.description, key.image) }}
                                    id="btn"
                                    style={{
                                        borderRadius: "40px",
                                        padding: "10px 40px",
                                        border: "1px solid #ccc",
                                        backgroundColor: "black",
                                    }}
                                >
                                    Buy now
                                </Button>
                            </div>
                        </Card.Title>
                        <Card.Text style={{ fontSize: "20px" }}>
                            {key.description}
                        </Card.Text>

                        <div id="shopicon" style={{ display: "flex", color: "white", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
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
            </div>
        </>
    );
};



export default ProductDetail;
