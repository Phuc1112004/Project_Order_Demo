// src/components/CustomerForm.js
import React, { useState, useEffect } from 'react';
import { addCustomer, updateCustomer } from '../api';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const CustomerForm = ({ customerToEdit, onSave }) => {
    const [customer, setCustomer] = useState({ name: '', email: '' });

    useEffect(() => {
        if (customerToEdit) {
            setCustomer(customerToEdit);
        }
    }, [customerToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (customer.id) {
            await updateCustomer(customer.id, customer);
        } else {
            await addCustomer(customer);
        }
        onSave();
        setCustomer({ name: '', email: '' });
    };

    return (
        <Form onSubmit={handleSubmit} className="container mt-4">
            <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl
                    type="text"
                    name="name"
                    id="name"
                    value={customer.name}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl
                    type="email"
                    name="email"
                    id="email"
                    value={customer.email}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button type="submit" variant="primary">Save</Button>
        </Form>
    );
};

export default CustomerForm;
