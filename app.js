const express = require('express');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));


const port = process.env.PORT || 80;
try {
    app.get('/',(req, res)=>{
            res.sendFile(__dirname+ '/public/index.html');
    })
    app.get('/contact',(req, res)=>{
            res.sendFile(__dirname+ '/public/contact.html');
    })
} catch (error) {
    console.error('unable to send file to client');
    console.error(error);
    res.send('OOPsy')
}

try {
    app.listen(port, ()=>{
        console.log(`'server running at port : http://localhost:${port}'`);
    })
} catch (error) {
    console.log('server error');
    console.log(error);
}