import CartsRepository from "../repositories/carts.repository.js";
import ProductsRepository from "../repositories/products.repository.js";
import * as ticketsService from '../services/tickets.service.js';

const cartsRepository = new CartsRepository();
const productsRepository = new ProductsRepository();

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

const purchase = async (cid, user) => {
    try {
        const session = await mongoose.startSession();
        session.startTransaction();

        const cart = await cartsRepository.getCart(cid);

        let amount = 0;

        const outStock = [];

        cart.products.forEach(async ({ product, quantity }) => {
            if(product.stock >= quantity) {
                amount += product.price * quantity;
                product.stock -= quantity;

                await productsRepository.updateProduct('Id del producto', product);
            }else {
                outStock.push({ product, quantity });
            }
        });

        const ticket = await ticketsService.generatePurchase( user, amount );

        await cartsRepository.updateCart(cid, outStock);

        await session.commitTransaction();

        return ticket;

        } catch (error) {
        await session.abortTransaction();
    } finally {
        session.endSession();
    }
}

export {
    getCarts,
    createCart,
    updateCart,
    deleteCart,
    getCart,
    purchase
}