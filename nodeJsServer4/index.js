const express = require('express')
const { getDummyController } = require('./controllers/dummyControllers/getDummyController')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// ab ham baat kren gy json mei
app.get(`/json-res-demo`, (req, res)=>{
    return res.json({
        success: true,
        name: "kuch bhi",
        data: "kisi bhi trh ka"
    })
})

// dummy of dummy api
app.get(`/todos/1`, (req, res)=>{
    return res.json({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    })
})

app.get(`/exported-controller`, getDummyController)

app.listen(port, () => {
    console.log(`node js server 4 app listening on http://localhost:${port}`)
})