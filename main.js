const express = require(`express`);
const index = require('./routes/index.js');
const path = require('path');
const ejs = require('ejs');
const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

const logger = (req,res,next) => {
    const method = req.method;
    const time = new Date();
    const url = req.url;
    console.log(`${method} - ${url} - ${time}`);
    next();
}

app.use(logger);
app.use(express.static(__dirname + '/public'));
app.use('/',index);

app.all('*', (req,res)=>{
    res.status(404).send("page not found 404");
})

app.listen(9090, ()=> {
    console.log("server is now listening in port 9090");
});