import { useState } from "react";
import myvdo from "../Images/vedio.mp4";
import { Button } from "@material-tailwind/react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect } from "react";



const Login = () => {
  const navigate = useNavigate();

  // Set initial state with localStorage data if available
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let data = window.localStorage.getItem("data");
  let converteddata = JSON.parse(data);

  const SubmitForm = () => {
    if (email === converteddata.email && password === converteddata.password) {
      alert("Login successful. Welcome!");
      window.localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    }else  if(!localStorage.getItem("data")) {
      alert("first register");
    }
    else{
      alert('pass and email not matched')
    }
  };

  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    SubmitForm(); // Call SubmitForm when form is submitted
  };

    useEffect(() => {
          
          if (window.localStorage.getItem("isLoggedIn")){
            alert("You must be logged in")
            navigate("/home")
          }
          const isLoggedIn = window.localStorage.getItem("isLoggedIn");
         
          const handlePopState = (event) => {
            window.history.pushState(null, null, window.location.pathname);
            alert("you are now logged in logout first");
          };
      
          window.history.pushState(null, null, window.location.pathname);
          window.addEventListener("popstate", handlePopState);
      
         
          return () => {
            window.removeEventListener("popstate", handlePopState);
          };
        }, [navigate]);

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        {/* Video Section */}
        <video
          autoPlay
          muted
          loop
          src={myvdo}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></video>

        {/* Form Section */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(-100px)",
            background: "rgba(255, 255, 255, 0.2)", // Transparent background
            width: "90%", // Default for mobile
            maxWidth: "500px", // Limit width for larger screens
          }}
        >
          <Form
            onSubmit={handleSubmit}
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Email Input */}
            <Form.Group
              className="mb-4"
              controlId="formBasicEmail"
              style={{ width: "100%" }}
            >
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                value={email}
                required

                onChange={handleInputChange(setEmail)}
                placeholder="Enter email"
                style={{
                  height: "50px",
                  fontSize: "1rem",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              />
            </Form.Group>

            {/* Password Input */}
            <Form.Group
              className="mb-4"
              controlId="formBasicPassword"
              style={{ width: "100%" }}
            >
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                required
                
                value={password}
                onChange={handleInputChange(setPassword)}
                placeholder="Enter password"
                style={{
                  height: "50px",
                  fontSize: "1rem",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              />
            </Form.Group>
            {/* <div>
            <a href=""><  li>Forget Password</li></a>
            
            <Link to="home"><li><IoIosHome style={{fontSize:"24px",color:"black",listStyleType:"none"}} /></li></Link>
            </div> */}
                                 
            

            {/* Submit Button */}
            <Button
              style={{
                marginTop: "20px",
                padding: "10px 40px",
                borderRadius: "40px",
                backgroundColor: "black",
                color: "white",
                fontSize: "1.1rem",
                cursor: "pointer",
                textAlign: "center",
                width: "100%", // Full-width button
              }}
              type="submit"
            >
              Login
            </Button>

            <Button
              onClick={() => {
                navigate("/register");
              }}
              style={{
                marginTop: "20px",
                padding: "10px 40px",
                borderRadius: "40px",
                backgroundColor: "black",
                color: "white",
                fontSize: "1.1rem",
                cursor: "pointer",
                textAlign: "center",
                width: "100%", // Full-width button
              }}
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
