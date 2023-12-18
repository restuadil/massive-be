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


