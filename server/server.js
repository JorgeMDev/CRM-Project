const express = require('express')
const app = express()
const cors = require('cors') // This is new
const port = 8000
app.use(cors()) // This is new
require('./configs/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

require('./routes/customer.routes')(app)
require('./routes/rep.routes')(app)

app.listen(port, () => console.log('Listening on port: 8000'));