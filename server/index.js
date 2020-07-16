const express = require ('express');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'http://localhost'
const path = require ('path');
const fs = require ('fs');
const multer = require('multer')
const upload = multer({})
const headers = require('../cors.json')
const { insertRow } = require('../db/index.js')
const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();


const app = express();


app.use(express.static(path.join(__dirname, '../public/dist')));

app.post('/submit', upload.none(), (req, res) => {
  if (req.body.username) {
    insertRow(`INSERT INTO users (username) VALUES ('${req.body.username}')`);
  }
  res.set(headers);
  res.sendStatus(200);
});

app.post('/search', upload.none(), (req, res) => {
  let search = req.body.search;

  (async () => {
    try {
        const productList = await stockX.newSearchProducts(search, {
          limit: 5
        });

      res.set(headers);
      res.status(200).json({ productList })
    }
    catch(e){
        console.log('Error: ' + e.message);
    }
})();
});









app.listen(port, () => {
  console.log(`Express server listening on ${host}:${port}`)
});