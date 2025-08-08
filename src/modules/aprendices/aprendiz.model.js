import dbconn from "../../config/conn.js";

export const Aprendiz = {
    getAll: async () => {
        const [rows] = await dbconn.query("select * from aprendices");
        return rows;
    },
    create: async (data) => {
        const [result] = await dbconn.query("insert into aprendices set ?", [
            data,
        ]);
        return result;
    },
    update: async (id, data) => {
        const [result] = await dbconn.query(
            "update aprendices set ? where id =  ?",
            [data, id],
        );
        return result;
    },
    delete: async (id) => {
        const [resut] = await dbconn.query(
            "delete from aprendices where id = ?",
            [id],
        );
        return resut;
    },
};
