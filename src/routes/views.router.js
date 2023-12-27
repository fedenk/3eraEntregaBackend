import { Router } from 'express';
import Users from '../dao/classes/users.dao.js';
import UsersDto from '../DTOs/users.dto.js';
import { accessRolesEnum, passportStrategiesEnum } from '../config/enums.js';

const router = Router();

const usersManager = new Users();


router.get('/current', async (req,res) => {
    try {
        const users = await usersManager.get();
        const result = new UsersDto(users);
        res.render('current', result);
    } catch (error) {
        console.log(error.message);
    }
    
});

router.get('/chat',[accessRolesEnum.USER], passportStrategiesEnum.JWT, async (req,res) =>{
    res.render('chat');
});

export default router;