import mongoose from 'mongoose'

export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MERN_STACK_JOB_SEEKING",
    }).then(()=>{
          console.log("connected to database")
    }).catch((err)=>{
        console.log(`some error occured while connecting to databse: ${err}`)
    })
}