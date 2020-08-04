const event = require('../sportsbook/event')

module.exports = function(server) {

    server.get('/bookmakers/:book/events', async (req, resp) => {
        await event.getEvents(req.params.book, req.query.sport)
        .then(response => resp.send(response))
        .catch((error) => {
            resp.status(404).send(error.message)
        })
    }),

    server.get('/bookmakers/:book/betoffers', async (req, resp) => {

    })

} 