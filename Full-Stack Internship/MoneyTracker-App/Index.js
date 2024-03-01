const print = (data) => console.log(data)

const express = require('express')
const http = require('http')
const fs = require('fs')

const app = express()
app.use(express.static(__dirname + "/Asset"))

app.all('/', function (req, res) {
    if (req.method == 'GET') {
        res.sendFile(__dirname + "/Asset/Index.html")
    }
    else { res.send('Error Occured !') }
})

app.listen(1000,function(err){
    if(err){
        print("Error :"+err)
    }else{
        print("server started")
    }
})