import mongoose from "./mongoose"

const conncetDb = handler => async(req, res)=>{
    if(mongoose.connection[0].readyState){
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req, res);
}

export default conncetDb;