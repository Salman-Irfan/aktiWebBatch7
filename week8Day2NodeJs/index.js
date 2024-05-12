// express js server
// automatci express js k server ko is project mei install krny ka
// npm => node package manager

// 1. express server

// Dont Try This at Home, School or any where
// const express = require('express');
// const app = express(); // app ko express ka server mil gya

// app.listen(3000, ()=>{
//     console.log(`server is running`)
// })
// Dont Try This at Home, School or any where

const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!') // plain text
})

// another get
app.get(`/about`, (req, res) => {
    return res.send(
        `<head>
            <script src=""talwd></script>
        </head>
        <body>
            <div>
                <p>kjd sdfj</p>
            </div>
        </body>`
    )
})

// get api json response:
app.get(`/get-json`, (req, res) => {
    return res.json({
        id: 1,
        name: "haroon",
        email: "haroon@gmail.com",
        password: "loremIpsum"
    })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})