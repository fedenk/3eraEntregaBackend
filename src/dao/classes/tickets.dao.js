import ticketsModel from "../models/tickets.model.js";

export default class Tickets {
    save = async (ticket) => {
        return await ticketsModel.create(ticket);
    }
}