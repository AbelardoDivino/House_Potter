// https://potterapi-fedeperin.vercel.app/pt/books
const exrpess = require('express')

const router = exrpess.router()

router.get('/',(req,res)=>{
res.send('https://potterapi-fedeperin.vercel.app/pt/books')
})