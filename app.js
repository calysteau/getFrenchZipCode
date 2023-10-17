if (typeof(PhusionPassenger) !== 'undefined') {
    PhusionPassenger.configure({ autoInstall: false });
}

var express = require('express');
var mysql = require('mysql');

var app = express();

// Configuration de la base de données
var db = mysql.createConnection({
    host: '<your host',
    user: '<your user>',
    password: '<your password>',
    database: '<your database>'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');
});

app.get('/getFrenchZipCode', (req, res) => {
    var { x, y, d } = req.query;

    // Cette requête est simplifiée pour l'exemple.
    var query = `
        SELECT * FROM fr_lapostezipcode 
	WHERE ST_Distance_Sphere(SHAPE, ST_GeomFromText(CONCAT('POINT(', ?, ' ', ?, ')'))) < ?;
    `;

    db.query(query, [x, y, d],(err, results) => {
        if (err) {
            console.error("Erreur dans la requête:", err);
            res.status(500).json({ error: "Erreur dans la requête." });
            return;
        }
        res.json(results);
    });
});
 
if (typeof(PhusionPassenger) !== 'undefined') {
    app.listen('passenger');
} else {
    app.listen(3000);
}