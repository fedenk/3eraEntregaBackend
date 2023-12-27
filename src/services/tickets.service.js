import {v4 as uuidv4 } from 'uuid';
import TicketsRepository from "../repositories/tickets.repository.js";

const ticketsRepository = new TicketsRepository();


const generatePurchase = async (user, amount) => {
    const newTicket = {
        code: uuidv4(),
        purchase_datetime: new Date().toLocaleString(),
        amount,
        purchaser: user.email
    }

    await ticketsRepository.save(newTicket);
}

export {
    generatePurchase
}