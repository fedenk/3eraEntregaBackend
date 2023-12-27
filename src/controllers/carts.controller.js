import * as cartsService from '../services/carts.service.js';
import * as productsService from '../services/products.service.js';


const getCarts = async (req,res) => {
    try {
        const result = await cartsService.getCarts();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const createCart = async (req,res) => {
    try {
        const result = await cartsService.createCart();
        res.status(201).send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const updateCart = async (req,res) => {
    try {
        const { cid, pid } = req.params;
        const cantidad = Number(req.query.cantidad);

        const cart = await cartsService.getCart(cid);

        if (!cart){
            return res.status(500).send({ status: 'error', message: error.message });
        }

        const product = await productsService.getProductById(pid);

        if(!product){
            return res.status(500).send({ status: 'error', message: error.message });
        }
   
            const indexProductInCart = cart.products.findIndex(product=> product._id === pid);
            if(indexProductInCart !== -1){
                cart.products[indexProductInCart].quantity = cart.products[indexProductInCart].quantity + cantidad;
            }else{
                cart.products.push({_id: pid, quantity: cantidad});
            }

        const result = await cartsService.updateCart(cid, cart);
        res.status({ status: 'success', payload : result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const deleteCart = async (req,res) => {
    try {
        const { id } = req.params;
        const result = await cartsService.deleteCart(id);
        res.status({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const purchase = async (req,res) => {
    try {
        const { cid } = req.params;
        const { user } = req.user;

       const result = await cartsService.purchase(cid, user);

        res.send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

export {
    getCarts,
    createCart,
    updateCart,
    deleteCart,
    purchase
}