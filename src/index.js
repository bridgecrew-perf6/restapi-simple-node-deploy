const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world with express')
})

const port = 3000
app.listen(port, () => {
    console.log('server on port %d', port)
})

/*
npm install
node src/index.js
npm start

GET
http://localhost:3000/
*/