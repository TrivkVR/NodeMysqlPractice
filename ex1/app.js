const planet = require('./db/planets')
const express = require('express');

const app = express();
const planetRouter = require('./routes/planetRouter')
app.use('/planets',planetRouter)

app.listen(3000,() => {

    console.log('Connected to port 3000')
})
