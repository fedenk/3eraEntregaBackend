import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String
    },
    email:{
        type: String,
        unique: true,
        require: true
    },
    age:{
        type: Number
    },
    password:{
        type: String,
        require: true
    },
    cart:{
        type: [
            {
                cart:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'carts'
                }
            }
        ],
        default: []
    },
    role:{
        type: String,
        default: 'USER',
        require: true
    }
});

const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel;