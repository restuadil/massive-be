import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'massive'
});

db.connect((err) => {
    if (err) {
        console.error('Koneksi ke MySQL gagal: ' + err.stack);
        return;
    }
    console.log('Terhubung ke MySQL dengan ID ' + db.threadId);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/api/veterinarians', (req, res) => {
    const searchName = req.query.name;

    let query = 'SELECT * FROM veterinarians';

    if (searchName) {
        query += ` WHERE name LIKE '%${searchName}%'`;
    }

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Terjadi kesalahan server');
            return;
        }
        res.json(results);
    });
});

app.post('/api/veterinarians', (req, res) => {
    const newVet = req.body;

    if (!newVet.name || !newVet.img || !newVet.strv || !newVet.specialist || !newVet.star || !newVet.exp || !newVet.price || !newVet.location) {
        res.status(400).send('Data tidak lengkap');
        return;
    }

    db.query('INSERT INTO veterinarians SET ?', newVet, (err, result) => {
        if (err) {
            res.status(500).send('Terjadi kesalahan server');
            return;
        }

        res.status(201).json({ id: result.insertId });
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
