import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routerAprendiz from "./modules/aprendices/aprendiz.router.js";
import routerAuth from "./modules/auth/auth.router.js";


config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.use("/api", routerAuth);
app.use("/api", routerAprendiz);

app.listen(PORT, () => {
    console.log("API en el puerto: " + PORT);
})
