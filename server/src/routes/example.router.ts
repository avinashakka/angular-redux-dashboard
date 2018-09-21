import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as request from 'request';

const router = express.Router();

function importJSON(filePath: string) {
    if (!filePath) {
        return [];
    }
    return JSON.parse(fs.readFileSync(path.join(__dirname, filePath), 'utf8'));
}

router.get('/list/:ip', (req, res) => {
    let usageIps = 20;
    const response = {};
    while (usageIps > 0) {
        response[Math.floor( Math.random() * 255)] = Math.floor( Math.random() * 100) + 1;
        usageIps--;
    }
    res.status(200).send(response);
});

router.get('/inventory', (req, res) => {
    res.status(200).send(importJSON('../data/inventory.json'));
});

export { router };
