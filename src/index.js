const express = require('express');

const app = express();

app.get('/', (req, res)=>{
   res.send("Hello, There 1");
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
});

module.exports = app;