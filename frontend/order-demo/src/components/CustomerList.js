// src/components/CustomerList.js
import React, { useEffect, useState } from 'react';
import { fetchCustomers, deleteCustomer } from '../api';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const CustomerList = ({ onEdit }) => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const getCustomers = async () => {
            const data = await fetchCustomers();
            setCustomers(data);
        };
        getCustomers();
    }, []);

    const handleDelete = async (id) => {
        await deleteCustomer(id);
        setCustomers(customers.filter(customer => customer.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2>Customers</h2>
            <ListGroup>
                {customers.map(customer => (
                    <ListGroupItem key={customer.id}>
                        <div><strong>Name:</strong> {customer.name}</div>
                        <div><strong>Email:</strong> {customer.email}</div>
                        <Button variant="primary" className="ml-2" onClick={() => onEdit(customer)}>Edit</Button>
                        <Button variant="danger" className="ml-2" onClick={() => handleDelete(customer.id)}>Delete</Button>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default CustomerList;
