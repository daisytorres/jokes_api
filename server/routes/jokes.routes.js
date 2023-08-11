// 1. import the controller
const JokesController = require("../controllers/jokes.controller")

// 2. export a function that reads one argument (app)
module.exports = (app) =>{
    app.get("/api/testing", JokesController.apiTest)
    app.get("/api/jokes", JokesController.allJokes)
    app.get("/api/jokes/:id", JokesController.oneJokes)
    app.post("/api/jokes", JokesController.addJokes)
    app.patch("/api/jokes/:id", JokesController.updateJokes)
    app.delete("/api/jokes/:id", JokesController.deleteJokes)
}

// 3. include all the routes with the corresponding logic from controller