const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/iNotebook'

const connectToMongo = async ()=>{
    try{
        await mongoose.connect(mongoURI)
        console.log('connected to mongoDB')
    }catch(err){
        console.log(err)
    }
    
}

module.exports = connectToMongo;