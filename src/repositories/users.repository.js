import Users from '../dao/classes/users.dao.js';

export default class UsersRepository {
    constructor(){
        this.dao = new Users();
    }

    getUsers = async() => {
        const result = await this.dao.get();
        return result;
    }

    createUser = async (user) => {
        const result = await this.dao.create(user);
        return result;
    }

    updateUser = async (id,user) => {
        const result = await this.dao.modify(id, user);
    }

    getUserById = async (id) => {
        const user = await this.dao.getById(id);
        const result = new UsersDto(user);
        return result;
    }

    deleteUser = async (id) => {
        const result = await this.dao.delete(id);
        return result;
    }
}