const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const ComerceSchema = require('./models/Comerce')

const PORT = process.env.PORT || 3000

const app = express()

app.set('view engine', 'pug')
 
const User = require('./models/User')
const Comerce = require('./models/Comerce')

const urlDB = process.env.urlDB || 'mongodb://localhost:27017/tryst'

mongoose.Promise = Promise
mongoose.connect(urlDB, {useMongoClient: true})
console.log('db is connected to ${urlDB}')

app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req,res) => {
  res.render('pages/home')
})


app.get('/configuration', (req,res) => {
  res.render('pages/config')
})

app.get('/appointments', (req,res) => {
  res.render('pages/appointments')
})

app.get('/config', (req,res) => {
  res.render('pages/user')
})

app.get('/results', (req,res) => {
	// var comerces = require('./data/commerces.json')
	// NOTE ir a mongo y recoger datos...
  	// res.render('pages/results', { comerces })
  	ComerceSchema
  		.find()
  		.then(commerce => res.render('pages/results', { commerce }))

})

app.post('/create-item', (req, res) => {
})

//app.use(routesApp)
app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`) 

