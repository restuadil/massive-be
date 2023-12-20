import db from "../server.js";

export const getAllVets = (req, res) => {
    const searchName = req.query.name;

    let query = "SELECT * FROM veterinarians";
    try {
        if (searchName) {
            query += ` WHERE name LIKE '%${searchName}%'`;
        }

        db.query(query, (err, results) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }
            res.json(results);
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
};
export const addVet = ((req, res) => {
    const newVet = req.body;
    try {
        if (!newVet.name || !newVet.img || !newVet.strv || !newVet.specialist || !newVet.star || !newVet.exp || !newVet.price || !newVet.location
        ) {
            res.status(400).send("Data tidak lengkap");
            return;
        }

        db.query("INSERT INTO veterinarians SET ?", newVet, (err, result) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }

            res.status(201).json({ id: result.insertId });
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
});
export const deleteVetById = (req, res) => {
    const vetId = Number(req.params.id);

    if (!vetId) {
        res.status(400).send("ID tidak valid");
        return;
    }

    db.query("DELETE FROM veterinarians WHERE id = ?", vetId, (err, result) => {
        if (err) {
            res.status(500).send("Terjadi kesalahan server");
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).send("Veterinarian tidak ditemukan");
            return;
        }

        res.status(200).send("Veterinarian berhasil dihapus");
    });
};
export const getVetById = (req, res) => {
    const vetId = Number(req.params.id);
    try {



        if (!vetId) {
            res.status(400).send("ID tidak valid");
            return;
        }

        db.query("SELECT * FROM veterinarians WHERE id = ?", vetId, (err, result) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }

            if (result.length === 0) {
                res.status(404).send("Veterinarian tidak ditemukan");
                return;
            }

            res.json(result[0]);
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
};

export const updateVetById = (req, res) => {
    const vetId = Number(req.params.id);
    const newVet = req.body;
    db.query("UPDATE veterinarians SET ? WHERE id = ?", [newVet, vetId], (err, result) => {
        if (err) {
            res.status(500).send("Terjadi kesalahan server");
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send("Veterinarian tidak ditemukan");
            return;
        }
        res.sendStatus(204);
    })
}