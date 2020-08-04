const axios = require('axios')
const bookmakers = require('../resources/bookmakers.json')

const betoffer = {}

betoffer.getBetOffersByBookMakerAndEventId = async (book, eventId) => {

    const bookmakerInfo = Object.entries(bookmakers).filter(pair => pair[0] === book.toUpperCase()).map(pair => pair[1])[0]

    if(!bookmakerInfo) throw new Error('Book not found: ' + book)

    const url = 'https://{base}/offering/v2018/{book}'.replace('{base}', bookmakerInfo.baseUrl).replace('{book}', bookmakerInfo.code)

    return await axios.get(url + '/betoffer/event/' + eventId + '.json').then(response => response.data).catch(error => null)

}


module.exports = betoffer