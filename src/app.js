import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js';
import configs from './config/config.js';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import Messages from './dao/classes/messages.dao.js';
import usersRouter from './routes/users.router.js';
import viewsRouter from './routes/views.router.js';
import productsRouter from './routes/products.router.js';

const messageManager = new Messages();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(`${__dirname}/public`))

try {
    await mongoose.connect(configs.mongoUrl);
    console.log('DB connected');
} catch (error) {
    console.log(error.message);
}

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/', viewsRouter);


const server = app.listen(configs.port, () => console.log('Server running'));

const socketServer = new Server(server);

const logs = [];

socketServer.on('connection', socket => {
    socket.on('message1', data => {
        socketServer.emit('log', data);
    })

    socket.on('message2', data => {
        logs.push({ socketid: socket.id, message: data })
        socketServer.emit('log', { logs });

        messageManager.save({ socketid: socket.id, message: data });
    })
})