const express = require('express')
const router  = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})


//GET INFO FROM DATABASE TO SEARCHBAR
//router.post('/getInfo', (req,res,next) =>{
//Scenario.find()
//.then(data => res.json(data)
//.catch(err => console.log("An error ocurred: ", err))


module.exports = router
