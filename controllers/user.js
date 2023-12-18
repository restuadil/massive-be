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

export const deleteUserById = (req, res) => {
    try {
        const userId = req.params.id;
        db.query("DELETE FROM users WHERE id = ?", userId, (err, result) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).send("User tidak ditemukan");
                return;
            }
            res.status(200).send("User berhasil dihapus");
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
}

export const updateUserById = (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email, password, img } = req.body;
        if (!username || !email || !password || !img) {
            res.status(400).send("Data tidak lengkap");
            return;
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        db.query("UPDATE users SET username = ?, email = ?, password = ?, img = ? WHERE id = ?", [username, email, hashedPassword, img, userId], (err, result) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).send("User tidak ditemukan");
                return;
            }
            res.status(200).send("User berhasil diupdate");
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
}

export const getUserById = (req, res) => {
    try {
        const userId = req.params.id;
        db.query("SELECT * FROM users WHERE id = ?", userId, (err, result) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }
            if (result.length === 0) {
                res.status(404).send("User tidak ditemukan");
                return;
            }
            res.json(result[0]);
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
}