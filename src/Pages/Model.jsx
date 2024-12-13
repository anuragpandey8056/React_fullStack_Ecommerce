// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Button } from "@material-tailwind/react";



const Model = () => {
    return (
        <>

            <section style={{

                backgroundColor: "#1b1b1b"
            }}>



                <section id='model1' >
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://greenshift-road.myshopify.com/cdn/shop/files/FAQ.jpg?v=1698233230&width=750" alt="Card image" />
                        <Card.ImgOverlay
                        id='model2'
                       
                        >
                           <h4>Electric Adventure: Explore Our EV Collection</h4> 
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </section>

                <section

                >











                    <div id='modeldiv1'  >
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://greenshift-road.myshopify.com/cdn/shop/collections/Product_1.jpg?v=1698332373"
                            />
                            <Card.Body id='modelcardbody' >
                                <Card.Title>Adventure Gyre</Card.Title>
                                <Card.Text>
                                    Desgin with eco-friendly feature this scooter
                                    offers smart and efficent solution.
                                </Card.Text>
                                <Button id='modelcardbtn'> <center>view all</center>  </Button>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://greenshift-road.myshopify.com/cdn/shop/collections/Product_3.jpg?v=1698332493"
                            />
                            <Card.Body  id='modelcardbody'>

                                <Card.Title>Eco Ecessential</Card.Title>
                                <Card.Text>
                                    Desgin with eco-friendly feature this scooter
                                    offers smart and efficent solution.
                                </Card.Text>
                                <Button id='modelcardbtn'> <center>view all</center>  </Button>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://greenshift-road.myshopify.com/cdn/shop/collections/Product_8.jpg?v=1698332565"
                            />
                            <Card.Body  id='modelcardbody'>

                                <Card.Title>Scoot Acessories</Card.Title>
                                <Card.Text>
                                    Desgin with eco-friendly feature this scooter
                                    offers smart and efficent solution.
                                </Card.Text>
                                <Button id='modelcardbtn'> <center>view all</center>  </Button>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: "25rem", border: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://greenshift-road.myshopify.com/cdn/shop/collections/Product_11.jpg?v=1698332437"
                            />
                            <Card.Body  id='modelcardbody'>

                                <Card.Title>style and safty</Card.Title>
                                <Card.Text>
                                    Desgin with eco-friendly feature this scooter
                                    offers smart and efficent solution.
                                </Card.Text>
                                <Button style={{ borderRadius: "40px", padding: "10px 30px 10px 30px", backgroundColor: "limegreen", color: "black", }}> <center>view all</center>  </Button>


                            </Card.Body>
                        </Card>
                        <Card  id='modelcardbody'>
                            <Card.Img
                                variant="top"
                                src="https://greenshift-road.myshopify.com/cdn/shop/collections/Product_18.jpg?v=1699514343"
                            />
                            <Card.Body style={{ backgroundColor: "#1b1b1b", color: "white" }}>

                                <Card.Title>Urban Rides</Card.Title>
                                <Card.Text>
                                    Desgin with eco-friendly feature this scooter
                                    offers smart and efficent solution.
                                </Card.Text>
                                <Button id='modelcardbtn'> <center>view all</center>  </Button>

                            </Card.Body>
                        </Card>
                    </div>
                </section>
            </section>

          
        </>
    );
};
export default Model;
