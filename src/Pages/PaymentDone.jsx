import { useState } from "react";
import Loader from "./Loader";
import Card from 'react-bootstrap/Card';
import img1 from "../Images/p1.jpg"
import img2 from "../Images/p2.jpg"
import img3 from "../Images/p3.jpg"
import img4 from "../Images/ev.jpg"

const PaymentDone = () => {
    const [loader, setloader] = useState("true")

    setTimeout(() => {
        setloader(false);
    }, 5000);
    return (
        <>
            <section style={{ backgroundColor: "#1b1b1b", marginBottom: "0px" }}>
                {loader ? (
                    <div style={{}}>
                        <Loader />
                    </div>
                ) : (
                    <h2 align="center" style={{ color: "green", padding: "100px" }}> Your Order Succesfully Placed <br />
                        your product will be Arrived within 6 to 7 working days</h2>
                )}

                <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%",color:"green" }}>
                    More Shopping
                </h2>

                <marquee > <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "100px", marginTop: "150px" }}>
                    <Card style={{ width: '18rem', }}>
                        <Card.Img variant="top" src={img1} height={"200px"} />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                    </Card>

                </div></marquee>












            </section>









        </>
    )
}
export default PaymentDone;