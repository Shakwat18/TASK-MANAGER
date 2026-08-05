const app=require('./app')
const connectDB = require('./config/db')

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server is running 
http://localhost:${port}`)
        connectDB()
})