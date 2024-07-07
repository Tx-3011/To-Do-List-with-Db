const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware

app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(express.static('./public'))

// routes


// app.get get all tasks
// app.post create task
// app.get get a specific task
// app.patch update the specific task
// app.delete delete the specific task





const port = 3000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is running on port ${port} ...`))

    } catch (error) {
        console.log(error);
    }
}

start()

