import * as productsService from '../services/products.service.js';

const getProducts = async (req,res) => {
    try {
        const result = await productsService.getProducts();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const createProduct = async (req,res) => {
    try {
        const product = req.body;
        const result = await productsService.createProduct(product);
        res.status(201).send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const updateProduct = async (req,res) => {
    try {
        const id = req.params.id;
        const product = req.body;

        const result = await productsService.updateProduct(id, product);
        res.status({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const deleteProduct = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await productsService.deleteProduct(id);
        res.status({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

export {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}