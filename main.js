const express = require(`express`);
const app = express();

const logger = (req,res,next) => {
    const method = req.method;
    const time = new Date();
    const url = req.url;

    console.log(`${method} - ${url} - ${time}`);
    next();
}
app.use(logger);
app.use(express.static('./public'));

app.all('*', (req,res)=>{
    res.status(404).send("page not found 404");
})



app.listen(9090, ()=> {
    console.log("server is now listening in port 9090");
});