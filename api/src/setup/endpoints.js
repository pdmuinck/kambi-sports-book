module.exports = function(server) {

    server.get('/', function(req, resp) {

        resp.send('Hello World!')
    })

} 