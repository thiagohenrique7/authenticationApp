import express from 'express'
import routes from "./routes"
const app = express()

app.use(routes)

//SUCRASE E TS NODE DEV
app.listen(4000)