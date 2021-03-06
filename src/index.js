const express = require('express');

const app = express();

app.get('/', (req, res)=>{
   res.send("Hello, Therepm");
});
app.get('/crash', (req, res)=>{
    throw new Error("App crashed");
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
});

module.exports = app;