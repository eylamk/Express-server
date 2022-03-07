const express = require(`express`);
const app = express();

const logger = (req,res,next) => {
    const method = req.method;
    const time = new Date();
    const url = req.url;

    console.log(`${method} - ${url} - ${time}`);
}
app.use(logger);

app.get('/', (req,res)=>{
    res.send('hello');
})



app.listen(9090);