const event = require('../sportsbook/event')
const betoffer = require('../sportsbook/betoffer')

module.exports = function(server) {

    server.get('/bookmakers/:book/events', async (req, resp) => {
        await event.getEvents(req.params.book, req.query.sport)
        .then(response => resp.send(response))
        .catch(error => resp.status(404).send(error.message))
    }),

    server.get('/bookmakers/:book/events/:eventId/betoffers', async (req, resp) => {
        await betoffer.getBetOffersByBookMakerAndEventId(req.params.book, req.params.eventId)
        .then(response => resp.send(response))
        .catch(error => resp.status(404).send(error.message))
    })

} 