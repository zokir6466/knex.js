const express = require('express')
const app = express()
const home = require('./routes/home')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', home)

app.listen(3000, console.log('Port: 3000'))