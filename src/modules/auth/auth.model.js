import dbconn from "../../config/conn.js";
import bcrypt from "bcryptjs";

export const Auth = {
    authAprendiz: async (data) => {
        const { email, password } = data;

        const [consultaAprendiz] = await dbconn.query(
            "select email, password from aprendices where email = ?",
            [email],
        );

        if (consultaAprendiz.length === 0) {
            throw new Error("No existe el usuario en la base de datos");
        }

        const aprendiz = consultaAprendiz[0];
        const coinciden = await bcrypt.compare(password, aprendiz.password);

        if (!coinciden) {
            throw new Error("No coinciden las contraseñas");
        }

        return { email: aprendiz.email };
    },
};
