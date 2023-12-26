import cartsModel  from '../models/carts.model.js';

export default class Carts {
    constructor() {
        console.log('Working carts with DB');
    }

    getAll = async () => {
        const carts = await cartsModel.find().lean();
        return carts;
    }

    save = async (cart) => {
        const result = await cartsModel.create(cart);
        return result;
    }

    update = async (id, cart) => {
        const result = await cartsModel.findByIdAndUpdate(id, cart);
        return result;
    }
}