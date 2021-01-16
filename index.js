const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 2000

const { mailerRouter } = require('./router')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Welcome to API</h1>')
})

app.use('/mail', mailerRouter)

app.listen(port, () => console.log('Server Running on Heroku Port ' + port))