import usersModel from '../models/users.model.js';

export default class Users {

    get = async() => {
        return await usersModel.find();
    }    

    create = async(user) => {
        return await usersModel.create(user);
    }

    modify = async(id, user) => {
        return await usersModel.findByIdAndUpdate(id, user);
    }

    delete = async(id) => {
        return await usersModel.findByIdAndDelete(id);
    }

    getById = async(id) => {
        return await usersModel.findOne(id);
    }
}