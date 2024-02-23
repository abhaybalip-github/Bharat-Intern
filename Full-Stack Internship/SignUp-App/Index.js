// Node js

const print = (data) => console.log(data)

const express = require('express')
const nodemon = require('nodemon')
const fs = require('fs')
const exp = require('constants')

const app = express()

app.use('/', express.static(__dirname + "/Asset",))

app.get('/app', function (req, res) {
    if (req.errored) {
        print('error occure !')
        app.close()
    }
    else {
        res.sendFile(__dirname + "/Asset/Index.html");
    }
})


app.listen(1000, function (err) {
    print('server started')
})