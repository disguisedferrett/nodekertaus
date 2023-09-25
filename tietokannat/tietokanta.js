// tietokantakerros.js
const mysql = require('mysql');
const { host, user, password, database } = require('./sqlConfig.json');

// Create the database connection
const connection = mysql.createConnection({
    host,
    user,
    password,
    database
  });
  

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Virhe yhdistäessä tietokantaan: ', err);
    } else {
        console.log('Yhdistetty tietokantaan!');
    }
});

function fetchFestaritData(callback) {
    const query = 'SELECT * FROM festivaalit';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching festarit data:', err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

function fetchArtistitData(callback) {
    const query = 'SELECT * FROM artistit';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching artistit data:', err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

function fetchEnitenArtistejaData(callback) {
    const query = `
    SELECT Nimi, Aika, Paikka, Artistit
    FROM festivaalit
    WHERE LENGTH(Artistit) - LENGTH(REPLACE(Artistit, ',', '')) + 1 = (
        SELECT MAX(LENGTH(Artistit) - LENGTH(REPLACE(Artistit, ',', '')) + 1)
        FROM festivaalit
    );
`;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching artistit data:', err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

function fetchAjankohdanMukaanData(callback) {
    const query = "SELECT * FROM festivaalit ORDER BY Aika";

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching artistit data:', err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}
function fetchTiettyArtistiData(artisti) {
    return new Promise( async (resolve,reject) => {
        connection.query('SELECT Paikka, Nimi FROM festivaalit WHERE Artistit LIKE ?', ["%"+artisti+"%"],
        (err, rivit) =>{
            if (err){
                // jos tapahtui virhe, perutaan lupaus
                reject(err);
            }

            let vastaus = [];
            for (let rivi of rivit) {
                vastaus.push({
                    Nimi: rivi.Nimi,
                    Paikka: rivi.Paikka,
                    Kuvaus: rivi.Kuvaus,
                });
            }

            // jos kaikki meni hyvin, täytetään lupaus pyydetyllä datalla
            resolve(vastaus);
       });

    });
}

function fetchTiettyKaupunkiData(festivaali) {
    return new Promise( async (resolve,reject) => {
        connection.query('SELECT Paikka, Artistit FROM festivaalit WHERE Nimi LIKE ?', ["%"+festivaali+"%"],
        (err, rivit) =>{
            if (err){
                // jos tapahtui virhe, perutaan lupaus
                reject(err);
            }

            let vastaus = [];
            for (let rivi of rivit) {
                vastaus.push({
                    Nimi: rivi.Nimi,
                    Artistit: rivi.Artistit,
                    Aika: rivi.Aika,
                    Paikka: rivi.Paikka,
                    Kuvaus: rivi.Kuvaus,
                });
            }

            // jos kaikki meni hyvin, täytetään lupaus pyydetyllä datalla
            resolve(vastaus);
       });

    });
}




    // connection.query(query, [artisti], (err, results) => {
    //     if (err) {
    //         console.error('Error fetching artistit data:', err);
    //         callback(err, null);
    //     } else {
    //         callback(null, results);
    //     }
    // });


function lopetaYhteys() {
    connection.end();
  }

module.exports = { fetchFestaritData, fetchArtistitData, fetchEnitenArtistejaData, fetchAjankohdanMukaanData, fetchTiettyArtistiData, fetchTiettyKaupunkiData, lopetaYhteys };