import { verifyToken } from "../helpers/token.controller.js";

export const protectRoute = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token no encontrado",
        });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({
            success: false,
            message: "Token invalido",
        });
    }

    next();
};
