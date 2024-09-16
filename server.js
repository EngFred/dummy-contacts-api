import express from "express"
import router from "./routes/contactsRoutes.js"
import notFound from "./middlewares/notFount.js"

const port = process.env.PORT || 8081
const app = express()

app.use(express.json())

//routes
app.use('/api/v1/', router)

//errorHandler
app.use(notFound)

app.listen(port, () => { 
    console.log(`Sever running on port: ${port}`)
})

