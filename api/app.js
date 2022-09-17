const express=require('express')
const morgan=require('morgan')
const dotenv=require('dotenv')
const cors=require('cors')
const expressValidator=require('express-validator')
const connect=require('./config/db.js')
const userRoute=require('./routes/userRoute.js')
const app=express()

//env
dotenv.config({path:'./config/config.env'})

//db
connect()

//middleware parse

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(expressValidator())
//routes

app.use('/',userRoute)



if(process.env.NODE_ENV=='DEV'){
    
    app.use(morgan('dev'))
}


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})
