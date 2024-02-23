// Node js

const print = (data) => console.log(data)

const express = require('express')
const nodemon = require('nodemon')
const fs = require('fs')
const mongo = require('mongodb')
const exp = require('constants')
const { emitWarning } = require('process')

function store_data(data){
    var cli = mongo.MongoClient
    cli.connect('localhost:27017',{ useNewUrlParser: true, useUnifiedTopology: true },function(err,client){
        
    })
}

const app = express()

app.use('/', express.static(__dirname + "/Asset",))

app.get('/', function (req, res) {
    if (req.errored) {
        print('error occure !')
        app.close()
    }
    else {
        res.sendFile(__dirname + "/Asset/Index.html");
    }
})

app.use(express.urlencoded())

app.post('/thanks',function(req,res){
    if(! req.errored){
        print(req.body)
        store_data(req.body)
        res.sendFile(__dirname+'/Asset/Thanks.html')
    }
})

app.listen(1000, function (err) {
    print('server started')
})