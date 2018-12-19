const env = require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
	res.send({ message: 'Pong!'})
})

app.use((err,req,res,next) => {
	const status = err.status || 500
	res.status(status).send({error: err})
})

app.use((req,res,next) => {
	res.status(404).json({ message: 'Not Found!' })
})

const listener = () => console.log(`listening on port ${port}`)
app.listen(port,listener)

module.exports = app