require('dotenv').config()

const mongoose = require("mongoose")

const Scenario = require("../models/Scenario")
const Question = require('../models/Question')


  let data = [
    // {
    //     title: "Alberto",
    //     description: "Absolute power corrupts absolutely. Sounds like a lot of fun? What if every dang fool in the world actually jumped when you said jump?",
    //     imageUrl: "",
    // },
    // {
    //     title: "Would you rather ?",
    //     description: "Either or neither? You have to choose one. Or do you? Yes you do.",
    //     imageUrl: "",
    //     questions: [
    //         {question: 'Would you rather be really attractive or really funny? '}, 
    //         {question: 'Would you rather be 2.20 meters tall or 1.20meter tall? '},
           
    //     ]
    // },
    // {
    //     title: "Get uncomfortable",
    //     description: "Here we go again, it's time to go even deeper",
    //     imageUrl: "",
    //     questions: [
    //         {question: 'Should animals be used for cosmetic testing?'}, 
    //         {question: 'Would you rather know the date of your death or the cause of your death?'}, 
    //         {question: 'Would you sacrfice your own life to save the life of 100 strangers?'}, 
    //         {question: 'If you knew your friends partner was being unfaithful, would you tell them?'}
    //     ]
    // },
    // {
    //     title: "Ironhack",
    //     description: "For the very freaky, nerdish",
    //     imageUrl: "",
    //     questions: [
    //         {question: 'UX or Web Development?'}, 
    //         {question: 'Bring food from home or go out to eat?'},
    //         {question: 'Have you ever taken something from the Ironhack Kitchen that didnt belong to you?'}, 


    //     ]
      
    // },
    // {
    //     title: "Imaginary situations",
    //     description: "You have been selected to lead a mission to Mars. Before you leave you must some critical decisions..",
    //     imageUrl: "",
    //     questions: [
    //         {question: 'Choose your crew. Who are the three people you will take with you?'}, 
    //         {question: 'How will you spend your last day on earth?'},
    //         {question: 'You can only take 3 things on the mission what would you take?'}, 


    //     ]
      
    // }
]


mongoose.connect(process.env.DB, {useNewUrlParser: true})
    .then(() => {
        console.log(`Connect to mongo ${process.env.DB}`)

        // Vamos a iterar por los escenarios
        data.forEach(scenario => {
                // console.log('('el scenarios es', scenario)

            // como el escenario tambien tiene preguntas, pero esas no las 
            // queremos agregar a la db ahora mismo porque van en otro modelo, 
            // creamos el objeto del escenario que se corresponde a su modelo

            let scenarioToDB = {
                title: scenario.title,
                description: scenario.description,
                imageUrl: scenario.imageUrl
            }          


            // creamos el escenario en la db
            Scenario.create(scenarioToDB)
                .then(res => {
                    mongoose.disconnect()
                    // con RES obtenemos el objeto que acabamos de crear, 
                    // necesitamos su ID para asociarlo a las preguntas

                //     console.log("El objeto que acabamos de crear:", res)
                //     console.log("Necessitamos el ID para asociarlo a las perguntas:", res._id)
                //     // console.log('las preguntas son', questions)

                //     // mapeamos las preguntas que estaban en el array data
                //     // para poder agregar a cada uno de esos objetos el id
                //     // del escenario que acabamos de crear en la db
                //     questions = scenario.questions
                //     questions = questions.map(question => { question.scenario = res._id
                //         return question
                //     })
                //     console.log('las nuevas preguntas son con su scenario', questions )

                //     // ahora que ya tenemos las preguntas con el id del escenario
                //     // creado, las agregamos a la db
                //     Question.insertMany(questions)
                //         .then(res => console.log('preguntas agregadas a la DB', res))
                //         .catch(err => {console.error('Error connecting to mongo', err)})
                 })
        })

    
    })
