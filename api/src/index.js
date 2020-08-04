const express = require('express')
const endpoints = require('./setup/endpoints')
const middlewares = require('./setup/middlewares')
const start = require('./setup/start')

const server = express()

middlewares(server)

endpoints(server)

start(server)