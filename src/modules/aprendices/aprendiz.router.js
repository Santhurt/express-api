import express from "express";
import {
    actualizarAprendiz,
    crearAprendiz,
    eliminarAprendiz,
    traerAprendices,
} from "./aprendiz.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const routerAprendiz = express.Router();

routerAprendiz.use(protectRoute);

routerAprendiz.get("/aprendices", traerAprendices);
routerAprendiz.post("/aprendices", crearAprendiz);
routerAprendiz.put("/aprendices", actualizarAprendiz);
routerAprendiz.delete("/aprendices", eliminarAprendiz);

export default routerAprendiz;
