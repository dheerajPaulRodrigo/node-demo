const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to the Node app deployed in AWS');
})


const port = process.env.port || 5000;
app.listen( port, () => {
    console.log("Hello Express")
});
