import Carts from "../dao/classes/carts.dao.js";

export default class CartsRepository {
    constructor(){
        this.dao = new Carts();
    }

    getCarts = async () => {
        const result = await this.dao.getAll();
        return result;
    }

    getCart = async (cid) => {
        const result = await this.dao.getById(cid);
        return result
    }

    createCart = async (cart) => {
        const result = await this.dao.save(cart);
        return result;
    }

    updateCart = async (cid, cart) => {
        const result = await this.dao.update(cid, cart);
        return result;
    }

    deleteCart = async (id) => {
        const result = await this.dao.delete(id);
        return result;
    }
}