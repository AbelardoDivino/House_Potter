const env = require('dotenv').config()
const mysql = require('mysql2')
const expres = require('express')
const app = expres()

const conect =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"casasharrypotter"
})

conect.connect((err)=>{
    if (err) {
        console.log("erro ao conectar o servidor",err)
    }
    else{
        console.log("conectado")
    }
})


app.listen(3000,function(){
    console.log('server running')
})

