const express = require("express")
require('dotenv').config()
require("./database/db")
const app = express()
const ratingRouter = require("./routes/rating")
const path = require('path');

const port = process.env.PORT || 5000

app.use(express.json())

// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next()
// });

app.use(ratingRouter)

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, './frontend/build')));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname,'./frontend/build/index.html'));
    });
}

app.listen(port,() => {
    console.log('Server has started')
})

