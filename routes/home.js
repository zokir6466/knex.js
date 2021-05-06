const express = require('express')
const router = express.Router()
const data = require('../models/data')

router.get("/", async (req, res) => {
    let json = await data()
    res.send(json)
})

module.exports = router