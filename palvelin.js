const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const { port, host } = require('./config.json');
const tietokantakerros = require('./tietokannat/tietokanta')
const express = require('express');


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'sivustot'));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {


  const indexPath = path.join(__dirname, '/index.html');

  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html:', err);
      res.writeHead(500);
      res.end('Palvelimen ongelma');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});
app.get('/kaikkiFestivaalit.html', (req, res) => {

  tietokantakerros.fetchFestaritData((err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error fetching festarit data');
    } else {
      console.log(data);
      res.render('kaikkiFestivaalit', {
        data: data,
      });
    }
  });
});

app.get('/kaikkiArtistit.html', (req, res) => {

  tietokantakerros.fetchArtistitData((err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error fetching festarit data');
    } else {
      console.log(data);
      res.render('kaikkiArtistit', {
        data: data,
      });
    }
  });
});

app.get('/enitenArtisteja.html', (req, res) => {

  tietokantakerros.fetchEnitenArtistejaData((err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error fetching festarit data');
    } else {
      console.log(data);
      res.render('enitenArtisteja', {
        data: data,
      });
    }
  });
});

app.get('/ajankohdanMukaan.html', (req, res) => {

  tietokantakerros.fetchAjankohdanMukaanData((err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error fetching festarit data');
    } else {
      console.log(data);
      res.render('ajankohdanMukaan', {
        data: data,
      });
    }
  });
});

app.get('/tiettyArtisti.html', async (req, res) => {
  const artisti_req = req.query.artisti;
  try {
    const artisti = await tietokantakerros.fetchTiettyArtistiData(artisti_req);
    res.render('tiettyArtisti', { data: artisti });
  }
  catch (err) {
    console.log(err)
    res.json({
      virhe: 'Tietokantahaku epäonnistui.'
    })
  }
  // tietokantakerros.fetchTiettyArtistiData((err, data, artisti) => {
  //   if (err) {
  //     res.writeHead(500);
  //     res.end('Error fetching festarit data');
  //   } else {
  //     console.log(data);
  //     res.render('tiettyArtisti', {
  //       data: data,
  //     });
  //   }
  // });
});

app.get('/tiettyKaupunki.html', async (req, res) => {
  const kaupunki_req = req.query.kaupunki;
  try {
    const kaupunki = await tietokantakerros.fetchTiettyKaupunkiData(kaupunki_req);
    res.render('tiettyKaupunki', { data: kaupunki });
  }
  catch (err) {
    console.log(err)
    res.json({
      virhe: 'Tietokantahaku epäonnistui.'
    })
  }
});



app.listen(port, host, () => {
  console.log(`Palvelin kuuntelee portissa http://${host}:${port}`);
});
