const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const perguntaSchema = new Schema({
   authorRole: [{
    type: String,
    enum: ['Administrator', 'Explorer']
  }],
   question: String,
   

}, {
   timestamps: true
})

const Question = mongoose.model('Question', perguntaSchema);
module.exports = Question;


















   // Scenario: { type: mongoose.Schema.Types.ObjectId, ref: 'Scenario' },











