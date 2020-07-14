const express = require ('express');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'http://localhost'
const path = require ('path');
const fs = require ('fs');


const app = express();


app.use(express.static(path.join(__dirname, '../public/dist')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/react/dist/')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/react-dom/dist/')));












app.listen(port, () => {
  console.log(`Express server listening on ${host}:${port}`)
})