// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../api';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const ProductList = ({ onEdit }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2>Products</h2>
            <ListGroup>
                {products.map(product => (
                    <ListGroupItem key={product.id}>
                        <div><strong>Name:</strong> {product.name}</div>
                        <div><strong>Price:</strong> {product.price}</div>
                        <div><strong>Description:</strong> {product.description}</div>
                        <Button variant="primary" className="ml-2" onClick={() => onEdit(product)}>Edit</Button>
                        <Button variant="danger" className="ml-2" onClick={() => handleDelete(product.id)}>Delete</Button>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default ProductList;
