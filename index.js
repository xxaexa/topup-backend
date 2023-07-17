import 'express-async-errors'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './db/connectDB.js'
// db and authenticateUser
// import connectDB from './db/connect.js'
dotenv.config()
// routers
import authRouter from './routes/authRoutes.js'
import orderRouter from './routes/orderRoutes.js'

connectDB()

//middleware
import notFoundMiddleWare from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ msg: 'hi from express' })
})

app.use('/api/auth', authRouter)
app.use('/api/order', orderRouter)

// middleware
app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
