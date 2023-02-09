import express  from "express"
import listEndpoints from "express-list-endpoints"
import cors from "cors"
import { forbiddenErrorHandler, genericErroHandler, notFoundErrorHandler, unauthorizedErrorHandler } from "./errorHandler.js"

const server = express()
const port = process.env.PORT ||  3006


server.use(cors())
server.use(express.json())


server.use(unauthorizedErrorHandler)
server.use(forbiddenErrorHandler)
server.use(notFoundErrorHandler)
server.use(genericErroHandler)

server.listen(port , () => {
     console.table(listEndpoints(server))
     console.log("Server is running on ", port);
})










