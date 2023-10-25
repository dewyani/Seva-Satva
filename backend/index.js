const express = require("express")
const app = express()
require('dotenv').config();
const cors = require("cors")
const cookieParser = require("cookie-parser")

const userRouter = require("./routes/User")
const grievanceRouter = require("./routes/Grievance")
const courseRouter = require("./routes/Course")
const connectDB = require("./db/connect")
const port = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.json({ status: "From / [get] , success" })
})

// routes
app.use('/course', courseRouter);
app.use('/grievance', grievanceRouter);
app.use('/auth' , userRouter)

const startApp = async () => {
    try {
        await connectDB(process.env.ATLAS_CONNECT)
        console.log("DB IS CONNECTED , START SERVER ...")
        app.listen(port, () => {
            console.log(`server is listening to ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()