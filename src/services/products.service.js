import ProductsRepository from "../repositories/products.repository.js";

const productsRepository = new ProductsRepository();

const getProducts = async() => {
    const result = await productsRepository.getProducts();
    return result;
}

const getProductById = async(id) => {
    const result = await productsRepository.getProductById(id);
    return result;
}

const createProduct = async (product) => {
    const result = productsRepository.createProduct(product);
    return result;
}

const updateProduct = async (id, product) => {
    const result = productsRepository.updateProduct(id, product);
    return result;
}

const deleteProduct = async (id) => {
    const result = productsRepository.deleteProduct(id);
    return result;
}

export {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}