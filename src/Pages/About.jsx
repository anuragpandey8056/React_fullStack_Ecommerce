import { Button } from "@material-tailwind/react";
import myvdo from "../Images/vedio.mp4"
import React, { useRef, useState } from "react";


const About = () => {


    const videoRef = useRef(null); // Reference to the video element
    const [isPlaying, setIsPlaying] = useState(false); // Track whether the video is playing
  
    const handleVideoClick = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause(); // Pause the video
        } else {
          videoRef.current.play(); // Play the video
        }
        setIsPlaying(!isPlaying); // Toggle the play state
      }
    };
    return (
        <>

            <section style={{ backgroundColor: "#1b1b1b" }}>
                <div >
                    <div id="aboutsec1" >
                        <h1>About Road</h1>
                    </div>


                    <div id="aboutsec2" >
                        <img src="https://greenshift-road.myshopify.com/cdn/shop/files/IMG_Section.jpg?v=1698209209&width=2000" alt="" width={"90%"} />
                    </div>

                    <div id="aboutsec3">
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

                    <div id="aboutsec4" >
                        <Button id="aboutbtn">Buy Now</Button>
                        <div style={{ width: "50px", height: "1px", backgroundColor: "gray" }}></div> {/* Horizontal line */}
                        <Button id="aboutbtn2" >Read more</Button>
                    </div>
                </div>

                <div id="aboutdivvedio" >
                    <video autoPlay src={myvdo} type="video/mp4 "
                        ref={videoRef}
                        
                        onClick={handleVideoClick}
                        style={{ cursor: "pointer" }}
                    ></video>
                </div>



            </section>



        </>
    )
}
export default About;