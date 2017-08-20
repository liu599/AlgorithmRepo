/*eslint no-console: 0*/

const express = require('express')

const app = express()

const SERVER_PORT = 3009

app.use(express.static('dist'))

app.listen(SERVER_PORT, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', SERVER_PORT)
});
