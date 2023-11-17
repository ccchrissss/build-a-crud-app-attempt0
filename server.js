const express = require('express')
const bodyParser = require('body-parser')

const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://crispychris:dontpushmongobro>@cluster0.wpctn92.mongodb.net/?retryWrites=true&w=majority";
const connectionString = 'mongodb+srv://crispychris:dontpushmongobro@cluster0.wpctn92.mongodb.net/?retryWrites=true&w=majority'


// const MongoClient = require('mongodb').MongoClient

const app = express()

MongoClient.connect( connectionString )
  // {
     //we dont need the below line. it is deprecated
     // useUnifiedTopology: true,
  // },
  .then( client => {
    console.log('connected to database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.use()
    app.get()
    app.post()
    app.listen()
  })
  .catch( error => console.error(error))




app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function () {
  console.log('listening on 3000')
})



// app.get( endpoint, callback )
// app.get( /, function( req, res ) )
// app.get('/', function(req, res) {
//   res.send('Hello, world!')
// })

// using an es6 arrow function:
// app.get('/', (req, res) => {
//   res.send('Hello, world!')
// })

// app.get('/test-page', (req, res) => {
//   res.send('Gotta catch em all, Pokemon!')
// })



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// testing 
// app.get('/pokemon', (req, res) => {
//   res.sendFile(__dirname + '/pokemon.html')
// })



// app.post('/quotes', (req, res) => {
//   console.log('HelloooOOooOOooOOoo')
// })

app.post('/quotes', (req, res) => {
  console.log(req.body)
  quotesCollection
    .insertOne(req.body)
    .then(results => {
      console.log(result)
    })
    .catch(error => console.error(error))
})








// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// },
//  (err, client) => {
//   if (err) return console.error(err)
//   console.log('Connected to database')
// });
