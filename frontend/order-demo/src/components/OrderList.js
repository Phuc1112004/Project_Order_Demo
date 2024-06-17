// src/components/OrderList.js
import React, { useEffect, useState } from 'react';
import { fetchOrders, deleteOrder } from '../api';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const OrderList = ({ onEdit }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const data = await fetchOrders();
            setOrders(data);
        };
        getOrders();
    }, []);

    const handleDelete = async (id) => {
        await deleteOrder(id);
        setOrders(orders.filter(order => order.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2>Orders</h2>
            <ListGroup>
                {orders.map(order => (
                    <ListGroupItem key={order.id}>
                        {order.id} - {order.order_date} - {order.price}
                        <Button color="primary" className="ml-2" onClick={() => onEdit(order)}>Edit</Button>
                        <Button color="danger" className="ml-2" onClick={() => handleDelete(order.id)}>Delete</Button>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default OrderList;
