import { Router } from "express";
import {
    registrarTicket,
    listarTickets,
    detalleTicket,
    actualizarTicket,
    eliminarTicket
} from "../controllers/ticket_controller.js";
import verificarAutenticacion from "../middlewares/auth.js";

const router = Router();

router.post('/tickets/registro', verificarAutenticacion, registrarTicket)

router.get('/tickets', listarTickets)

//router.patch('/ticket/estado/:id', verificarAutenticacion, cambiarEstado)

router
    .route('/tickets/:id')
    .get(verificarAutenticacion, detalleTicket)
    .delete(verificarAutenticacion, eliminarTicket)
    
    
router.put('/tickets',verificarAutenticacion, actualizarTicket)
export default router