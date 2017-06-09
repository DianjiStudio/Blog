const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendfile('./public/index.html');
});

app.get('/quin',(req,res)=>{
    res.send('guna');
});

const server = app.listen(12450,()=>{
    let host = server.address().address;
    let port = server.address().port;

    console.log('Server run at http://%s:%s',host,port);
});