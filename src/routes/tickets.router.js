import { Router } from 'express';
import { getTickets, createTicket, resolveTicket } from '../controllers/tickets.controller.js';

const router = Router();

router.get('/', getTickets);
router.post('/', createTicket);
router.put('/', resolveTicket);

export default router;