require('dotenv').config()
const mysql = require('mysql2')

const express = require('express')  // "expres" → "express"
const app = express()


const conect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})


conect.connect((err)=>{
    if (err) {
        console.log("erro ao conectar o servidor",err)
    }
    else{
        console.log("conectado")
    }
})

const rotas = require('./rotas')

app.use('/api', rotas)

app.listen(3000,function(){
    console.log('server running')
})

