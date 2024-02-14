const print = (data)=> console.log(data)

const express = require('express')

const app = express()
app.get('/',function(req,res){
    if(! req.errored){
        res.send(__dirname+'Index.html')
    }
    else{
        res.send('Error Occured !')
    }
})

app.post('/send',function(req,res){

})

app.listen(1000,function(){
    print('server started')
})