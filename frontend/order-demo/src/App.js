// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="container mt-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Order Management</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/customers">Customers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<OrderPage />} />
                    <Route path="/customers" element={<CustomerPage />} />
                    <Route path="/products" element={<ProductPage />} />
                </Routes>
            </div>
        </Router>
    );
};

const OrderPage = () => {
    const [orderToEdit, setOrderToEdit] = React.useState(null);

    const handleEditOrder = (order) => {
        setOrderToEdit(order);
    };

    const handleSaveOrder = () => {
        setOrderToEdit(null);
    };

    return (
        <div>
            <h1>Orders</h1>
            <OrderForm orderToEdit={orderToEdit} onSave={handleSaveOrder} />
            <OrderList onEdit={handleEditOrder} />
        </div>
    );
};

const CustomerPage = () => {
    const [customerToEdit, setCustomerToEdit] = React.useState(null);

    const handleEditCustomer = (customer) => {
        setCustomerToEdit(customer);
    };

    const handleSaveCustomer = () => {
        setCustomerToEdit(null);
    };

    return (
        <div>
            <h1>Customers</h1>
            <CustomerForm customerToEdit={customerToEdit} onSave={handleSaveCustomer} />
            <CustomerList onEdit={handleEditCustomer} />
        </div>
    );
};

const ProductPage = () => {
    const [productToEdit, setProductToEdit] = React.useState(null);

    const handleEditProduct = (product) => {
        setProductToEdit(product);
    };

    const handleSaveProduct = () => {
        setProductToEdit(null);
    };

    return (
        <div>
            <h1>Products</h1>
            <ProductForm productToEdit={productToEdit} onSave={handleSaveProduct} />
            <ProductList onEdit={handleEditProduct} />
        </div>
    );
};

export default App;
