const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to Node app in AWS Elastic BeanStalk');
})


const port = process.env.port || 3000;
app.listen( port, () => {
    console.log("Hello Express")
});