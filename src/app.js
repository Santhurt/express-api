import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routerAprendiz from "./modules/aprendices/aprendiz.router.js";
import routerAuth from "./modules/auth/auth.router.js";
import uploadRouter from "./modules/upload/upload.router.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/uploads", express.static(join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;

app.use("/api/upload", uploadRouter);
app.use("/api", routerAuth);
app.use("/api", routerAprendiz);

app.listen(PORT, () => {
    console.log("API en el puerto: " + PORT);
});
