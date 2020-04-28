const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3012
const customers = [{
    id: 1,
    name: 'Piyush Das',
    age: '28',
    gender: 'male',
    addresses: [1,2]
}, {
    id: 1,
    name: 'Shivani Thakur',
    age: '28',
    gender: 'female',
    addresses: [2]
}]

const addresses = {
    1: {
        addressLineOne: 'D-161, Mahaveer Zephyr',
        city: 'Bangalore',
        pin: '560076',
        state: 'Karnataka',
        id: 1
    },
    2: {
        addressLineOne: '1802, Tower-6, Uniworld aprtments',
        city: 'Gurgaon',
        pin: '100102',
        state: 'Delhi',
        id: 2
    }
}
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/*
  Versioned API - to fetch all customers for container 1
*/
app.get('/conviva_v1/fetchAllCustomers', (req, res) => {
  res.json(customers)
})

/*
  Versioned API - to fetch all customers for container 1
*/
app.post('/conviva_v1/customer/address', (req, res) => {
  const ids = req.body.addressIds
  const responseObject = []
  if (ids && ids.length) {
      for (const id of ids) {
        responseObject.push(addresses[id])
      }
  }
  res.json(responseObject)
})

app.listen(port, () => console.log(`Conviva app listening on port ${port}!`))