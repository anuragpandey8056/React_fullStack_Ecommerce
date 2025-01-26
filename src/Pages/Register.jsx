import { useState } from "react";
import myvdo from "../Images/vedio.mp4";
import { Button } from "@material-tailwind/react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    navigate("/login");
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

  useEffect(() => {
  
    if (window.localStorage.getItem("isLoggedIn")){
      alert("You are already logged in!");
      navigate("/home")
    }
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");
   

    
    const handlePopState = (event) => {
      window.history.pushState(null, null, window.location.pathname);
      alert("Navigation restricted!");
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handlePopState);

   
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        src={myvdo}
        className="w-100 h-100 position-absolute"
        style={{ objectFit: "cover", zIndex: -1 }}
      ></video>

      {/* Centered Form Container */}
      <Container fluid className="h-100 d-flex justify-content-center align-items-center">
        <Row className="w-100 justify-content-center">
          <Col xs={10} sm={8} md={6} lg={5} xl={4}>
            <div
              className="p-4 rounded"
              style={{
                background: "rgba(255, 255, 255, 0.2)", // Transparent white background
                backdropFilter: "blur(-100px)", // Frosted-glass effect
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Form onSubmit={handleSubmit}>
                {/* Email Field */}
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    value={email}
                    onChange={handleInputChange(setEmail)}
                    placeholder="Enter email"
                  />
                </Form.Group>

                {/* Password Field */}
                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required

                    value={password}
                    onChange={handleInputChange(setPassword)}
                    placeholder="Enter password"
                  />
                </Form.Group>

                {/* Confirm Password Field */}
                <Form.Group controlId="formBasicCnfPassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    required

                    value={confirmPassword}
                    onChange={handleInputChange(setConfirmPassword)}
                    placeholder="Confirm password"
                  />
                </Form.Group>

                {/* Register Button */}
                <Button
                  type="submit"
                  className="w-100 mb-3"
                  style={{
                    borderRadius: "40px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Register
                </Button>

                {/* Login Button */}
                <Button
                  onClick={() => navigate("/login")}
                  className="w-100"
                  style={{
                    borderRadius: "40px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
