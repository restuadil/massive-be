import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.error("Koneksi ke MySQL gagal: ");
        return;
    }
    console.log("Terhubung ke MySQL dengan ID ");
});

export default db;
