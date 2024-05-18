const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get(`/about`, (req, res)=> {
    return res.send(`
        <html>
            <head>
                <title>Node Js Server</title>
            </head>
            <body>
                <div>
                    <h1>This is about page for node js server</h1>
                </div>
            </body>
        </html>
    `)
})

// http methods => get, post, put, patch, delete (CRUD methods)

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})