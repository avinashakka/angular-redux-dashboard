import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as fs from 'fs';
import * as compression from 'compression';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());
app.use(express.static(path.join(__dirname, '../../src')));

app.use('/api/v1/test', (req, res) => {
    res.json({
        name: 'Test',
        state: 'CA'
    });
});
http.createServer(app).listen(port);
console.log(`API server listening on port ${port}`);
