import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'


// App Config

const PORT = process.env.PORT || 4000

const app = express()
await connectDB()



// Intialize Middlewares
app.use(express.json())
app.use(cors())




// API Routes;
app.get('/', (req, res) => {
    res.send('Api Working')
});





app.listen(PORT, () => {
    console.log("Server Running on PORT " + PORT)
});