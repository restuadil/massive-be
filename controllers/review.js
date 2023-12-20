import db from "../server.js";

export const addReview = (req, res) => {
    try {
        const { userId, review } = req.body;
        db.query(
            "INSERT INTO reviews (userId,review) VALUES (?, ?)",
            [parseInt(userId), review],
            (err, results) => {
                if (err) {
                    res.status(500).send(err.message);
                    return;
                }
                res.status(201).json({ id: results.insertId });
            }
        );
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
};

export const getAllReviews = (req, res) => {
    try {
        const query = `
            SELECT 
                reviews.id,
                reviews.userId,
                reviews.review,
                users.username,
                users.img
            FROM 
                reviews
            INNER JOIN 
                users ON reviews.userId = users.id
        `;

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

export const deleteReviewById = (req, res) => {
    try {
        const reviewId = parseInt(req.params.id);
        db.query("DELETE FROM reviews WHERE id = ?", [reviewId], (err, result) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).send("Review tidak ditemukan");
                return;
            }
            res.sendStatus(204);
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
}

export const getReviewById = (req, res) => {
    try {
        const reviewId = parseInt(req.params.id);
        db.query("SELECT * FROM reviews WHERE id = ?", [reviewId], (err, result) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }
            if (result.length === 0) {
                res.status(404).send("Review tidak ditemukan");
                return;
            }
            res.json(result[0]);
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
}

export const updateReviewById = (req, res) => {
    try {
        const reviewId = parseInt(req.params.id);
        const { review } = req.body;
        db.query("UPDATE reviews SET review = ? WHERE id = ?", [review, reviewId], (err, result) => {
            if (err) {
                res.status(500).send("Terjadi kesalahan server");
                return;
            }
            if (result.affectedRows === 0) {
                res.status(404).send("Review tidak ditemukan");
                return;
            }
            res.sendStatus(204);
        });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan server");
    }
}