import db from "../server.js";
import bcrypt from "bcrypt";

export const addUser = (req, res) => {
    try {
        const { username, email, password, img } = req.body;
        if (!username || !email || !password) {
            res.status(400).send("Data tidak lengkap");
            return;
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        db.query("INSERT INTO users SET ?", { username, email, password: hashedPassword, img }, (err, result) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }
            res.status(201).json({ id: result.insertId });
        });
    } catch (err) {
        res.status(500).send("Terjadi kesalahan server");
    }
}
export const getAllUsers = (req, res) => {
    try {
        db.query("SELECT * FROM users", (err, results) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }
            res.json(results);
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
}