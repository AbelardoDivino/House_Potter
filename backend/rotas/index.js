const express = require('express')
const router = express.Router()

const casas = require('./Casas')
const feitico = require('./Feitiço')
const livros = require('./Livros')
const personagem = require('./Personagem.')

router.use('/casas', casas)
router.use('/feitico', feitico)
router.use('/livros', livros)
router.use('/personagem', personagem)

module.exports = router
