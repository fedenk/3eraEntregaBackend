import Tickets from "../dao/classes/tickets.dao.js";

export default class TicketsRepository{
    constructor(){
        this.dao = new Tickets();
    }

    save = async(ticket) => {
        const result = await this.dao.save(ticket);
        return result;
    }
}