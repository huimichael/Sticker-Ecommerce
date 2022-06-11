const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Password123',
    database: 'StickerEcommerce',
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;

    db.query("INSERT INTO stickers (name, description, price) VALUES (?, ?, ?)",
    [name, description, price],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values inserted")
        }
    });
});

app.get('/stickers', (req, res) => {
    db.query("CALL `View_AllStickers_Proc`", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
})