import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';

import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

// Icons
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import React from 'react';

import {
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

import '@fortawesome/fontawesome-free/css/all.min.css';

import axios from 'axios';
// import Search from 'antd/es/transfer/search';
import { searchbox } from '../Slice';

const Topmenu = () => {
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState(""); // Store search text
 
  const [searchActive, setSearchActive] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mycart = useSelector((state) => state.mycart.cart);
  const cartlen = mycart.length;

  const [adminuser, setAdminUser] = useState("");
  const [adminpass, setAdminPass] = useState("");

  const [jsonAdminData, setJsonAdminData] = useState([]);


  const loadData = () => {
    let url = "https://react-jsonserver.onrender.com/AdminLogin";
    axios.get(url).then((resp) => {
      setJsonAdminData(resp.data);
    });
  };

  useEffect(() => {
    loadData();
   
  }, []);

  const login = () => {
   const valid= jsonAdminData.map((key) => 
    key.username === adminuser && key.password === adminpass     
      
  )
    if(valid){
      alert("Login successful");
      navigate("/dashboard");
    }
    else{
      alert("not match")
    }
  };

  const handleSearchChange = (e) => {
    setSearchTxt(e.target.value);
    
  };

  const SubmitSearch=()=>{
    dispatch(searchbox(searchTxt)); 
  
  }

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };



  return (
    <>




     
      <Navbar id='navbar' expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll

            >
              <Nav.Link as={Link} to="home" style={{ color: "green" }}>Home</Nav.Link>
              <Nav.Link as={Link} to="shop" style={{ color: "white" }} id='nav'>Shop</Nav.Link>
              <Nav.Link as={Link} to="About" style={{ color: "white" }} id='nav'>About</Nav.Link>
              <Nav.Link as={Link} to="model" style={{ color: "white" }} id='nav'>Model</Nav.Link>
              <Nav.Link as={Link} to="contact" style={{ color: "white" }} id='nav'>Contact</Nav.Link>
            </Nav>

            <Navbar.Brand href="#home">
              <img
                src="https://greenshift-road.myshopify.com/cdn/shop/files/GlideX_Logo.svg?v=1709810815&width=203"
                width="100"
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>

            <nav id='searchlogo' style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              {searchActive ? (
                <div id="container">
                  <form id="search-bar">
                    <input
                      type="text"
                      placeholder="Search anything"
                      name="search"
                      value={searchTxt}
                      onChange={handleSearchChange}
                    />
                    <i onClick={SubmitSearch} className="fa-solid fa-magnifying-glass" style={{ cursor: "pointer" }}></i>


                  </form>


                </div>
              ) : (
                <Nav.Link
                  as={Link}
                  to="search"
                  style={{ color: "white", fontSize: "1.5rem" }}
                >
                  <CiSearch onClick={toggleSearch} />
                </Nav.Link>
              )}

              <Dropdown >
                <Dropdown.Toggle
                  as="div"
                  id="dropdown-account"

                >
                  <VscAccount style={{ color: "white", fontSize: "1.3rem", marginLeft: "30px" }} />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ backgroundColor: "#1b1b1b", color: "green" }}>
                  <Dropdown.Item onClick={handleShow} style={{ color: "green" }}>Admin login</Dropdown.Item>
                  <Dropdown.Item style={{ color: "green" }} onClick={() => { navigate("/register") }}>Login</Dropdown.Item>
                  <Dropdown.Item style={{ color: "green" }} onClick={() => { navigate("/login") }}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link as={Link} to="cart" style={{ color: "white", fontSize: "1.3rem", marginLeft: "20px" }}><MdOutlineShoppingBag /></Nav.Link>
            </nav>
            <div id='cartqnty'>{cartlen}</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: "#1b1b1b", color: "green", borderBottom: "none" }} closeButton>
          <Modal.Title>Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1b1b1b" }}>
          <Form>
            <MDBCol col='8'>
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px', marginTop: "0px" }}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                  <h2 className="fw-bold mb-2 text-uppercase">Admin Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <MDBInput onChange={(e) => { setAdminUser(e.target.value) }} value={adminuser} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                  <MDBInput onChange={(e) => { setAdminPass(e.target.value) }} value={adminpass} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                  <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                  <Button onClick={login} style={{ borderRadius: "40px", padding: "10px 40px", border: "1px solid #ccc", backgroundColor: "black" }}>Login</Button>

                  <div className='d-flex flex-row mt-3 mb-5'>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='facebook-f' size="lg" />
                    </MDBBtn>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='twitter' size="lg" />
                    </MDBBtn>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='google' size="lg" />
                    </MDBBtn>
                  </div>

                  <div>
                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#1b1b1b", borderTop: "none" }}>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Topmenu;
