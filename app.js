const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')


const PORT = process.env.PORT || 3000

const app = express()

app.set('view engine', 'pug')

/* models loading */

const User = require('./models/User')
const Commerce = require('./models/Commerce')

/* orm setup */

const urlDB = process.env.urlDB || 'mongodb://localhost:27017/tryst'

mongoose.Promise = Promise
mongoose.connect(urlDB, { useMongoClient: true })
console.log(`db is connected to ${urlDB}`)

/* express setup */

app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* navigation handling */

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/configuration', (req, res) => {
    res.render('pages/config')
})

app.get('/appointments', (req, res) => {
    res.render('pages/appointments')
})

app.get('/user', (req, res) => {
    res.render('pages/user')
})

/* form handling */

app.post('/search', (req, res) => {
    const query = req.body.query

    Commerce
        .find({ name: new RegExp(query, 'i') })
        .sort({ name: 1 })
        .exec((err, commerces) => {
            if (err) return res.send('search error')

            if (commerces.length === 0) return res.send('no results')

            res.render('pages/results', { commerces })
        })
})

/* api handling */

app.get('/api/user/:id', (req, res) => {
    const id = req.params.id
    User
        .findById(id)
        .then(user => {
            res.send({
                result: 'OK',
                message: 'User found correctly',
                data: user
            })
        })
        .catch(err => {
            res.send({
                result: 'KO',
                message: err
            })
        })
})

app.post('/api/register', (req, res) => {
    const { firstname, lastname, email, password } = req.body
    const user = new User({ firstname: firstname, lastname: lastname, email: email, password: password, image: image })
        (user, password, err => {
            if (err) {
                return res.redirect('/home')
            }
            res.redirect('/home')
        })
})

app.post('/api/user/update', (req, res) => {
    var { _id, firstname, lastname, email, password } = req.body
    User.findByIdAndUpdate(_id, { $set: { firstname: firstname, lastname: lastname, email: email, password: password, image: image } }, function(err, tank) {
        res.redirect('/user#!/profile')
    })
})

app.get('/api/user/:id', (req, res) => {
    const id = req.params.id
    User
        .findById(id)
        .then(user => {
            res.send({
                result: 'OK',
                message: 'User appointments found correctly',
                data: user.appointments
            })
        })
        .catch(err => {
            res.send({
                result: 'KO',
                message: err
            })
        })
})


app.put('/api/user/:id/remove/:appointmentDate', (req, res) => {
    var { id, appointmentDate } = req.params
    console.log(id, appointmentDate)
    User.findByIdAndUpdate(id, { $pull: { appointments: { date: appointmentDate } } })
        .then(data => {
            res.send({
                result: 'OK',
                message: 'appoinments removed correctly',
                data: data
            })
        })
        .catch(err => {
            res.send({
                result: 'KO',
                message: err
            })
        })
})


app.put('/api/book/:id', (req, res) => {
    var { id } = req.params
    Commerce.findByIdAndUpdate(id, { $push: { appointments: { date: appointmentDate } } })
        .then(data => {
            res.send({
                result: 'OK',
                message: 'appoinment added correctly',
                data: data
            })
        })
        .catch(err => {
            res.send({
                result: 'KO',
                message: err
            })
        })
})





//app.use(routesApp)
app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`)