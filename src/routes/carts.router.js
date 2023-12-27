import { Router } from 'express';
import { getCarts, createCart, updateCart, deleteCart, purchase } from '../controllers/carts.controller.js';
import { accessRolesEnum, passportStrategiesEnum } from '../config/enums.js';

const router = Router();

router.get('/', getCarts);
router.post('/', createCart);
router.put('/:cid/products/:pid',[accessRolesEnum.USER], passportStrategiesEnum.JWT, updateCart);
router.delete('/:id', deleteCart);
router.post('/:cid/purchase', purchase);

export default router;