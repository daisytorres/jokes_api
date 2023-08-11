// 1. import the model
const Jokes = require ("../models/jokes.model")

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res)=>{
    res.json({message: "ok"})
}

// Example: 
module.exports.allJokes = (req, res)=>{
    Jokes.find() //does not need a criteria since we are brining everything (list of objects)
        .then(jokesList => res.json (jokesList))
        .catch(err => res.json (err))
}

module.exports.oneJokes = (req, res)=>{
    Jokes.findOne({_id: req.params.id}) //should give a key: value pair (the _id is from mongodb and the .id is taking it from the URL)
    .then(oneJoke => res.json (oneJoke))
    .catch(err => res.json (err))
}

module.exports.addJokes = (req, res)=>{
    Jokes.create(req.body) //needs to have an object w/ all info from model/schema 
    .then(newJokes => res.json (newJokes))
    .catch(err => res.json (err))
}

module.exports.updateJokes = (req, res)=>{
    Jokes.findOneAndUpdate( //need 3 arguments:
        {_id: req.params.id}, // criteria
        req.body,//form data (info) that is going to be updated
        {new:true, runValidators: true} //how to recieve/run info: we want the updated information (response) and ensure validators are running
    )
    .then(updatedJokes => res.json (updatedJokes))
    .catch(err => res.json (err))
}

module.exports.deleteJokes = (req, res)=>{
    Jokes.deleteOne ({_id: req.params.id})
    .then( status => res.json(status))
    .catch(err => res.json (err))
}