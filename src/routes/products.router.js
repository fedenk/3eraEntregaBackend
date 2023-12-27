import { Router } from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';
import { accessRolesEnum, passportStrategiesEnum } from '../config/enums.js';

const router = Router();

router.get('/', getProducts);
router.post('/',[accessRolesEnum.ADMIN], passportStrategiesEnum.JWT, createProduct);
router.put('/:id',[accessRolesEnum.ADMIN], passportStrategiesEnum.JWT, updateProduct);
router.delete('/:id',[accessRolesEnum.ADMIN], passportStrategiesEnum.JWT, deleteProduct);

export default router;