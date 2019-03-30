const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const scenarioSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  


}, {
  timestamps: true
})

const Scenario = mongoose.model('Scenario', scenarioSchema)
module.exports = Scenario