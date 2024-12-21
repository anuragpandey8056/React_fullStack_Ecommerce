import ev from "../Images/ev.jpg"
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import img1 from "../Images/slider1.jpg"
import img2 from "../Images/slider2.png"
import img3 from "../Images/slider3.jpg"
// tailwind css button
import Carousel from 'react-bootstrap/Carousel';
import p1 from "../Images/p1.jpg"
import p2 from "../Images/p2.jpg"
import p3 from "../Images/p3.jpg"
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { MdHomeRepairService } from "react-icons/md";
const Home = () => {
    const [mydata, setmydata] = useState([]);
    const [hoverStates, setHoverStates] = useState({});
    // timer
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-06-01T00:00:00"); // Fixed timestamp
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime(); // Use getTime() for accurate calculation

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []); // Empty dependency array to run effect only once

    const padZero = (number) => (number < 10 ? `0${number}` : number);
    //   ================================timer code ended
    const loaddata = () => {
        let api = "https://react-jsonserver.onrender.com/data"
        axios.get(api).then((res) => {
            setmydata(res.data)

            const initialHoverStates = res.data.reduce((acc, item) => {
                acc[item.id] = item.image; // Default to original image
                return acc;
            }, {});
            setHoverStates(initialHoverStates);
        })
    }
    useEffect(() => {
        loaddata();
    }, [])
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
    const ans = mydata.map((key) => {
        return (




            <>

                <Card
                    
                   
                    className="shadow-lg_card-custom border-0 m-3 "
                    
                    key={key.id}
                    onMouseEnter={() => handleMouseEnter(key.id, key.hoverimage)}
                    onMouseLeave={() => handleMouseLeave(key.id, key.image)}
                >
                    <Card.Img
                        variant="top"
                        src={hoverStates[key.id]}
                        className="card-img-custom"
                    />
                    <Card.Body  className="card-body-custom">
                        <Card.Title style={{color:"white"}}  >{key.name}</Card.Title>
                        <Card.Text style={{color:"white"}} className="card-text-custom">
                            {key.description }
                        </Card.Text>
                        <div className="shop-icon-container">
                            <div className="shop-icon">

                                <div>
                                    <img
                                        src="https://greenshift-road.myshopify.com/cdn/shop/files/Emission-icon.svg?v=1694095411"
                                        alt="Duration Icon" width={"50px"}
                                    />
                                    Duration <br />
                                    6 hrs
                                </div>
                            </div>
                            <div className="shop-icon">

                                <div>
                                    <img
                                        src="https://greenshift-road.myshopify.com/cdn/shop/files/Range-icon.svg?v=1694093594"
                                        alt="Range Icon"
                                    />
                                    Range <br />
                                    126 km
                                </div>
                            </div>
                            <div className="shop-icon">

                                <div>
                                    <img
                                        src="https://greenshift-road.myshopify.com/cdn/shop/files/Battery-icon.svg?v=1694093243"
                                        alt="Battery Icon"
                                    />
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








    return (
        <>
            <section id="section1">
                <Carousel controls={false}>
                    <Carousel.Item id='corosolimg1' >
                        <img src={img1} alt="" />
                        <Carousel.Caption id="corosoltxt"  >
                            <h1>Smooth Ride,Go Green With Our Certified E-Vechiles</h1>
                            <Button id="btncorosol1" color="green" >Shop now</Button>
                            <Button id="btncorosol2"color="white" >Read more</Button>

                        </Carousel.Caption >
                    </Carousel.Item>
                    <Carousel.Item id='corosolimg2' >
                        <img src={img2} alt="" />
                        <Carousel.Caption id="corosoltxt"  >
                            <h1>Smooth Ride,Go Green With Our Certified E-Vechiles</h1>
                            <br />

                            <Button id="btncorosol1" color="green">Shop now</Button>
                            <Button id="btncorosol2" color="white">Read more</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item id='corosolimg3' >
                        <img src={img3} alt="" />
                        <Carousel.Caption id="corosoltxt" >
                            <h1>Smooth Ride,Go Green With Our Certified E-Vechiles</h1>

                            <Button id="btncorosol1" color="green"  >Shop now</Button>
                            <Button id="btncorosol2"  color="white">Read more</Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </section>
{/*================================================================================================================================= */}
            <div id="div1">
                <div id="sondiv1">
                    <h1>Spark your Ride With Electric Power</h1>
                    <p>With electric power shaping the future of the globe, explore our most reliable products now</p>
                </div>


                <div id="sondiv2">
                    <img src={ev} alt="" width={"90%"} />
                </div>

                <div id="sondiv3" >
                    <div>
                        <h1>60Mph</h1>
                        <p>4-speed mode</p>
                    </div>
                    <div>
                        <h1>120mi</h1>
                        <p>km range</p>
                    </div>
                    <div>
                        <h1>440lbs</h1>
                        <p>frame weight</p>
                    </div>
                    <div>
                        <h1>24KW</h1>
                        <p>per charge</p>
                    </div>
                </div>
                <div id="sondiv4">
                    <Button id="btnsondiv4" >Buy now</Button>
                    <div id="linebtn" ></div>
                    <Button  id="btnsondiv5" >Read more</Button>
                </div>
                <div>

                </div>
                <div id="sondiv6"  >
                    <h1>
                        Explore our best collections </h1>
                    <p>Top kick scooter picks for an exhilarating ride</p>
                </div>
                <div >
                    <div id="Homecards">{ans}</div>

                </div>

                <div id="Timer">
                    <div><h1>Grab it ! Soon offer end</h1>
                        <p>Charge up your future with an electric vehicle at the best affordable price</p></div>
                    <div>

                        <div style={styles.container}>
                            <div style={styles.timeBox}>
                                <div style={styles.timeValue}>{padZero(timeLeft.days)}</div>
                                <div style={styles.timeLabel}>Days</div>
                            </div>
                            <div style={styles.timeBox}>
                                <div style={styles.timeValue}>{padZero(timeLeft.hours)}</div>
                                <div style={styles.timeLabel}>Hours</div>
                            </div>
                            <div style={styles.timeBox}>
                                <div style={styles.timeValue}>{padZero(timeLeft.minutes)}</div>
                                <div style={styles.timeLabel}>Minutes</div>
                            </div>
                            <div style={styles.timeBox}>
                                <div style={styles.timeValue}>{padZero(timeLeft.seconds)}</div>
                                <div style={styles.timeLabel}>Seconds</div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* ===========================================================corosol */}
                <section>
                    <Carousel controls={false}>
                        <Carousel.Item id='corosolimg7'>
                            <img src={p1} alt="" />
                            <Carousel.Caption className="carousel-caption-custom">
                                <p className="carousel-caption-text">Ultra high performance</p>
                                <h1 className="carousel-heading">0-40 kmph <br /> In 6.8sec**</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item id='corosolimg4'>
                            <img src={p2} alt="" />
                            <Carousel.Caption className="carousel-caption-custom">
                                <p className="carousel-caption-text">Swift speed</p>
                                <h1 className="carousel-heading">3-Hour <br /> Rapid charging</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item id='corosolimg5'>
                            <img src={p3} alt="" />
                            <Carousel.Caption className="carousel-caption-custom">
                                <p className="carousel-caption-text">Power unleashed</p>
                                <h1 className="carousel-heading">72-V Dominance <br /> Astounding power</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <div id="text">
                        <div className="feature-block">
                            <h3 className="feature-title">Anti Theft Measure</h3>
                            <div className="feature-description">
                                Our kickback scooter prioritizes <br />
                                security with GPS and remote <br /> locking
                            </div>
                            <h2 className="feature-number">01</h2>
                        </div>
                        <div className="feature-block">
                            <h3 className="feature-title">74 Volt Scrambler</h3>
                            <div className="feature-description">
                                Our kickback scooter prioritizes <br />
                                security with GPS and remote <br /> locking
                            </div>
                            <h2 className="feature-number">02</h2>
                        </div>
                        <div className="feature-block">
                            <h3 className="feature-title">3 Hour Fast Charging</h3>
                            <div className="feature-description">
                                Our kickback scooter prioritizes <br />
                                security with GPS and remote <br /> locking
                            </div>
                            <h2 className="feature-number">03</h2>
                        </div>
                        <div className="feature-block">
                            <h3 className="feature-title">26 MPH Speed</h3>
                            <div className="feature-description">
                                Our kickback scooter prioritizes <br />
                                security with GPS and remote <br /> locking
                            </div>
                            <h2 className="feature-number">04</h2>
                        </div>
                    </div>
                </section>




                <section>
                    <div className="d-flex">
                        <Card className="w-50 bg-dark text-white me-2 m-4">
                            <Card.Img
                                id="CXimg"
                                variant="top"
                                src="https://greenshift-road.myshopify.com/cdn/shop/files/grid-banner-1.jpg?v=1694088166&width=1500"
                                alt="Card image"
                                className="img-fluid"
                            />
                            <Card.ImgOverlay>
                                <h3>New <br /> Arrivals</h3>
                                <Card.Text>
                                    Check out our new arrival
                                </Card.Text>
                                <Button id="btn1" color="green">Buy now</Button>
                            </Card.ImgOverlay>
                        </Card>
                        <Card  className="w-50 bg-dark text-white ms-2 m-4">
                            <Card.Img
                                 id="CXimg"
                                variant="top"
                                src="https://greenshift-road.myshopify.com/cdn/shop/files/grid-banner.jpg?v=1694088149&width=1500"
                                alt="Card image"
                                className="img-fluid"
                            />
                            <Card.ImgOverlay>
                                <h3>CX-340</h3>
                                <Card.Text>
                                    Check out our new arrival
                                </Card.Text>
                                <Button id="btn1" color="green">Buy now</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </section>

                <section id="card2quantam" >
                    <div className="d-flex">
                        <Card   className="w-50 bg-dark text-white me-2 m-4">
                            <Card.Img
                                id="qunatamuppercard"
                                variant="top"
                                src="https://greenshift-road.myshopify.com/cdn/shop/files/Product13.jpg?v=1698313272&width=1780"
                                alt="Card image"
                                className="img-fluid"
                            />
                        </Card>
                        <Card id="qunatam" className="w-50  bg-dark text-white ms-2 m-4   ">
                            <Card.ImgOverlay>
                                <h3>Qunatam Glide Z-3</h3>
                                <Card.Text>
                                    Effort city adventure
                                    <br />
                                    <br />
                                    Rs.42,900.00
                                    <br />
                                    <br />
                                    Tax Included
                                    <div id="addtocardbanner">
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
                                </Card.Text>
                                <div id="button350w">
                                    <Button className="product-option-button">350W</Button>
                                    <Button className="product-option-button">550W</Button>
                                </div>
                                <div className="product-button-container">
                                    <Button className="add-to-cart-button"> <center>Add to cart</center> </Button>
                                    <Button className="buy-now-button">Buy now</Button>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </section>

                <section id="section-header">
                    <h2>Scooter Excellence: Futuristic Insights</h2>
                    <div className="text-lg">
                        Stay updated with the latest kick back scooter trends, news, and insights in our trendy blog section.
                    </div>
                </section>

                
                    <div id="card-container">
                        {/* Larger card */}
                        <div >
                            <div className="card-large">
                                <img
                                    src="https://greenshift-road.myshopify.com/cdn/shop/articles/Blog_04_Electric_Scooter_Accessories.jpg?v=1698312339&width=1000"
                                    alt="Electric Scooter Accessories"
                                />
                            </div>
                        </div>

                        {/* Middle card */}
                        <div >
                            <div className="card-small">
                                <img
                                    src="https://greenshift-road.myshopify.com/cdn/shop/articles/Blog_06_Consider_When_Buying_an_Electric_Scooter.jpg?v=1698312003&width=1000"
                                    alt="Buying an Electric Scooter"
                                />
                            </div>
                        </div>

                        {/* Last card */}
                        <div>
                            <div className="card-small">
                                <img
                                    src="https://greenshift-road.myshopify.com/cdn/shop/articles/Blog_05_Electric_Scooters_for_Heavy_Adults.jpg?v=1698311291&width=1000"
                                    alt="Electric Scooters for Heavy Adults"
                                />
                            </div>
                        </div>
                    </div>
                

                <section id="four-cards">
                    <Card id="card-width" style={{ backgroundColor: "#1b1b1b", color: "white" }}>
                        <Card.Body className="card-body">
                            <TbTruckDelivery className="icon" />
                            <Card.Title>Fastest Delivery</Card.Title>
                            <Card.Text>
                                Delivery order within 24hrs
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="card-width" style={{ backgroundColor: "#1b1b1b", color: "white" }}>
                        <Card.Body className="card-body">
                            <MdPayment className="icon" />
                            <Card.Title>Secure Payments</Card.Title>
                            <Card.Text>
                                Payment protected by Buildesk Pro
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="card-width" style={{ backgroundColor: "#1b1b1b", color: "white" }}>
                        <Card.Body className="card-body">
                            <SlEarphonesAlt className="icon" />
                            <Card.Title>24*7 Support</Card.Title>
                            <Card.Text>
                                Customer service active 24*7
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="card-width" style={{ backgroundColor: "#1b1b1b", color: "white" }}>
                        <Card.Body className="card-body">
                            <MdHomeRepairService className="icon" />
                            <Card.Title>Trustworthy Service</Card.Title>
                            <Card.Text>
                                Trustworthy and reliable service provided
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </section>
            </div>
        </>
    )
}
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        backgroundColor: "#1c1c1c",
        padding: "1rem",
        borderRadius: "8px",
        color: "white",
        fontFamily: "Arial, sans-serif",
    },
    timeBox: {
        textAlign: "center",
    },
    timeValue: {
        fontSize: "3rem",
        fontWeight: "bold",
    },
    timeLabel: {
        fontSize: "1rem",
        marginTop: "0.5rem",
    },
};
export default Home;