import {simulate} from "./test";

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(require('./webpack.config'));
const express = require('express');
const app = express();
require('express-ws')(app);


app.use(
    middleware(compiler, {stats: false})
);
let client;
app.ws('/', function (ws, req) {
    // console.log(ws)
    client = ws;
    simulate(logJSON);

    // ws.on('message', function (msg) {
    // });

});

export function logJSON(data) {
    const string = JSON.stringify(data)
    console.log(string)
    client.send(string)

}

app.listen(8080);
