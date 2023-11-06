const https = require('https');
const app = require('./app');
const fs = require('fs');


const port = 3000;


const server = https.createServer({
    key: fs.readFileSync('Keys/privatekey.pem','utf8'),
    cert: fs.readFileSync('Keys/certificate.pem','utf8')
},app)

server.listen(port);