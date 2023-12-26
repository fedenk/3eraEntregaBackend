import dotenv from 'dotenv';

dotenv.config();

const configs = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
}

export default configs;
