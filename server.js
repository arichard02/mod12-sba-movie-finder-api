// config our evnviroment variables
import "dotenv/config"

// bring in express
import express from "express";

// create express app
const app = express();

// bring in movie routes
import movieRoutes from "./routes/movieRoutes.js"


// create middleware
function requestMovie(req, res, next) {
    console.log (`${req.method} ${req.path} ${new movie()}`)
    next()
}

function checkApiKey(req, res, next)

if (req.)






import controllers from "./controllers/movieController.js"



const app = express();



import movieRoutes from "./routes/movieRoutes.js"

// app.get ('/api/movies/:id', (req, res) => {
//     res.send("Hello World!!!!!!")
// })


// app.post ("/api/searchs", (req, res) => {
//     res.send("Created Succesfully")
// })

app.listen(port, ()=> {
    console.log("Server is listening on port :  "+ port )
})