import dbconn from "../../config/conn.js";

export const AprendizImage = {
    update: async (idAprendiz, url) => {
        const [result] = await dbconn.query(
            "update aprendices set foto = ? where id = ?",
            [url, idAprendiz],
        );

        return result;
    },
};


