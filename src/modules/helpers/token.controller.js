import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const createToken = (payload) =>
    jwt.sign(payload, process.env.SECRET, {
        expiresIn: "1h",
    });

export const verifyToken = (token) => jwt.verify(token, process.env.SECRET);
