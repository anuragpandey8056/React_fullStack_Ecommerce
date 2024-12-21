import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Button } from "@material-tailwind/react";
import { addtoCart } from "../Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const searchTerm = useSelector(state => state.mycart.search);
    const [mydata, setMyData] = useState([]);
    const dispatch = useDispatch();
    const [hoverStates, setHoverStates] = useState({});
    const navigate= useNavigate();

   
    const loadData = () => {
        let api = "https://react-jsonserver.onrender.com/shop";
        axios.get(api)
            .then((res) => {
                setMyData(res.data);
                const initialHoverStates = res.data.reduce((acc, item) => {
                    acc[item.id] = item.image; // Default to original image
                    return acc;
                }, {});
                setHoverStates(initialHoverStates);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    };

    
    useEffect(() => {
        loadData();
    }, []);

    // Handle mouse enter and leave events for image hover effect
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

    const cartData = (id, myName, price, desc, img) => {
        dispatch(addtoCart({ id, name: myName, price, description: desc, image: img, qnty: 1 }));
    };

    const ProductDetail=(id)=>{
        navigate(`productdetail/${id}`)
    }

   
    const filteredData = mydata.filter((key) => {
        const productName = key.name.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        return productName.includes(searchTermLower);
    });

    if (filteredData.length === 0) {
        return  <h1  style={{
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",     
            height: "100vh",          
            backgroundColor: "#1b1b1b", 
            color: "green",            
            textAlign: "center",       
        }}>No products found for your search.</h1>;
    }

    const ans1 = filteredData.map((key) => (
        <Card
            className="shadow-lg"
            key={key.id}
            style={{ width: '30rem', border: "black", margin: "10px", transition: "0.3s" }}
            onClick={()=>{ProductDetail(key.id)}}

            onMouseEnter={() => handleMouseEnter(key.id, key.hoverimage || key.image)}
            onMouseLeave={() => handleMouseLeave(key.id, key.image || key.image)}
        >
            <Card.Img variant="top" src={hoverStates[key.id]} />
            <Card.Body style={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                <Card.Title style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>{key.name}</div>
                    <div>
                        <Button
                            onClick={() => cartData(key.id, key.name, key.price, key.description, key.image)}
                            id="btn"
                            style={{ borderRadius: "40px", padding: "10px 40px", border: "1px solid #ccc", backgroundColor: "black" }}
                        >
                            Buy now
                        </Button>
                    </div>
                </Card.Title>
                <Card.Text style={{ fontSize: "20px" }}>
                    {key.description}
                </Card.Text>

                <div id="shopicon" style={{ display: "flex", color: "white", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                    {/* Other icons */}
                </div>
            </Card.Body>
        </Card>
    ));

    return (
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", backgroundColor: "#1b1b1b" }}>
            {ans1} {/* Display the filtered product cards */}
        </div>
    );
};

export default Search;
