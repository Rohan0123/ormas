import mongoose from "./mongoose"

const conncetDb = handler => async(req, res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }
    awai
    return handler(req, res);
}

export default conncetDb;