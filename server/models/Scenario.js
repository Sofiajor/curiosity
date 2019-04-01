const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const scenarioSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  questions:  [{
        type: Schema.Types.ObjectId, 
        ref: "Question"
        }]
  


}, {
  timestamps: true
})

const Scenario = mongoose.model('Scenario', scenarioSchema)
module.exports = Scenario











// ------------------------Sofia INFO----------------------------------

// populate():lets you reference documents in other collections
//properties we use .populate(): need a type of mongoose.Schema.Types.ObjectId
//This tells Mongoose “Hey, I’m gonna be referencing other documents from other collections”
//next part of that property:ref --> tells Mongoose “Those docs are going to be in the ___ collection.”.