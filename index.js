'use strict'

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const server = awsServerlessExpress.createServer(app);

console.log("LAMBDA RUNNING");
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)

