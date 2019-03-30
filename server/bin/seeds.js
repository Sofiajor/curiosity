require('dotenv').config()

const mongoose = require("mongoose")

const Scenario = require("../models/Scenario")
const Question = require('../models/Question')

  let data = [
    {
        title: "TOPIC 1",
        description: "DESCRIPTION FUTURA",
        imageUrl: "",
        questions: [
            {question: 'pregunta1'}, 
            {question: 'pregunta2'}
        ]
    },
    {
        title: "TOPIC 2",
        description: "DESCRIPTION FUTURA",
        imageUrl: "",
        questions: [
            {question: 'pregunta1'}, 
            {question: 'pregunta2'}
        ]
    },
    {
        title: "TOPIC 3",
        description: "DESCRIPTION FUTURA",
        imageUrl: "",
        questions: [
            {question: 'pregunta1'}, 
            {question: 'pregunta2'}
        ]
    },
    {
        title: "TOPIC 14",
        description: "DESCRIPTION FUTURA",
        imageUrl: "",
        questions: [
            { question: 'pregunta1'}, 
            {question: 'pregunta2'}
        ]
      
    }
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
                    // con RES obtenemos el objeto que acabamos de crear, 
                    // necesitamos su ID para asociarlo a las preguntas

                    console.log("El objeto que acabamos de crear:", res)
                    console.log("Necessitamos el ID para asociarlo a las perguntas:", res._id)
                    // console.log('las preguntas son', questions)

                    // mapeamos las preguntas que estaban en el array data
                    // para poder agregar a cada uno de esos objetos el id
                    // del escenario que acabamos de crear en la db
                    questions = scenario.questions
                    questions = questions.map(question => { question.scenario = res._id
                        return question
                    })
                    console.log('las nuevas preguntas son con su scenario', questions )

                    // ahora que ya tenemos las preguntas con el id del escenario
                    // creado, las agregamos a la db
                    Question.insertMany(questions)
                        .then(res => console.log('preguntas agregadas a la DB', res))
                        .catch(err => {console.error('Error connecting to mongo', err)})
                })
        })

    
    })
