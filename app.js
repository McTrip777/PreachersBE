const express = require('express')
const stripe = require('stripe')('sk_test_51HTvCaChrB4Xa688IOPJkkyHPAbnxwRmhqGvLxoXjLyPk1NztmRmib5yVnh5r6mZ2UfRhRMsDTxFRvuNbKYvFxra00Wcd2JZ7w')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Static Folder
app.use(express.static(`${__dirname}/public`))

// Index route
app.get('/', (req, res) => {
    res.render('index')
})

const port = process.env.port || 5000

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})

