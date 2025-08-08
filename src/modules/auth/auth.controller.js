import { createToken } from "../helpers/token.controller.js";
import { Auth } from "./auth.model.js";

export async function authAprendiz(req, res) {
    try {
        const data = req.body;

        const result = await Auth.authAprendiz(data);
        const token = createToken(result);

        return res.status(200).json({
            success: true,
            data: {
                email: data.email,
                token: token,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
