const express = require('express')
const router = express.Router()

const Scenario = require('../models/Scenario')
const Question = require('../models/Question')


router.get('/getAllScenarios', (req, res) => {
  Scenario.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.get("/getOneScenario/:id", (req, res) => {
  Scenario.findById(req.params.id)
    .then(data => {console.log(data)})
    .catch(err => console.log(err))
})


router.get("/getQuestions",(req, res) => {
  Question.find({Scenario: req.params.id})
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


router.post("/postScenario", (req, res) => {
  Scenario.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

module.exports = router
