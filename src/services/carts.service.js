import CartsRepository from "../repositories/carts.repository.js";

const cartsRepository = new CartsRepository();

const getCarts = async() => {
    const result = await cartsRepository.getCarts();
    return result;
}

const getCart = async(cid) => {
    const result = await cartsRepository.getCart(cid);
    return result;
}

const createCart = async (cart) => {
    const result = await cartsRepository.createCart(cart);
    return result;
}

const updateCart = async (cid, cart) => {
    const result = await cartsRepository.updateCart(cid, cart);
    return result;
}

const deleteCart = async (id) => {
    const result = await cartsRepository.deleteCart(id);
    return result;
}

export {
    getCarts,
    createCart,
    updateCart,
    deleteCart,
    getCart
}