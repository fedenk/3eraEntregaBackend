import productsModel from '../models/products.model.js'

export default class Products {
    getProducts = async () => {
        const result = await productsModel.find();
        return result;
    }

    getProductById = async (id) => {
        const result = await productsModel.findOne(id);
        return result;
    }

    createProduct = async (product) => {
        const result = await productsModel.create(product);
        return result;
    }

    updateProduct = async (id, product) => {
        const result = await productsModel.findByIdAndUpdate(id, product);
        return result;
    }

    deleteProduct = async (id) => {
        const result = await productsModel.findByIdAndDelete(id);
        return result;
    }
}