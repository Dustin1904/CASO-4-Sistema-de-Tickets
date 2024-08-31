import verificarAutenticacion from "../middlewares/auth.js";
import { Router } from "express";
import { registrarTecnico , listarTecnicos , detalleTecnico , actualizarTecnico , eliminarTecnico } from "../controllers/tecnicos_controller.js";

const router = Router();

router.post("/tecnicos/registro", verificarAutenticacion, registrarTecnico);
router.get("/tecnicos", verificarAutenticacion, listarTecnicos);
router.get("/tecnicos/:id", verificarAutenticacion, detalleTecnico);
router.put("/tecnicos/:id", verificarAutenticacion, actualizarTecnico);
router.delete("/tecnicos/:id", verificarAutenticacion, eliminarTecnico);

export default router;