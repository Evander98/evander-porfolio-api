const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 2000

const { mailerRouter } = require('./router')

app.use(bodyParser.json())
app.use(cors())

app.use('/mail', mailerRouter)

app.get('/', (req, res) => {
    res.send('<h1>Welcome to API</h1>')
})


app.listen(port, () => console.log('Server Running on Heroku Port ' + port))