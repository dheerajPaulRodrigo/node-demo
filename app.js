const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to the Node App deployed in AWS');
})


const port = process.env.port || 3000;
app.listen( port, () => {
    console.log("Hello Express")
});