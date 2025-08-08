import { Aprendiz } from "./aprendiz.model.js";
import bcrypt from "bcryptjs";

export async function traerAprendices(req, res) {
    try {
        const aprendices = await Aprendiz.getAll();
        return res.status(200).json({
            success: 200,
            data: aprendices,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export async function crearAprendiz(req, res) {
    try {
        const data = req.body;

        if (data.password === null) {
            return res.status(400).json({
                success: false,
                message: "Error en la contraseña",
            });
        }

        data.password = await bcrypt.hash(
            data.password,
            await bcrypt.genSalt(10),
        );

        const result = await Aprendiz.create(data);

        return res.status(200).json({
            success: 200,
            data: result,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export async function actualizarAprendiz(req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await Aprendiz.update(id, data);

        return res.status(200).json({
            success: 200,
            data: result,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export async function eliminarAprendiz(req, res) {
    try {
        const id = req.params.id;
        const result = await Aprendiz.update(id);

        return res.status(200).json({
            success: 200,
            data: result,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
