import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const OrderPlaced = () => {
    const [data, setdata] = useState([]);

    const loaddata = () => {
        let api = "http://localhost:3000/OrderPlaced";
        axios.get(api).then((resp) => {
            setdata(resp.data);
        });
    };

    useEffect(() => {
        loaddata();
    }, []);

    const ans = data.map((key) => {
        return (
            <tr key={key.id}>
                <td>{key.id}</td>
                <td><img src={key.image} width={"100px"} alt="" /></td>
                <td>{key.first_name}</td>
                <td>{key.address}</td>
                <td>{key.email}</td>
                <td>{key.Phone}</td>
                <td>{key.amount}</td>
                <td>{key.productname}</td>
                <td>{key.qnty}</td>
                <td>{key.ModofPayment}</td>
            </tr>
        );
    });

    return (
        <>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>NAME</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Amount</th>
                        <th>Product Name</th>
                        <th>Qnty</th>
                        <th>Mode Of Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </Table>
        </>
    );
};

export default OrderPlaced;
