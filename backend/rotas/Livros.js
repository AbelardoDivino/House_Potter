const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app/pt/books')
        const data = await response.json()
        res.json(data)
    } catch (err) {
        res.status(500).json({ erro: err.message })
    }
})

module.exports = router
