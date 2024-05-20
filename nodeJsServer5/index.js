const express = require('express')
const cors = require('cors')

const dummyGetController = require('./controllers/dummyControllers/dummyGetController')
const app = express()
app.use(cors())

const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// dummy route with a controller function
app.get(`/dummy-get-request`, dummyGetController)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})