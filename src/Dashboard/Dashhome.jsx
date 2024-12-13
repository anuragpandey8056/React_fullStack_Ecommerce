import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashhome = () => {
  // Sample data for the graph
  const data = [
    { name: "Jan", sales: 4000, profit: 2400 },
    { name: "Feb", sales: 3000, profit: 1398 },
    { name: "Mar", sales: 2000, profit: 9800 },
    { name: "Apr", sales: 2780, profit: 3908 },
    { name: "May", sales: 1890, profit: 4800 },
    { name: "Jun", sales: 2390, profit: 3800 },
    { name: "Jul", sales: 3490, profit: 4300 },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#121212", minHeight: "90vh", color: "#ffffff",width:"100%" }}>
      <h2 className="text-center mb-4" style={{ color: "#f5f5f5" }}>Dashboard</h2>

      {/* Cards Section */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center shadow-sm" style={{ backgroundColor: "#1e1e1e", border: "none", color: "#f5f5f5" }}>
            <Card.Body>
              <Card.Title style={{ color: "#82ca9d" }}>Total Sales</Card.Title>
              <Card.Text>
                <h3 style={{ fontWeight: "bold" }}>$25,000</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm" style={{ backgroundColor: "#1e1e1e", border: "none", color: "#f5f5f5" }}>
            <Card.Body>
              <Card.Title style={{ color: "#8884d8" }}>Total Users</Card.Title>
              <Card.Text>
                <h3 style={{ fontWeight: "bold" }}>1,200</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm" style={{ backgroundColor: "#1e1e1e", border: "none", color: "#f5f5f5" }}>
            <Card.Body>
              <Card.Title style={{ color: "#ffa726" }}>Monthly Profit</Card.Title>
              <Card.Text>
                <h3 style={{ fontWeight: "bold" }}>$8,500</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Graph Section */}
      <Card className="shadow-sm" style={{ backgroundColor: "#1e1e1e", border: "none", color: "#f5f5f5" }}>
        <Card.Body>
          <h5 className="mb-3" style={{ color: "#f5f5f5" }}>Sales and Profit Overview</h5>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={2} />
              <CartesianGrid stroke="#2e2e2e" />
              <XAxis dataKey="name" stroke="#f5f5f5" />
              <YAxis stroke="#f5f5f5" />
              <Tooltip contentStyle={{ backgroundColor: "#1e1e1e", color: "#f5f5f5" }} />
            </LineChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashhome;
