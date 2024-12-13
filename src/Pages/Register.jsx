import { useState } from "react";
import myvdo from "../Images/vedio.mp4";
import { Button } from "@material-tailwind/react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 
  const obj = {
    email,
    password,
    cnfpass: confirmPassword,
  };

 
  const SubmitForm = () => {
      window.localStorage.setItem("data", JSON.stringify(obj));
      navigate("/login")

  };

  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

   
    SubmitForm();
    alert("Registration successful!");
  };

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
            backdropFilter: "blur(5px)",
          }}
        >
          <Form
            onSubmit={handleSubmit}
            style={{
              padding: "40px",
              width: "500px",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Email Input */}
            <Form.Group className="mb-4" controlId="formBasicEmail" style={{ width: "100%" }}>
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
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
            <Form.Group className="mb-4" controlId="formBasicPassword" style={{ width: "100%" }}>
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Password</Form.Label>
              <Form.Control
                type="password"
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

            {/* Confirm Password Input */}
            <Form.Group className="mb-4" controlId="formBasicCnfPassword" style={{ width: "100%" }}>
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={handleInputChange(setConfirmPassword)}
                placeholder="Confirm password"
                style={{
                  height: "50px",
                  fontSize: "1rem",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              />
            </Form.Group>

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
              }}
              type="submit"
            >
              Register
            </Button>

            <Button  onClick={()=>{navigate("/login")}}
             style={{
                marginTop: "20px",
                padding: "20px 40px",
                borderRadius: "40px",
                backgroundColor: "black",
                color: "white",
                fontSize: "1.1rem",
                cursor: "pointer",
                textAlign: "center",
              }}>Login</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
