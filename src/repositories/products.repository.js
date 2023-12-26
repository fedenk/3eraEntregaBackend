import Products from "../dao/classes/products.dao.js";

export default class ProductsRepository {
    constructor(){
        this.dao = new Products();
    }

    getProducts = async () => {
        const result = await this.dao.getProducts();
        return result;
    }

    getProductById = async (id) => {
        const result = await this.dao.getProductById(id);
        return result;
    }

    createProduct = async (product) => {
        const result = await this.dao.createProduct(product);
        return result;
    }

    updateProduct = async (id, product) => {
        const result = await this.dao.updateProduct(id, product);
        return result;
    }

    deleteProduct = async (id) => {
        const result = await this.dao.deleteProduct(id);
        return result;
    }
}