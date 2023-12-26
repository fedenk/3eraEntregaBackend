import { Router } from 'express';
import { getCarts, createCart, updateCart, deleteCart } from '../controllers/carts.controller.js';

const router = Router();

router.get('/', getCarts);
router.post('/', createCart);
router.put('/', updateCart);
router.delete('/', deleteCart);

export default router;