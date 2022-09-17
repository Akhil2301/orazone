const mongoose=require('mongoose')


const connect=()=>{
    try{
        mongoose.connect(process.env.MONGO_URI,()=>{
            console.log(`connected to database ${process.env.PORT}`)
        })
    }catch(error){
       console.log('connection error');
    }
}

mongoose.connection.on('discconected',()=>{
    console.log('connection failed');
})

mongoose.connection.on('connected',()=>{
    console.log('connection success')
})


module.exports=connect