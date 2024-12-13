import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Col, Row } from "react-bootstrap";

const Edit = () => {
  const { id } = useParams();
  const [mydata, setmydata] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const loadata = () => {
    let api = `https://react-jsonserver.onrender.com/shop/${id}`;
    axios.get(api).then((resp) => {
      setmydata(resp.data);
    });
  };

  useEffect(() => {
    loadata();
  }, []);

  const HandleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setmydata((values) => ({ ...values, [name]: value }));
  };

  const HandleSubmit = () => {
    let url = `http://localhost:3000/shop/${id}`;
    axios.put(url, mydata).then(() => {
      alert("Successfully updated");
      setmydata({
        name: "",
        price: "",
        description: "",
        image: "",
      });
    });
  };

  return (
    
    <div className="form-container">
      <h2>Edit Product</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formBasicName">
          <Form.Label  column sm={2}>Name</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              value={mydata.name}
              placeholder="Enter Name"
              onChange={HandleInput}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicPrice">
          <Form.Label column sm={2}>Price</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="price"
              value={mydata.price}
              placeholder="Enter Price"
              onChange={HandleInput}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicDescription">
          <Form.Label column sm={2}>Description</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="description"
              value={mydata.description}
              placeholder="Enter Description"
              onChange={HandleInput}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicImage">
          <Form.Label column sm={2}>Image</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="image"
              value={mydata.image}
              placeholder="Enter Image URL"
              onChange={HandleInput}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <button type="button" onClick={HandleSubmit} className="btn btn-primary">
              Submit
            </button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Edit;
