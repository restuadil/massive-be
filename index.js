import express from 'express';
import mysql from 'mysql';

// Inisialisasi Express
const app = express();
const port = 3000;
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Konfigurasi koneksi MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Ganti dengan password MySQL Anda
    database: 'massive' // Ganti dengan nama database Anda
});

// Koneksi ke MySQL
db.connect((err) => {
    if (err) {
        console.error('Koneksi ke MySQL gagal: ' + err.stack);
        return;
    }
    console.log('Terhubung ke MySQL dengan ID ' + db.threadId);
});
app.get("/", (req, res) => {
    res.send("Hello World!");
})

// Endpoint GET
app.get('/api/veterinarians/:id?', (req, res) => {
    const { id } = req.params;

    if (id) {
        db.query('SELECT * FROM veterinarians WHERE id = ?', [id], (err, results) => {
            if (err) {
                res.status(500).send('Terjadi kesalahan server');
                return;
            }

            if (results.length === 0) {
                res.status(404).send('Dokter hewan tidak ditemukan');
            } else {
                res.json(results[0]);
            }
        });
    } else {
        db.query('SELECT * FROM veterinarians', (err, results) => {
            if (err) {
                res.status(500).send('Terjadi kesalahan server');
                return;
            }
            res.json(results);
        });
    }
});

app.post('/api/veterinarians', (req, res) => {
    const newVet = req.body;

    // Pastikan body request berisi data yang benar
    if (!newVet.name || !newVet.img || !newVet.strv || !newVet.specialist || !newVet.star || !newVet.exp || !newVet.price || !newVet.location) {
        res.status(400).send('Data tidak lengkap');
        return;
    }

    // Sisipkan data ke dalam tabel veterinarians
    db.query('INSERT INTO veterinarians SET ?', newVet, (err, result) => {
        if (err) {
            res.status(500).send('Terjadi kesalahan server');
            return;
        }

        res.status(201).json({ id: result.insertId });
    });
});



// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
