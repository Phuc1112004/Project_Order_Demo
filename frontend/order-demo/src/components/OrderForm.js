// src/components/OrderForm.js
import React, { useState, useEffect } from 'react';
import { addOrder, updateOrder } from '../api';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const OrderForm = ({ orderToEdit, onSave }) => {
    const [order, setOrder] = useState({ order_date: '', price: '', status: '' });

    useEffect(() => {
        if (orderToEdit) {
            setOrder(orderToEdit);
        }
    }, [orderToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (order.id) {
            await updateOrder(order.id, order);
        } else {
            await addOrder(order);
        }
        onSave();
        setOrder({ order_date: '', price: '', status: '' });
    };

    return (
        <Form onSubmit={handleSubmit} className="container mt-4">
            <FormGroup>
                <FormLabel htmlFor="order_date">Order Date</FormLabel>
                <FormControl
                    type="date"
                    name="order_date"
                    id="order_date"
                    value={order.order_date}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="price">Price</FormLabel>
                <FormControl
                    type="text"
                    name="price"
                    id="price"
                    value={order.price}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="status">Status</FormLabel>
                <FormControl
                    type="text"
                    name="status"
                    id="status"
                    value={order.status}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button type="submit" variant="primary">Save</Button>
        </Form>
    );
};

export default OrderForm;
