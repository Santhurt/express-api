import mysql from "mysql2/promise";
import { config } from "dotenv";

config();

const dbconn = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    database: process.env.DBNAME,
    password: process.env.DBPASS,
});

try {
    await dbconn.connect();
} catch (error) {
    console.log(error);
}

export default dbconn;
