const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const db = require('../nodesndri/connection.js')
const response = require('../nodesndri/response.js')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    const sqlMahasiswa = "SELECT * FROM tableDatabaseKamu"
    db.query(sqlMahasiswa,(error, result) => {
        response(200, result, "Berhasil Dapat semua data ", res)
    })
})

app.get('/hello', (req, res)=>{
   res.send()

})

app.put('/username',(req, res)=>{
    console.log({updateData : req.body})
    res.send('update berhasil')
})

app.post('/login',(req, res)=> {
    console.log({requestFromOutside : req.body})
    res.send('omedeto login berhasil desu')
})

app.listen(port,()=>{
    console.log(`Server berjalan di port ${port}`)
})
