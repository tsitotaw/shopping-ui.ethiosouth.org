import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axiosApiHelper from "../../api/axiosApiHelper";


const OrderList = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axiosApiHelper.findAll("orders", true).then((data) => {
            setOrders(data.data);
        });
    }, []);


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Order Date</th>
                        <th>Delivery Date</th>
                        <th>Product Name</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => {
                            return (<tr>
                                <td>{order.id}</td>
                                <td>{order.orderedDate}</td>
                                <td>{order.deliveredDate === null? "Not Delivered": order.deliveredDate}</td>
                                <td>{order.product.name}</td>
                                <td>
                                    {
                                        !order.isShipped && !order.isCancelled? "Order Placed":
                                         order.isShipped && order.deliveredDate? "Order Delivered": 
                                         order.isCancelled? "Order Cancelled": "Order Shipped"
                                    }
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default OrderList;