const express = require('express')
const router = express.Router()
const Highscore = require('../models/highscore')

router.get('/', async (req, res) => {

    const highscore = await Highscore.findOne({}).sort({'score': -1})

    res.render('view/index', {highscore})
    
})

router.get('/list', async (req, res) => {    
    const list = await Highscore.find({})
                                .sort({'score': -1})
                                .limit(5)
    
    res.render('view/conn.ejs', {
        list
    })
})

router.get('/post', (req, res) => {
    res.render('view/postScore')
})

router.post('/post/submit', (req, res) => {
    
    new Highscore({
        username: req.body.nom,
        score: req.body.score
    }).save()

    res.redirect('/')
})

module.exports = router
