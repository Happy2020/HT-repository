const express = require('express')
var cors = require(`cors`)
const app = express()
const port = 3000

app.use(cors())

app.get('/:id', function (req, res) {
  //const pp = req.params
  //console.log(pp)

  //const bb = req.body
  //console.log(bb)
  const qq = req.query
  console.log(qq)

  res.send('Hello World, Welcome to GET()')
})

app.post('/user/:id', (req, res) => {
  const p = req.params
  console.log(p)
  const b = req.body
  console.log(b)

  res.send({'message': 'Hello World, Welcome to POST()'})
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


// app.get('/user/:id', (req, res) => {
//   const p = req.params;
//   console.log(p.id)

//   //res.send({'userid': p.id})

//   const q = req.query;
//   console.log(q)
//   console.log(q.q)

//   res.send({'message': q.q})
// })

//app.get('/dog', function (req, res) {
//  res.send({'sound': '멍멍'})
//})

//app.get('/cat', function (req, res) {
//  res.send({'sound': '야옹'})
//})

// app.listen(3000)