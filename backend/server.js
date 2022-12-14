
/* 
๐ฆ๐ฆ๐ฆ Section 3 : express.js (serving & Fetching data from)
๐ฆ๐ฆ๐ฆ c12. npm init, listen, get, find (Serving Products - Back End Routes)
๐root/package.json
๐backend/server.js
๐backend/data/data_projects.js

๐root folder
npm init
npm i express

๐root/package.json
 root folder์์ backend folder์ server.js ์คํ
 
 "start": "node backend/server"



 ๐ฆ๐ฆ๐ฆc14. npm Nodemon, Concurrently 
    ๐package.json

    ๐npm i -D nodemon concurrently
    root folder์์ ์ค์น

    ๐
        "server": "nodemon backend/server",
        "client": "npm start --prefix frontend"

    ๐
    backend/server์์ nodemon ์คํ

    1st. frontend folder ๋จผ์  ๋ค์ด๊ฐ
    2st. npm start


    ๐concurrently
        "dev": "concurrently \"npm run server\" \"npm run client\""

        Q: ํ๋ก ํธ, ๋ฐฑ์๋ ๋๋ค ๋์์ ์คํ์์ผ์ผ ํจ
        1st. run server       , 2st. run frontend


 ๐ฆ๐ฆ๐ฆc15. npm dotenv, Environment Variables
 ๐root/.env
 
*/

const express = require('express');

// ๐c15. npm dotenv
const dotenv = require('dotenv')
dotenv.config()

const products = require('./data/data_products');


const app = express();

app.get('/',(req,res)=>{
    res.send('IG server-get is running');
})

app.get('/api/products',(req,res)=>{

    //๐12-20. res.json(~)
    res.json(products);
})

app.get('/api/products/:id',(req,res)=>{

    //๐12-30 Params์ฌ์ฉ๋ฒ - req.params.id
    const product = products.find((p) => p._id === req.params.id );
    res.json(product);
})


// ๐c15. dotenv

const PORT = process.env.PORT || 5000;

app.listen( PORT, console.log(`IG server-listen 5000 in ${process.env.NODE_ENV} mode on port ${PORT}`) );


// app.listen(5000, console.log('IG server-listen 5000') );