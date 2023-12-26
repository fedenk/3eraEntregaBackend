import cartsModel  from '../models/carts.model.js';


export default class Carts {

    getAll = async () => {
        const carts = await cartsModel.find().lean();
        return carts;
    }

    getById = async (cid) => {
        const cart = await cartsModel.findById(cid);
        return cart;
    }

    save = async (cart) => {
        const result = await cartsModel.create(cart);
        return result;
    }

    update = async (cid, cart) => {
        const result = await cartsModel.findByIdAndUpdate(cid, cart);
        return result;
    }

    delete = async (id) => {
        const result = await cartsModel.findByIdAndDelete(id);
        return result;
    }
}