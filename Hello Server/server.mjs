console.log("I am server file");

import express from 'express'
// const express = require('express') // old so reuired not allow
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("request ip:" , req.ip);
  res.send('Hello Ahmer!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})