// src/api.js
import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1';

export const fetchOrders = async () => {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
};


export const addOrder = async (order) => {
    const response = await axios.post(`${API_URL}/orders`, order);
    return response.data;
};

export const updateOrder = async (id, order) => {
    const response = await axios.put(`${API_URL}/orders/${id}`, order);
    return response.data;
};

export const deleteOrder = async (id) => {
    await axios.delete(`${API_URL}/orders/${id}`);
};



export const fetchCustomers = async () => {
    const response = await axios.get(`${API_URL}/customers`);
    return response.data;
};

export const addCustomer = async (customer) => {
    try {
        const response = await axios.post(`${API_URL}/customers`, customer);
        return response.data;
    } catch (error) {
        // Xử lý lỗi
        throw error;
    }
};

export const updateCustomer = async (id, customer) => {
    const response = await axios.put(`${API_URL}/customers/${id}`, customer);
    return response.data;
};

export const deleteCustomer = async (id) => {
    await axios.delete(`${API_URL}/customers/${id}`);
};




export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const addProduct = async (product) => {
    const response = await axios.post(`${API_URL}/products`, product);
    return response.data;
};

export const updateProduct = async (id, product) => {
    const response = await axios.put(`${API_URL}/products/${id}`, product);
    return response.data;
};

export const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/products/${id}`);
};

