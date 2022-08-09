import mongoose from "./mongoose"

const conncetDb = handler => async(req, res)=>{
    if(mongoose.connections[1].readyState){
        return handler(req, res)
    }
    return handler(req, res);
}

export default conncetDb;