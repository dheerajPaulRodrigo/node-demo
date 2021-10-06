const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to NodeJS app in AWS Elastic BeanStalk');
})

app.get('/list', (req, res) => {
    res.send({
        "list": [
            apple,
            banana,
            orange
        ]
    });
})


const port = process.env.port || 3000;
app.listen( port, () => {
    console.log("Hello Express")
});
