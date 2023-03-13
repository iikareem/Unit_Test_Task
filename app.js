const express = require('express');
const port = 8000;
const app = express();
app.use(express.json());

app.get('/' , (req,res) =>{
    res.send("GET HTTP Method");
});

app.post('/', (req, res) => {
    res.send('POST HTTP Method');
});

app.put('/', (req, res) => {
    res.send('PUT HTTP Method');
});

app.delete('/', (req, res) => {
    res.send('DELETE HTTP Method');
});

app.listen(port,()=>{
    console.log(`Running On Port ${port}`);
})

module.exports = app;