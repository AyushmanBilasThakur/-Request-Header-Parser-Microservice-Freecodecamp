const Express = require('express');
const cors = require('cors');
const path = require('path');

const app = Express();
const PORT = process.env.PORT || 3000;


app.set('trust proxy', true);

app.use(cors());
app.use('/static',Express.static('static'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/api/whoami', (req,res) => {
    let response = {};
    ipaddress = req.header('X-Forwarded-For').split(',')[0];
    language = req.headers['accept-language'];
    software = req.headers['user-agent'];
    response = {
        ipaddress,
        language,
        software
    }
    res.send(response);
});


app.listen(PORT, () => {
    console.log(`Serever on port ${PORT}`);
});