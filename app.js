require('dotenv').config()
require('express-async-errors')
const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')



const express = require('express')
const app = express()


app.use(express.json())
app.use('/api/v1/products', productsRouter)
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products</a><br><a href="/api/v1/products/static">static products</a>')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()