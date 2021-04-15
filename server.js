const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Groupe:nliKgwthY5Ck3umZ@cluster0.ntfsj.mongodb.net/maze?retryWrites=true&w=majority', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('mongoose ok'))

app.set('view engine', 'ejs')
app.set('views', __dirname, '/views')
app.use(express.static('js'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))

const indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(5501)