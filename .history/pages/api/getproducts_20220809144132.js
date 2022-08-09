import Product from "../../models/Product"
import conncetDb from "../../middleware/mongoose"

const handler = async (req, res)=> {
    let products = await Productt.find()
    res.status(200).json({ products })
  }
  
  export default conncetDb(handler)