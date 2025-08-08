import express from "express";
import { authAprendiz } from "./auth.controller.js";

const routerAuth = express.Router();

routerAuth.post("/login", authAprendiz);

export default routerAuth;
