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
    .populate("questions")
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(err => console.log(err))
})


router.get("/getQuestions", (req, res) => {
  Question.find({
      Scenario: req.params.id
    })
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


router.post("/postScenario", (req, res) => {
  Scenario.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


router.post("/createQuestion", (req, res) => {
  console.log(req.body)
  const newQuestion = {
    question: req.body.question
  }
  Question.create(newQuestion)
    .then(question => {
      return Scenario.findByIdAndUpdate(req.body.scenarioId, {$push: {questions: question._id}})
    })
    .then(scenario => res.json(scenario))
})












module.exports = router