const axios = require('axios')
const bookmakers = require('../resources/bookmakers.json')

const requests = {
    "FOOTBALL": 'https://{base}/offering/v2018/{book}/event/group/1000093190.json?includeParticipants=true&lang=en_GB&market=BE',
    "BASKETBALL": 'https://{base}/offering/v2018/{book}/event/group/1000093204.json?includeParticipants=true&lang=en_GB&market=BE',
    "AMERICAN FOOTBALL": 'https://{base}/offering/v2018/{book}/event/group/1000093199.json?includeParticipants=true&lang=en_GB&market=BE',
    "TENNIS": 'https://{base}/offering/v2018/{book}/event/group/1000093193.json?includeParticipants=true&lang=en_GB&market=BE',
    "TABLE TENNIS": 'https://{base}/offering/v2018/{book}/event/group/1000093215.json?includeParticipants=true&lang=en_GB&market=BE',
    "DARTS": 'https://{base}/offering/v2018/{book}/event/group/1000093225.json?includeParticipants=true&lang=en_GB&market=BE',
    "ICE HOCKEY": 'https://{base}/offering/v2018/{book}/event/group/1000093191.json?includeParticipants=true&lang=en_GB&market=BE',
    "AUSTRALIAN RULES": 'https://{base}/offering/v2018/{book}/event/group/1000449347.json?includeParticipants=true&lang=en_GB&market=BE',
    "BOXING": 'https://{base}/offering/v2018/{book}/event/group/1000093201.json?includeParticipants=true&lang=en_GB&market=BE',
    "CRICKET": 'https://{base}/offering/v2018/{book}/event/group/1000093178.json?includeParticipants=true&lang=en_GB&market=BE',
    "ESPORTS": 'https://{base}/offering/v2018/{book}/event/group/2000077768.json?includeParticipants=true&lang=en_GB&market=BE',
    "GOLF": 'https://{base}/offering/v2018/{book}/event/group/1000093187.json?includeParticipants=true&lang=en_GB&market=BE',
    "BASEBALL": 'https://{base}/offering/v2018/{book}/event/group/1000093211.json?includeParticipants=true&lang=en_GB&market=BE',
    "RUGBY LEAGUE": 'https://{base}/offering/v2018/{book}/event/group/1000154363.json?includeParticipants=true&lang=en_GB&market=BE',
    "RUGBY UNION": 'https://{base}/offering/v2018/{book}/event/group/1000093230.json?includeParticipants=true&lang=en_GB&market=BE',
    "SNOOKER": 'https://{base}/offering/v2018/{book}/event/group/1000093176.json?includeParticipants=true&lang=en_GB&market=BE',
    "MMA": 'https://{base}/offering/v2018/{book}/event/group/1000093238.json?includeParticipants=true&lang=en_GB&market=BE',
    "VOLLEYBALL": 'https://{base}/offering/v2018/{book}/event/group/1000093214.json?includeParticipants=true&lang=en_GB&market=BE',
    "WRESTLING": 'https://{base}/offering/v2018/{book}/event/group/2000089034.json?includeParticipants=true&lang=en_GB&market=BE',
}

const event = {}

event.getEvents = async (book, sports) => {
    const bookmakerInfo = Object.entries(bookmakers).filter(pair => pair[0] === book.toUpperCase()).map(pair => pair[1])[0]

    if(!bookmakerInfo) throw new Error('Book not found: ' + book)
    
    if(sports) {
        const sportsUpperCase = sports.map(sport => sport.toUpperCase())
        return resolve(Object.entries(requests).filter(pair => sportsUpperCase.includes(pair[0])).map(pair => createRequest(pair[1], book.toUpperCase(), bookmakerInfo)))
    } else {
        return resolve(Object.values(requests).map(url => createRequest(url, book.toUpperCase(), bookmakerInfo)))
    }
}

function createRequest(url, bookmakerName, bookmakerInfo) {
    return axios.get(url.replace('{book}', bookmakerInfo.code).replace('{base}', bookmakerInfo.baseUrl)).then(response => {return {provider: 'KAMBI', book: bookmakerName, events: response.data.events}}).catch(error => null)
}

async function resolve(requests) {
    let events
    await Promise.all(requests).then((values) => {
        events = values
    })
    return events
}

module.exports = event