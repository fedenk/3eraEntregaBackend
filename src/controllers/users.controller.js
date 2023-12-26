import * as usersService from '../services/users.service.js';

const getUsers = async (req,res) => {
    try {
        const result = await usersService.getUsers();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const createUser = async (req,res) => {
    try {
        const { first_name, last_name, email, age, password, cart, role } = req.body;
        const result = await usersService.createUser({ first_name, last_name, email, age, password, cart, role });
        res.status(201).send({ status: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

export {
    getUsers,
    createUser
}