import mongoose from "./mongoose"

const conncetDb = async(handler)=>{
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    return handler(req, res);
}

export default conncetDb;