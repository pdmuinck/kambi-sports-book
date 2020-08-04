# kambi-sports-book
An API that provides sports betting data from sport book provider Kambi.

## API examples
GET /bookmakers/UNIBET_BELGIUM/events?sport=football&sport=tennis
returns all events for given sports.

GET /bookmakers/UNIBET_BELGIUM/events/{eventid}/betoffers
returns all betoffers for given event id.

## Supported bookmakers
- UNIBET_BELGIUM
- UNIBET_ITALY
- UNIBET_NEW_JERSEY
- UNIBET_PENNSYLVANIA
- UNIBET_CANADA
- UNIBET_AUSTRALIA
- UNIBET_ESTONIA
- UNIBET_LATVIA
- UNIBET_POLAND
- UNIBET_GREECE
- UNIBET_ROMANIA
- UNIBET_GERMANY
- UNIBET_UK
- UNIBET_IRELAND
- UNIBET_SWEDEN
- UNIBET_DENMARK
- NAPOLEON_GAMES
- DRAFT_KINGS
- 32RED
- PAF
- GROSVENOR
- 888_SPORT
- STANLEYBET_ROMANIA
- BETWARIOR
- PARX_CASINO
- MYBET
- REDBET
- BETPLAY

## Running
Install Node v12.6.0 or higher.
cd to /api/src and run ```node index```
The webserver will launch and listen to port 3000 by default.

## Contribute
If you are aware of bookmakers that are not listed here in the readme, please add the bookmaker and create a pull request.

## License
[MIT](https://choosealicense.com/licenses/mit/)
