// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { addProduct, updateProduct } from '../api';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const ProductForm = ({ productToEdit, onSave }) => {
    const [product, setProduct] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        if (productToEdit) {
            setProduct(productToEdit);
        }
    }, [productToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (product.id) {
            await updateProduct(product.id, product);
        } else {
            await addProduct(product);
        }
        onSave();
        setProduct({ name: '', price: '', description: '' });
    };

    return (
        <Form onSubmit={handleSubmit} className="container mt-4">
            <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl
                    type="text"
                    name="name"
                    id="name"
                    value={product.name}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="price">Price</FormLabel>
                <FormControl
                    type="text"
                    name="price"
                    id="price"
                    value={product.price}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormControl
                    type="text"
                    name="description"
                    id="description"
                    value={product.description}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button type="submit" variant="primary">Save</Button>
        </Form>
    );
};

export default ProductForm;
