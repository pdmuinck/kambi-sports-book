const bodyparser = require('body-parser')

module.exports = function(server) {
    server.use(bodyparser.json())
    server.use(bodyparser.urlencoded({extended: false}))
} 