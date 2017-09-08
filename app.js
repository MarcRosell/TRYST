const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')


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
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: 'supersecretworddonottelltoanyone' }));


/* AUTH */

function handleLogin(req, res) {
    const { user } = req
    console.log(req.user)
    req.session.user = user;
    //console.log(req.session)
    console.log('logged');
    res.redirect('/login')
    }


function handleLogout(req, res) {
    req.logout()
    req.session.destroy()
    res.redirect('/')
}

function isAuthenticated (req, res, next) {
  if (req.session.passport.user !== undefined) {
    console.log('is authenticated')
    return next()
  }
  console.log('redirecting to login...')
  res.redirect('/login')
}

app.post('/login', passport.authenticate('local', {session: true}), handleLogin)
app.get('/logout', handleLogout)


const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy({
  usernameField: 'email'
}, User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

/* navigation handling */

app.get('/', (req, res) => {
    res.render('pages/home', {user: req.session.user })
})

app.get('/login', (req, res) => {
    res.render('pages/home', {user: req.session.user })
})

app.get('/user',isAuthenticated, (req, res) => {
    //const { user } = req
    //id = '59ad3ccf6a9878e5c9696dde'
    User
        .findById(req.session.user._id)
        .then(user => {
            res.render('pages/user', { user })
        })
        .catch(err => {
            res.send({
                result: 'KO',
                message: err
            })
        })
})

app.get('/appointments', (req, res) => {
    id = '59ad3ccf6a9878e5c9696dde'
    User
        .findById(id).populate('appointments')
        .then(appoinments => {
            res.render('pages/userAppointments', { appointments })
        })
        .catch(err => {
            res.send({
                result: 'KO',
                message: err
            })
        })
})


/* form handling */

app.post('/search', (req, res) => {
    const { search, category, location, time } = req.body
    Commerce
        .find({ name: new RegExp(search, 'i'), category: new RegExp(category, 'i'), location: new RegExp(location, 'i') })
        .sort({ name: 1 })
        .exec((err, commerces) => {
            if (err) return res.send('search error')

            if (commerces.length === 0) return res.render('pages/noResults', { user: req.session.user })

            res.render('pages/results', { commerces, user: req.session.user })
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
    const { email, password, firstname, lastname } = req.body
    const user = new User({ email, firstname, lastname })
    User.register(user, password, err => {
        console.log('paso por register')
        if (err) {
            return res.send({ success: false, msg: 'Email already exists.' })
        }
        res.redirect('/login');
    })

})

app.post('/api/user/update', (req, res) => {
    var { firstname, lastname, email} = req.body
    User.findByIdAndUpdate(req.session.user._id, { $set: { firstname: firstname, lastname: lastname} })
        .then(() => res.redirect('/user', { user: req.session.user }))
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
                message: 'error while removing appointment',
                error: err
            })
        })
})


app.post('/api/results/', (req, res) => {
    console.log(req.data)
    var { userId, commerceId, serviceName, time } = req.data
    const appointment = new Appoinment({
        user: userId,
        commerce: commerceId,
        service: serviceName,
        date: time
    })

    appointment.save(function(err) {
        if (err) return res.send({
            resutl: 'KO',
            message: 'error creating appointment',
            error: err
        })

        res.send({
            result: 'OK',
            message: 'appointment created successfully'
        })
    });

})

//app.use(routesApp)
app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`)